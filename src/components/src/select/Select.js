import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
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
} from '../Utils';
import Element from '../common/Element';
import {
  IconArrowDown,
  IconArrowUp,
  IconChecked2,
  IconClear,
  IconNoData,
} from '../Icons';
import useInternalState from '../common/useInternalState';
import {PopupCtrlType} from '../common/Constants';
import clsx from 'clsx';
import Item from '../menu/Item';
import {preventEvent} from '../event';
import Loader from '../Loader';
import useMultipleRefs from '../common/UseMultipleRefs';
import * as PropTypes from 'prop-types';
import useEventCallback from '../common/useEventCallback';

const Option = React.forwardRef((props, ref) => {
  const {
    value,
    children,
    hasBackground = true,
    text,
    render,
    ...otherProps
  } = props;

  return <Menu.Item id={value} hasBackground={hasBackground}
                    ref={ref} {...otherProps}>
    {children ? children : text}
  </Menu.Item>;
});

Option.Left = Item.Left;
Option.Center = Item.Center;
Option.Right = Item.Right;

Option.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  text: PropTypes.node,
  hasBackground: PropTypes.bool,
};

//todo select proptypes
const Select = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'select-menu popup',
    name,
    children,
    placeholder,
    style,
    inputStyle,
    inputProps,//todo, need to evaluate using props instead of input props( for form item)
    errorType, //for form
    size = 'medium',
    disabled = false,
    searchable = false,
    autoWidth = true,
    multiSelect = false,
    hasBorder = false,
    hasBox = true,
    activeBy = PopupCtrlType.click,
    block = false,
    defaultValue,
    value,
    onSelect,
    onSearch, //customized searching
    searchDelay = 300,
    noDataText = 'Not Found',
    searchInputWidth = 16,
    hasArrow = true,
    arrowIcon = <IconArrowDown/>,
    activeArrowIcon = <IconArrowUp/>,
    removeIcon,
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
  const {state: isActive, setState: setActive, customized: customActive}
      = useInternalState({
    props,
    stateName: 'active',
    defaultState: defaultActive,
    state: active,
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

  const {
    state: selectedValue,
    setState: setValue,
    customized: customValue,
  } = useInternalState({
    props,
    stateName: 'value',
    defaultState: convertToArray(defaultValue),
    state: convertToArray(value),
  });

  const ctrlStyle = searchable ? null : {cursor: 'pointer', ...inputStyle};

  useEffect(() => {
    if (!autoWidth || disabled) {
      return;
    }

    const inputDomNode = inputRef.current;
    //adjust the input's width
    if (multiSelect && inputDomNode) {
      const decDomNode = detectRef.current;
      inputDomNode.style.width = decDomNode.width > searchInputWidth
          ? `${decDomNode.width +
          3}px`
          : `${searchInputWidth}px`;
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
  }, [searchInputWidth, searchedValue, disabled, autoWidth, multiSelect]);

  //get all items information
  const allItemsInfo = useMemo(() => {
    if (React.Children.count(children) === 0) {
      return [];
    }

    return React.Children.map(children, child => {
      if (child.type !== Option) {
        return null;
      }
      return {
        value: child.props.value,
        text: child.props.text,
        children: child.props.children,
        render: child.props.render,
      };
    }).filter(elem => !isNil(elem));
  }, [children]);

  const findItemInfo = useCallback((val) => {
    return allItemsInfo.find(item => item.value === val);
  }, [allItemsInfo]);

  const checkSelected = (val) => {
    return selectedValue.find(item => item === val);
  };

  //get the value of an Option
  const getText = useCallback((itemInfo) => {
    if (!itemInfo) {
      return null;
    }

    if (nonNil(itemInfo.render)) {
      return invoke(itemInfo.render, itemInfo);
    }

    return isNil(itemInfo.text)
        ? itemInfo.children
        : itemInfo.text;
  }, []);

  //get selected text for single selection
  const getSelectedText = useCallback(() => {
    if (multiSelect) {
      throw new Error(
          'The method getSelectedText shouldn\'t be called for multiple selection.');
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
  const getItemsBySearchValue = useCallback((itemValue) => {
    const childInfo = findItemInfo(itemValue);
    return isNil(childInfo) ? false : containsIgnoreCase(searchedValue,
        getText(childInfo));
  }, [findItemInfo, getText, searchedValue]);

  //filter the items base on the searchValue
  const filterItems = useCallback(() => {
    return children.filter(
        (chd) => getItemsBySearchValue(chd.props.value));
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
    return React.Children.map(items, oneChild => {
      const newChild = <>
        <Option.Center>{oneChild.props.children}</Option.Center>
        {
          checkSelected(oneChild.props.value)
              ? <Option.Right><IconChecked2/></Option.Right>
              : null
        }
      </>;
      return React.cloneElement(oneChild,
          {...oneChild.props, customizedChildren: true}, newChild);
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
      return allItemsInfo.includes(
          itemInfo => getText(itemInfo) === searchedValue);
    }
    return true;
  }, [searchedValue, allItemsInfo, getText]);

  const changeSearchValue = useCallback((nextValue) => {
    setSearchedValue(nextValue);
    onSearch && onSearch(nextValue);
  }, [setSearchedValue, onSearch]);

  const realIcon = useMemo(() => {
    if (loading) {
      return <Loader type={loaderType} active size="small"/>;
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
    activeArrowIcon]);

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

  const changeActive = useCallback((next, e) => {
    if (isActive === next) {
      return;
    }
    if (!customActive) {
      setActive(next);
    }
    onActiveChange && onActiveChange(next, e);

    const inputDom = inputRef.current;
    inputDom && inputDom.focus();
  }, [isActive, customActive, setActive, onActiveChange]);

  const removeItem = useEventCallback((v, e) => {
    if (!customValue) {
      const rest = selectedValue.filter(val => val !== v);
      setValue(rest);
    }
    onRemove && onRemove(v, e);
    preventEvent(e);
  });

  let multiSelectCtrl;
  multiSelectCtrl = useMemo(() => {
    if (!multiSelect) {
      return null;
    }
    let copiedProps = {
      ...inputProps,
      placeholder: realPlaceHolder,
      readOnly: !searchable,
      style: {pointerEvents: searchable ? 'cursor' : 'none', ...ctrlStyle},
      value: displayText,
      onChange: handleSearch,
      onBlur: handleBlur,
      className: clsx('select-input', size, inputProps?.extraClassName),
    };

    const multiSelCls = clsx('select-multiple', size,
        {block, 'active': isActive, 'with-select-box': hasBox && isActive},
        getErrorClsName(errorType));

    return <span className={multiSelCls}
                 style={style}
                 ref={multiSelectRef}>
        <span className="select-multiple-content">
        {
          selectedValue.map(findItemInfo).map(item =>
              nonNil(item.render) ? item.render(
                  {...item, removeItem: removeItem})
                  : <span key={`item-${item.value}`} className="multi-item">
                <span>{getText(item)}</span>
                <div className="icon-column" onClick={(e) => {
                  removeItem(item.value, e);
                }}>
                  <IconClear size="small"/>
                </div>
              </span>,
          )
        }
          <input name={name} ref={inputMultiRef} {...copiedProps}/>

          <span ref={detectRef} className='search-text-detector'>
        {/*this used to detect the width of the input value in pixel*/}
            {searchedValue}
          </span>
          </span>
          </span>;
  }, [
    block,
    ctrlStyle,
    displayText,
    errorType,
    findItemInfo,
    getText,
    handleBlur,
    handleSearch,
    inputMultiRef,
    inputProps,
    multiSelect,
    multiSelectRef,
    name,
    realPlaceHolder,
    removeItem,
    searchable,
    searchedValue,
    selectedValue,
    size,
    style]);

  const getCtrl = () => {
    if (multiSelect) {
      return multiSelectCtrl;
    }

    const selectClsName = clsx('select', size, {
      'with-select-box': hasBox && isActive,
      'active': isActive,
      disabled,
    });

    const contentClsName = clsx('select-content  ', {
      placeholder: isBlank(displayText),
    });

    return <div className={selectClsName} style={style}
                ref={multiSelectRef}>
      <div className="select-info ellipsis" unselectable="on">
        <div className={contentClsName}
             style={{display: !searchable ? 'flex' : 'none'}}>
          {!isBlank(displayText) ? displayText : placeholder}
        </div>
        <input className="select-input"
               name={name}
               value={displayText}
               disabled={disabled}
               placeholder={searchable ? realPlaceHolder : null}
               style={{display: searchable ? 'block' : 'none'}}
               onChange={handleSearch}
               onBlur={handleBlur}
               ref={inputMultiRef}/>
      </div>
      {
        hasArrow && <div className="icon-column">
          {realIcon}
        </div>
      }
    </div>;

    /* return <Input name={name} errorType={errorType}
                   ref={inputMultiRef}
                   disabled={disabled}
                   block={block}
                   size={size}
                   {...copiedProps}
                   rootRef={multiSelectRef}
                   icon={realIcon}/>;*/
  };

  const selectHandler = useEventCallback((items, e) => {
    const itemsArray = convertToArray(items);
    if (multiSelect) {
      if (!isActive) {
        changeActive(true, e);
      }
      //prevent the popup from being closed
      preventEvent(e);
    }

    if (!customValue) {
      setValue(itemsArray);
      setSearchedValue(null);
    }

    const item = multiSelect ? itemsArray : itemsArray[0];
    if (onSelect) {
      onSelect(item, e);
    } else if (onChange) {
      onChange(item, e);
    }
  });

  const popBody = useMemo(() => {
    return nonNil(finalItems) && finalItems.length === 0 ?
        <Element className="no-data">
          <IconNoData extraClassName="no-data-icon"/>
          <span className="no-data-label">{noDataText}</span>
        </Element>
        : <Menu ref={menuRef} activeItems={selectedValue}
                hasBox={false}
                multiSelect={multiSelect}
                onSelect={selectHandler}
                {...menuProps}>
          {finalItems}
        </Menu>;
  }, [
    finalItems,
    menuProps,
    multiSelect,
    noDataText,
    selectHandler,
    selectedValue]);

  const popupCntExtraCls = clsx(popupExtraClassName, {
    'global-with-border': hasBorder,
    'global-with-box': hasBox,
  });

  return <Popup
      active={isActive}
      onChange={changeActive}
      activeBy={activeBy}
      className={clsx(extraClassName, className)}
      ctrlRef={rootRef}
      ctrlNode={getCtrl()}
      body={popBody}
      popupExtraClassName={popupCntExtraCls}
      {...otherProps}
  />;
});

Select.Option = Option;

export default Select;