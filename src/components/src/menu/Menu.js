import React, {useEffect, useMemo, useRef} from 'react';
import SubMenu from './SubMenu';
import Item from './Item';
import clsx from 'clsx';
import Group from './Group';
import BaseMenu from './BaseMenu';
import {MenuContext} from '../common/Context';
import {cancelIndent, indentMenu} from './MenuUtils';
import useMultipleRefs from '../common/UseMultipleRefs';
import useInternalState from '../common/useInternalState';
import {convertToArray} from '../Utils';
import {JustifyContentType} from '../common/Constants';
import usePrevious from '../common/UsePrevious';

const Menu = React.forwardRef((props, ref) => {
  const {
    justify,
    direction,
    type = 'normal',
    popupSubMenu = false,
    children,
    autoIndent = true,
    indentUnit = 'rem',
    indentation = 2,
    hasArrow = true,
    onSelect,
    onClickHeader,

    multiSelect = false,

    compact = false,
    defaultActiveItems,
    activeItems,

    ...otherProps
  } = props;
  const clsName = clsx('menu', JustifyContentType[justify]);
  const menuRef = useRef(null);
  const multiRef = useMultipleRefs(ref, menuRef);

  const {
    state: activeItemsList,
    setState: setActiveItems,
    customizedActive,
  } = useInternalState({
    props,
    stateName: 'activeItems',
    defaultState: convertToArray(defaultActiveItems),
    state: convertToArray(activeItems),
  });

  const isPopup = popupSubMenu || compact;
  const preCompact = usePrevious(compact);

  useEffect(() => {
    if (autoIndent && !isPopup) {
      indentMenu({
        popupSubMenu: isPopup,
        rootDom: menuRef.current,
        indentUnit,
        indentation,
      });
    }

    if (!preCompact && compact) {
      //remove the padding-left attribute
      cancelIndent({rootDom: menuRef.current});
    }
  }, [
    isPopup,
    autoIndent,
    menuRef,
    indentUnit,
    indentation,
    preCompact,
    compact]);

  const newChildren = useMemo(() => {
    if (!children) {
      return null;
    }
    return React.Children.map(children, chd => {
      if (chd.type === SubMenu) {
        return React.cloneElement(chd, {directChild: true});
      }
      return chd;
    });
  }, [children]);

  const clickItemHandler = (itemInfo, e) => {
    if (multiSelect) {

    } else {
      onSelect && onSelect(itemInfo, e);

      if (!customizedActive) {
        setActiveItems([itemInfo.id]);
      }
    }
  };

  const ctx = {
    type,
    direction,
    popupSubMenu: isPopup,
    hasArrow,
    compact,

    activeItemsList,
    clickItem: clickItemHandler,
  };
  return <MenuContext.Provider value={ctx}>
    <BaseMenu className={clsName}
              popupSubMenu={false}//tells base menu to ignore the menu since it can't pop any items list
              ref={multiRef}
              hasHeader={false}
              type={type}
              hasArrow={hasArrow}
              direction={direction}
              compact={compact}
              canCompact={true}
              rootMenu={true}
              animateCompact={true}
              {...otherProps} >
      {newChildren}
    </BaseMenu>
  </MenuContext.Provider>;
});

Menu.SubMenu = SubMenu;
Menu.Item = Item;
Menu.Group = Group;

export default Menu;