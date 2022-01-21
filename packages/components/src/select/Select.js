import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Popup from '../popup/Popup';
import Menu from '../menu';
import {
  containsIgnoreCase,
  convertToArray,
  execute,
  getErrorClsName,
  invoke,
  isBlank,
  isCustomized,
  isNil,
  nonNil,
  preventEvent
} from '../Utils';
import Element from '../common/Element';
import { IconArrowDown, IconArrowUp, IconChecked2, IconClear, IconNoData } from '../Icons';
import useInternalState from '../common/useInternalState';
import { PopupCtrlType } from '../common/Constants';
import clsx from 'clsx';
import Loader from '../Loader';
import useMultipleRefs from '../common/UseMultipleRefs';
import * as PropTypes from 'prop-types';
import useEventCallback from '../common/useEventCallback';

/**
 * Option Component
 */
const Option = React.forwardRef((props, ref) => {
  const { value, children, text, render, ...otherProps } = props;

  return (
    <Menu.Item id={value} ref={ref} {...otherProps}>
      {children ? children : text}
    </Menu.Item>
  );
});

Option.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.node,
  render: PropTypes.func
};

/**
 * Select Component
 */
const Select = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'select-menu popup',
    compactMenu = false, //todo
    name,
    children,
    placeholder,
    style,
    errorType, //for form
    size = 'medium',
    disabled = false,
    searchable = false,
    autoWidth = true,
    multiSelect = false,
    hasBorder = false,
    hasBox = true,
    activeBy = PopupCtrlType.click,
    block = true,
    defaultValue,
    value,
    onSelect,
    onSearch, //customized searching
    searchDelay = 300,
    noDataText = 'Not Found',
    searchInputWidth = 16,
    hasArrow = true,
    arrowIcon = <IconArrowDown />,
    activeArrowIcon = <IconArrowUp />,
    defaultActive = false,
    active, //whether to show the popup
    onChange, //for changing value, same as onSelect
    onActiveChange, //todo
    onRemove,
    popupExtraClassName,
    menuProps = {},
    removable = true, //whether the search text can be removed
    loaderType = 'primary',
    loading = false,
    ctrlRef,
    ...otherProps
  } = props;
  //use a internal state to host the active state
  const [isActive, setActive] = useInternalState({
    props,
    stateName: 'active',
    defaultState: defaultActive,
    state: active
  });

  //the search value corresponds to item's text, it won't be exposed to outside caller
  const [searchedValue, setSearchedValue] = useState(null);
  const customSearch = isCustomized(props, 'onSearch');

  const inputRef = useRef();
  const inputMultiRef = useMultipleRefs(inputRef, ctrlRef);

  const menuRef = useRef();
  const detectRef = useRef();
  const searchTimer = useRef(null);

  const rootRef = useRef();
  const multiSelectRef = useMultipleRefs(ref, rootRef);

  const [selectedValue, setValue] = useInternalState({
    props,
    stateName: 'value',
    defaultState: convertToArray(defaultValue),
    state: convertToArray(value)
  });
  const ctrlStyle = useMemo(() => (searchable ? null : { cursor: 'pointer' }), [searchable]);

  useEffect(() => {
    if (!autoWidth || disabled || !isActive) {
      return;
    }

    const inputDomNode = inputRef.current;
    //adjust the input's width
    if (multiSelect && inputDomNode) {
      const decDomNode = detectRef.current;
      inputDomNode.style.width =
        decDomNode.width > searchInputWidth ? `${decDomNode.width + 3}px` : `${searchInputWidth}px`;
    }

    //adjust the menu's width
    let rect = rootRef.current.getBoundingClientRect();

    const width = rect.width;
    if (width <= 0) {
      return;
    }
    if (menuRef.current) {
      const parentNode = menuRef.current.parentNode;
      if (parentNode) {
        parentNode.style.width = `${width}px`;
      }
    }
  }, [searchInputWidth, searchedValue, disabled, autoWidth, multiSelect, isActive]);

  //get all items information
  const allItemsInfo = useMemo(() => {
    if (React.Children.count(children) === 0) {
      return [];
    }

    return React.Children.map(children, (child) => {
      if (child.type !== Option) {
        return null;
      }
      return {
        value: child.props.value,
        text: child.props.text,
        children: child.props.children,
        render: child.props.render
      };
    }).filter((elem) => !isNil(elem));
  }, [children]);

  const findItemInfo = useCallback(
    (val) => {
      return allItemsInfo.find((item) => item.value === val);
    },
    [allItemsInfo]
  );

  const checkSelected = (val) => {
    return selectedValue.find((item) => item === val);
  };

  //get the value of an Option
  const getText = useCallback((itemInfo) => {
    if (!itemInfo) {
      return null;
    }

    if (nonNil(itemInfo.render)) {
      return invoke(itemInfo.render, itemInfo);
    }

    return isNil(itemInfo.text) ? itemInfo.children : itemInfo.text;
  }, []);

  //get selected text for single selection
  const getSelectedText = useCallback(() => {
    if (multiSelect) {
      throw new Error("The method getSelectedText shouldn't be called for multiple selection.");
    }
    if (selectedValue.length === 0) {
      return null;
    }
    const itemInfo = findItemInfo(selectedValue[0]);
    return getText(itemInfo);
  }, [multiSelect, selectedValue, findItemInfo, getText]);

  //get input value to display
  const displayText = useMemo(() => {
    if (!isNil(searchedValue)) {
      return searchedValue;
    }
    if (selectedValue.length === 0 || (multiSelect && isBlank(searchedValue))) {
      return '';
    }
    const selectedText = getSelectedText();
    return isNil(selectedText) ? '' : selectedText;
  }, [selectedValue, multiSelect, searchedValue, getSelectedText]);

  //check whether the value partially equals to any item's value
  const getItemsBySearchValue = useCallback(
    (itemValue) => {
      const childInfo = findItemInfo(itemValue);
      return isNil(childInfo) ? false : containsIgnoreCase(searchedValue, getText(childInfo));
    },
    [findItemInfo, getText, searchedValue]
  );

  //filter the items base on the searchValue
  const filterItems = useCallback(() => {
    return children.filter((chd) => getItemsBySearchValue(chd.props.value));
  }, [children, getItemsBySearchValue]);

  const getDisplayItems = () => {
    let items = [];

    //if onSearch is specified or no search text exists,  the items should be injected from outside
    if (customSearch || isBlank(searchedValue)) {
      items = children;
    } else {
      items = filterItems();
    }

    if (!multiSelect) {
      return items;
    }
    return React.Children.map(items, (oneChild) => {
      const newChild = (
        <>
          {oneChild.props.icon ? (
            <span className="icon-column" style={{ color: 'inherit' }}>
              {oneChild.props.icon}
            </span>
          ) : null}
          <div className="item-info">{oneChild.props.children}</div>
          {checkSelected(oneChild.props.value) ? (
            <span className="icon-column" style={{ color: 'inherit' }}>
              <IconChecked2 />
            </span>
          ) : null}
        </>
      );
      return React.cloneElement(
        oneChild,
        { ...oneChild.props, customizedChildren: true },
        newChild
      );
    });
  };

  const finalItems = getDisplayItems();

  //search by value
  const handleSearch = useEventCallback((e) => {
    const inputVal = e.target.value;
    clearTimeout(searchTimer.current);
    setSearchedValue(inputVal);

    if (!isActive) {
      changeActive(true, e);
    }

    searchTimer.current = execute(() => {
      //notify to search
      if (customSearch) {
        onSearch && onSearch(inputVal);
      }
    }, searchDelay);
  });

  const realPlaceHolder = useMemo(() => {
    if (multiSelect) {
      return placeholder;
    }

    return getSelectedText() || placeholder;
  }, [multiSelect, placeholder, getSelectedText]);

  //check whether the searchedValue is exactly same with any item's value
  const searchHits = useMemo(() => {
    if (!isBlank(searchedValue)) {
      //check whether the searchedValue equals to one of the items
      return allItemsInfo.includes((itemInfo) => getText(itemInfo) === searchedValue);
    }
    return true;
  }, [searchedValue, allItemsInfo, getText]);

  const changeSearchValue = useCallback(
    (nextValue) => {
      setSearchedValue(nextValue);
      onSearch && onSearch(nextValue);
    },
    [setSearchedValue, onSearch]
  );

  const realIcon = useMemo(() => {
    if (loading) {
      return <Loader type={loaderType} active size="small" />;
    }
    if (multiSelect) {
      return null;
    }

    if (removable && !isBlank(searchedValue)) {
      return 'x';
    }

    return isActive ? activeArrowIcon : arrowIcon;
  }, [
    isActive,
    loading,
    loaderType,
    multiSelect,
    removable,
    searchedValue,
    arrowIcon,
    activeArrowIcon
  ]);

  const handleBlur = useCallback(() => {
    //if no item's text is same with searchedValue
    if (!searchHits) {
      //clear
      //async execution in order not to firstly show the updated menu items and then
      //close the popup while searchedValue is changed,
      execute(() => {
        changeSearchValue(null);
      }, searchDelay);
    }
  }, [searchHits, changeSearchValue, searchDelay]);

  const changeActive = useCallback(
    (next, e) => {
      if (isActive === next) {
        return;
      }
      setActive(next);
      onActiveChange && onActiveChange(next, e);

      const inputDom = inputRef.current;
      inputDom && inputDom.focus();
    },
    [isActive, setActive, onActiveChange]
  );

  const removeItem = useEventCallback((v, e) => {
    preventEvent(e);
    const rest = selectedValue.filter((val) => val !== v);
    setValue(rest);
    onRemove && onRemove(v, e);
  });

  let multiSelectCtrl = useMemo(() => {
    if (!multiSelect) {
      return null;
    }
    let copiedProps = {
      readOnly: !searchable,
      style: { pointerEvents: searchable ? 'cursor' : 'none', ...ctrlStyle },
      value: displayText,
      onChange: handleSearch,
      onBlur: handleBlur,
      className: clsx('select-input', size, { disabled })
    };

    const multiSelCls = clsx(
      'select-multiple',
      size,
      { block, active: isActive, 'with-select-box': hasBox && isActive, disabled },
      getErrorClsName(errorType)
    );

    return (
      <span className={multiSelCls} style={style} ref={multiSelectRef}>
        <span className="select-multiple-content">
          {selectedValue.length === 0 && placeholder && (
            <span className="placeholder-text ellipsis">{placeholder}</span>
          )}

          {selectedValue.map(findItemInfo).map((item) => {
            if (isNil(item)) {
              return null;
            }
            return nonNil(item.render) ? (
              item.render({ ...item, removeItem: removeItem })
            ) : (
              <span key={`item-${item.value}`} className={`multi-item ${size}`}>
                <span>{getText(item)}</span>
                <div
                  className={`icon-column ${disabled ? 'disabled' : ''}`}
                  onClick={(e) => {
                    !disabled && removeItem(item.value, e);
                  }}
                >
                  <IconClear size="small" />
                </div>
              </span>
            );
          })}
          <input name={name} ref={inputMultiRef} {...copiedProps} />

          <span ref={detectRef} className="search-text-detector">
            {/*this used to detect the width of the input value in pixel*/}
            {searchedValue}
          </span>
        </span>
      </span>
    );
  }, [
    block,
    ctrlStyle,
    disabled,
    displayText,
    errorType,
    findItemInfo,
    getText,
    handleBlur,
    handleSearch,
    hasBox,
    inputMultiRef,
    isActive,
    multiSelect,
    multiSelectRef,
    name,
    placeholder,
    removeItem,
    searchable,
    searchedValue,
    selectedValue,
    size,
    style
  ]);

  const getCtrl = () => {
    if (multiSelect) {
      return multiSelectCtrl;
    }

    const selectClsName = clsx('select', size, getErrorClsName(errorType), {
      'with-select-box': hasBox && isActive,
      active: isActive,
      block,
      disabled
    });

    const contentClsName = clsx('select-content  ', {
      placeholder: isBlank(displayText)
    });

    return (
      <div className={selectClsName} style={style} ref={multiSelectRef}>
        <div className="select-info ellipsis" unselectable="on">
          <div className={contentClsName} style={{ display: !searchable ? 'flex' : 'none' }}>
            {!isBlank(displayText) ? displayText : placeholder}
          </div>
          <input
            className="select-input"
            name={name}
            value={displayText}
            disabled={disabled}
            placeholder={searchable ? realPlaceHolder : null}
            style={{ display: searchable ? 'block' : 'none' }}
            onChange={handleSearch}
            onBlur={handleBlur}
            ref={inputMultiRef}
          />
        </div>
        {hasArrow && <div className={`icon-column ${disabled ? 'disabled' : ''}`}>{realIcon}</div>}
      </div>
    );
  };

  const selectHandler = useEventCallback((items, e) => {
    const itemsArray = convertToArray(items);
    if (multiSelect) {
      //prevent the popup from being closed
      preventEvent(e);
      if (!isActive) {
        changeActive(true, e);
      }
    }

    setValue(itemsArray);
    setSearchedValue(null);
    const item = multiSelect ? itemsArray : itemsArray[0];
    onSelect && onSelect(item, e);

    //for form, the form component need to get the name by name and it required to be triggered by onChange
    onChange && onChange(item, e);
  });

  const popBody = useMemo(() => {
    return nonNil(finalItems) && finalItems.length === 0 ? (
      <Element className="no-data">
        <IconNoData extraClassName="no-data-icon" />
        <span className="no-data-label">{noDataText}</span>
      </Element>
    ) : (
      <Menu
        ref={menuRef}
        activeItems={selectedValue}
        hasBox={false}
        multiSelect={multiSelect}
        onSelect={selectHandler}
        {...menuProps}
      >
        {finalItems}
      </Menu>
    );
  }, [finalItems, menuProps, multiSelect, noDataText, selectHandler, selectedValue]);

  const popupCntExtraCls = clsx(popupExtraClassName, {
    'global-with-border': hasBorder,
    'global-with-box': hasBox
  });

  return (
    <Popup
      disabled={disabled}
      active={isActive}
      onChange={changeActive}
      activeBy={activeBy}
      className={clsx(extraClassName, className, {
        compact: compactMenu,
        'non-compact': !compactMenu
      })}
      ctrlRef={rootRef}
      ctrlNode={getCtrl()}
      body={popBody}
      popupExtraClassName={popupCntExtraCls}
      {...otherProps}
    />
  );
});

Select.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  errorType: PropTypes.oneOf(['ok', 'warning', 'error']),
  size: PropTypes.oneOf(['large', 'medium', 'small']), //the size of the button
  disabled: PropTypes.bool,
  searchable: PropTypes.bool,
  autoWidth: PropTypes.bool,
  multiSelect: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasBox: PropTypes.bool,
  activeBy: PropTypes.oneOf(['hover', 'click']),
  block: PropTypes.bool,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onSelect: PropTypes.func,
  onSearch: PropTypes.func,
  searchDelay: PropTypes.number,
  noDataText: PropTypes.node,
  searchInputWidth: PropTypes.number,
  hasArrow: PropTypes.bool,
  arrowIcon: PropTypes.node,
  activeArrowIcon: PropTypes.node,
  defaultActive: PropTypes.bool,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  onActiveChange: PropTypes.func,
  onRemove: PropTypes.func,
  popupExtraClassName: PropTypes.string,
  menuProps: PropTypes.object,
  removable: PropTypes.bool,
  loaderType: PropTypes.string,
  loading: PropTypes.bool,
  compactMenu: PropTypes.bool
};

Select.Option = Option;

export default Select;
