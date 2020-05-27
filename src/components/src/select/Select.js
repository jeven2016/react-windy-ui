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
import useMultipleRefs from '../common/UseMultipleRefs';
import {animated, useSpring} from 'react-spring';
import Item from '../menu/Item';

const Option = React.forwardRef((props, ref) => {
  const {value, children, text, ...otherProps} = props;

  return <Menu.Item id={value} hasBackground
                    ref={ref} {...otherProps}>
    {children ? children : text}
  </Menu.Item>;
});

Option.Left = Item.Left;
Option.Center = Item.Center;
Option.Right = Item.Right;

const Select = React.forwardRef((props, ref) => {
  const {
    className = 'select-menu popup',
    children,
    placeholder,
    inputStyle,
    size = 'medium',
    disabled = false,
    searchable = false,
    autoWidth = true,
    multiple = false,
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

    arrowIcon = <IconArrowDown/>,
    removeIcon,

    defaultActive = false,
    active, //whether to show the popup
    onChange, //for changing active state

    popupExtraClassName,
    menuProps = {},
    removable = true, //whether the search text can be removed
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

  const [activeIcon, setActiveIcon] = useState(false);
  const customSearch = isCustomized(props, 'onSearch');

  const popupInstanceRef = useRef();
  const ctrlRef = useRef();
  const inputRef = useRef();
  const menuRef = useRef();
  const detectRef = useRef();
  const searchTimer = useRef(null);

  const multipleSelectRef = useMultipleRefs(ref, ctrlRef);

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
    if (multiple && !isBlank(searchedValue)) {
      inputDomNode.style.width = detectRef.current.offsetWidth + 'px';
    }

    //adjust the menu's width
    let rect = multiple ? ctrlRef.current.getBoundingClientRect()
        : inputDomNode.getBoundingClientRect();

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
  }, [disabled, autoWidth, multiple]);

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

  //get selected text for single selection
  const getSelectedText = () => {
    if (multiple) {
      throw new Error(
          'The method getSelectedText shouldn\'t be called for multiple selection.');
    }
    if (selectedValue.length === 0) {
      return null;
    }
    const itemInfo = findItemInfo(selectedValue[0]);
    return getText(itemInfo);
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

  //get input value to display
  const displayText = useMemo(() => {
    if (selectedValue.length === 0 || (multiple && isBlank(searchedValue))) {
      return null;
    }
    if (!isNil(searchedValue)) {
      return searchedValue;
    }

    return getSelectedText();
  }, [selectedValue, multiple, searchedValue, getSelectedText]);

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

    if (!multiple) {
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
    if (multiple) {
      return placeholder;
    }

    return getSelectedText() || placeholder;
  }, [multiple, placeholder, getSelectedText]);

  //check whether the searchedValue is exactly same with any item's value
  const searchHits = useMemo(() => {
    if (!multiple && !isBlank(searchedValue)) {
      //check whether the searchedValue equals to one of the items
      return allItemsInfo.includes(
          itemInfo => getText(itemInfo) === searchedValue);
    }
    return true;
  }, [multiple, searchedValue, allItemsInfo, getText]);

  const changeSearchValue = useCallback((nextValue) => {
    setSearchedValue(nextValue);
    onSearch && onSearch(nextValue);
  }, [setSearchedValue, onSearch]);

  // arrow icon
  const arrowSpring = useSpring({
    from: {transform: 'rotate(0deg) translate3d(0, -50%, 0)'},
    to: {
      transform: isActive
          ? 'rotate(-180deg) translate3d(0, 50%, 0)'
          : 'rotate(0) translate3d(0, -50%, 0)',
    },
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  });

  const realIcon = useMemo(() => {
    if (multiple) {
      return null;
    }

    if (removable && !isBlank(searchedValue)) {
      return <div className="icon-column">X</div>;
    }
    return <animated.div className="icon-column" style={arrowSpring}>
      {arrowIcon}
    </animated.div>;
  }, [multiple, removable, searchedValue, arrowIcon, arrowSpring]);

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

  const changeActive = useCallback((next) => {
    if (isActive === next) {
      return;
    }
    if (!customActive) {
      setActive(next);
    }
    onChange && onChange(next);
  }, [isActive, customActive, setActive, onChange]);

  const getCtrl = () => {
    const input = <>
      <Input placeholder={realPlaceHolder} readOnly={!searchable}
             ref={inputRef}
             style={ctrlStyle}
             value={displayText || ''}
             onChange={handleSearch}
             onBlur={handleBlur}
      />
    </>;
    if (multiple) {
      return <span className='select-multiple'>
        <span className="select-multiple-content">
        {
          // displayedItems
        }
          {input}
          <span ref={detectRef} className="search-text-detector">
            {/*this used to detect the width of the input value in pixel*/}
            {searchedValue}
           </span>
        </span>
      </span>;
    }
    return <Input.IconInput inputRef={inputRef} disabled={disabled}
                            block={block} size={size}>
      {input}
      {realIcon}
    </Input.IconInput>;
  };

  const clickItemHandler = (itemsArray, e) => {
    if (itemsArray.length > 0) {
      if (multiple) {

      } else {
        if (!customValue) {
          setValue(itemsArray);
          setSearchedValue(null);
        }
        onSelect && onSelect(itemsArray[0], e);
      }
    }
  };

  const getPopupBody = () => {
    return finalItems.length === 0 ?
        <Element className="no-data">
          <IconNoData extraClassName="no-data-icon"/>
          <span className="no-data-label">{noDataText}</span>
        </Element>
        : <Menu ref={menuRef} activeItems={selectedValue}
                hasBox={false}
                onSelect={clickItemHandler}
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
      ref={popupInstanceRef}
      activeBy={activeBy}
      className={className}
      ctrlRef={(domNode) => ctrlRef.current = domNode}
      ctrlNode={getCtrl()}
      body={getPopupBody()}
      popupExtraClassName={popupCntExtraCls}
      {...otherProps}
  />;
});

Select.Option = Option;

export default Select;