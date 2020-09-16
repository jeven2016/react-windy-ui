import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import Popup from '../popup/Popup';
import Input from '../Input';
import Menu from '../menu';
import {
  containsIgnoreCase,
  convertToArray,
  execute,
  isBlank,
  isCustomized,
  isNil,
} from '../Utils';
import Element from '../common/Element';
import {IconArrowDown, IconArrowUp, IconChecked2, IconNoData} from '../Icons';
import useInternalState from '../common/useInternalState';
import {PopupCtrlType} from '../common/Constants';
import clsx from 'clsx';
import {animated, useTransition} from 'react-spring';
import Item from '../menu/Item';
import Badge from '../Badge';
import {preventEvent} from '../event';
import Loader from '../Loader';
import useMultipleRefs from '../common/UseMultipleRefs';
import * as PropTypes from 'prop-types';

const Option = React.forwardRef((props, ref) => {
  const {value, children, hasBackground = true, text, ...otherProps} = props;

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

const Select = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'select-menu popup',
    children,
    placeholder,
    style,
    inputStyle,
    size = 'medium',
    disabled = false,
    searchable = false,
    autoWidth = true,
    multiSelect = false,
    hasBorder = false,
    hasBox = true,
    activeBy = PopupCtrlType.click,
    block,
    defaultValue,
    value,
    onSelect,
    onSearch, //customized searching
    searchDelay = 300,
    noDataText = 'Not Found',
    searchInputWidth = 16,
    arrowIcon = <IconArrowDown/>,
    activeArrowIcon = <IconArrowUp/>,
    removeIcon,
    defaultActive = false,
    active, //whether to show the popup
    onChange, //for changing active state
    onRemove,
    popupExtraClassName,
    menuProps = {},
    removable = true, //whether the search text can be removed
    loaderType = 'primary',
    showLoader = false,
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

  const internalCtrlRef = useRef();
  const inputRef = useRef();
  const menuRef = useRef();
  const detectRef = useRef();
  const searchTimer = useRef(null);

  const multiSelectRef = useMultipleRefs(ref, inputRef);
  const multiCtrlRef = useMultipleRefs(ctrlRef, internalCtrlRef);

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
    if (multiSelect) {
      const decDomNode = detectRef.current;
      inputDomNode.style.width = decDomNode.width > searchInputWidth
          ? `${decDomNode.width +
          3}px`
          : `${searchInputWidth}px`;
    }

    //adjust the menu's width
    let rect = multiSelect ? internalCtrlRef.current.getBoundingClientRect()
        : inputDomNode.parentNode.getBoundingClientRect();

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
    return React.Children.map(children, child => {
      if (child.type !== Option) {
        return null;
      }
      return {
        value: child.props.value,
        text: child.props.text,
        children: child.props.children,
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
    let items;

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
  const handleSearch = (e) => {
    const inputVal = e.target.value;
    clearTimeout(searchTimer.current);
    setSearchedValue(inputVal);

    if (!isActive) {
      changeActive(true);
    }

    searchTimer.current = execute(() => {
      //notify to search
      if (customSearch) {
        onSearch && onSearch(inputVal);
      }
    }, searchDelay);
  };

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
    if (showLoader) {
      return <div className="icon-column">
        <Loader type={loaderType} active size="small"/>
      </div>;
    }
    if (multiSelect) {
      return null;
    }

    if (removable && !isBlank(searchedValue)) {
      return <div className="icon-column">X</div>;
    }

    let icon = isActive ? activeArrowIcon : arrowIcon;
    return <div className="icon-column">{icon}</div>;
  }, [
    isActive,
    showLoader,
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
  }, [isActive, searchHits, changeSearchValue, searchDelay]);

  const changeActive = useCallback((next) => {
    if (isActive === next) {
      return;
    }
    if (!customActive) {
      setActive(next);
    }
    onChange && onChange(next);
  }, [isActive, customActive, setActive, onChange]);

  const tran = useTransition(selectedValue.map(findItemInfo),
      item => isNil(item) ? null : item.value, {
        from: {transform: 'scale(0.5)'},
        enter: {transform: 'scale(1)'},
        leave: {transform: 'scale(0.5)'},
        config: {clamp: true, mass: 1, tesion: 100, friction: 15},
      });

  const focusInput = useCallback(() => {
    inputRef.current.focus();
  }, [inputRef]);

  const removeItem = (v, e) => {
    if (!customValue) {
      const rest = selectedValue.filter(val => val !== value);
      setValue(rest);
    }
    onRemove && onRemove(v, e);
  };

  const getCtrl = () => {
    const inputProps = {
      placeholder: realPlaceHolder,
      readOnly: !searchable,
      ref: inputRef,
      style: ctrlStyle,
      value: displayText,
      onChange: handleSearch,
      onBlur: handleBlur,
    };
    if (multiSelect) {
      return <span className='select-multiple' onClick={focusInput}
                   style={style}
                   ref={multiSelectRef}>
        <span className="select-multiple-content">
        {
          tran.map(({item, props: tranProps, key}) => (
              <animated.span key={key} className="multi-item" style={tranProps}>
                <Badge type="tag"
                       color="gray">
                  <span>{getText(item)}</span>
                  <span className="remove-icon"
                        onClick={(e) => {removeItem(item.value, e);}}>×</span>
                </Badge>
              </animated.span>
          ))
        }
          <Input {...inputProps}/>
          <span ref={detectRef} className='search-text-detector'>
        {/*this used to detect the width of the input value in pixel*/}
            {searchedValue}
          </span>
          </span>
          </span>;
    }
    return <Input.IconInput inputRef={inputRef} disabled={disabled}
                            block={block} size={size} ref={multiSelectRef}
                            style={style} inputProps={inputProps}
                            icon={realIcon}/>;
  };

  const selectHandler = (itemsArray, e) => {
    if (multiSelect) {
      if (!isActive) {
        changeActive(true);
      }
      //prevent the popup from being closed
      preventEvent(e);
    }

    if (!customValue) {
      setValue(itemsArray);
      setSearchedValue(null);
    }
    onSelect && onSelect(itemsArray[0], e);
  };

  const getPopupBody = () => {
    return finalItems.length === 0 ?
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
  };

  const popupCntExtraCls = clsx(popupExtraClassName, {
    'global-with-border': hasBorder,
    'global-with-box': hasBox,
  });

  return <Popup
      active={isActive}
      onChange={changeActive}
      activeBy={activeBy}
      className={clsx(extraClassName, className)}
      ctrlRef={multiCtrlRef}
      ctrlNode={getCtrl()}
      body={getPopupBody()}
      popupExtraClassName={popupCntExtraCls}
      {...otherProps}
  />;
});

Select.Option = Option;

Popup.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  inputStyle: PropTypes.object,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  searchable: PropTypes.bool,
  autoWidth: PropTypes.bool,
  multiSelect: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasBox: PropTypes.bool,
  activeBy: PropTypes.string,
  block: PropTypes.bool,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSelect: PropTypes.func,
  onSearch: PropTypes.func,
  searchDelay: PropTypes.number,
  noDataText: PropTypes.node,
  searchInputWidth: PropTypes.number,
  arrowIcon: PropTypes.node,
  activeArrowIcon: PropTypes.node,
  removeIcon: PropTypes.node,
  defaultActive: PropTypes.bool,
  active: PropTypes.bool,
  onChange: PropTypes.func,
  onRemove: PropTypes.func,
  popupExtraClassName: PropTypes.string,
  menuProps: PropTypes.object,
  removable: PropTypes.bool,
  loaderType: PropTypes.string,
  showLoader: PropTypes.bool,
};

export default Select;