import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';
import Item from './Item';
import clsx from 'clsx';
import Group from './Group';
import BaseMenu from './BaseMenu';
import {MenuContext} from '../common/Context';
import {Action, cancelIndent, indentMenu, MenuDirection} from './MenuUtils';
import useMultipleRefs from '../common/UseMultipleRefs';
import {convertToArray, execute, includes, isCustomized, isNil} from '../Utils';
import {EventListener, JustifyContentType} from '../common/Constants';
import usePrevious from '../common/UsePrevious';
import {initStore} from '../common/Store';
import useEvent from '../common/UseEvent';

/**
 * Menu Component
 */
const Menu = React.forwardRef((props, ref) => {
  const {
    className = 'menu',
    extraClassName,
    hasBox = true,
    hasBorderRadius = true,
    hasArrow = true,
    collapsable = true,
    justify = 'start',
    direction = MenuDirection.vertical.key,
    type = 'normal',
    popupSubMenu = false,
    children,
    autoIndent = true,
    indentUnit = 'rem',
    indentation = 1.5,
    onSelect,
    onClickItem,
    multiSelect = false,
    compact = false,
    defaultActiveItems,
    activeItems,
    defaultOpenedMenus,
    openedMenus,
    onOpenedMenu, //invoked by opening / closing submenu
    selectable = true,
    ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className, JustifyContentType[justify]);
  const menuRef = useRef(null);
  const multiRef = useMultipleRefs(ref, menuRef);

  const defaultOpenList = convertToArray(defaultOpenedMenus);
  const preExpandList = useRef(defaultOpenList);//previous expanded submenus ( non-popup submenus)

  const customActive = isCustomized(props, 'activeItems');
  const customOpen = isCustomized(props, 'openedMenus');
  const preTimeoutRef = useRef(null); //previous close timer

  //init a internal store
  const [store] = useState(initStore({
    activeItemsList: convertToArray(defaultActiveItems),
    openList: defaultOpenList,
  }));

  //apply the customized properties
  useEffect(() => {
    if (customActive) {
      store.setState({activeItemsList: activeItems});
    }
    if (customOpen) {
      store.setState({openList: openedMenus});
    }
  }, [activeItems, openedMenus, store, compact, customActive, customOpen]);

  //for handling the menu switched from compact/popup to other type
  useEffect(() => {
    //it the menu is changed to compact or popup submenu, no submenus should pop up meanwhile
    if (compact || popupSubMenu) {
      store.setState({openList: []});
    } else {
      //if it reverts to non-popup submenu, to retrieve previous open list
      //to show
      const pre = preExpandList.current;
      if (pre) {
        store.setState({openList: pre});
      }
    }
  }, [compact, popupSubMenu, preExpandList, store]);

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

  //switch compact/popup
  //1. compact, don't show expanded menu，
  //2. show last expanded menus while switching to other other menu types
  useEvent(EventListener.click, function() {
    //clicking the document will cause the opened popup submenu to be closed
    if (isPopup && store.getState().openList.length > 0) {
      store.setState({openList: []});
    }
  }, isPopup);

  const newChildren = useMemo(() => {
    if (!children) {
      return null;
    }
    return React.Children.map(children, chd => {
      if (chd.type === SubMenu || chd.type === Item) {
        return React.cloneElement(chd, {directChild: true});
      }
      return chd;
    });
  }, [children]);

  const dispatch = ({type: actionType, ...params}) => {
    switch (actionType) {
      case Action.clickHeader:
        clickItemHandler(params);
        break;

      case Action.openMenu:
        openMenuHandler(params);
        break;

      case Action.closeMenu:
        closeMenuHandler(params);
        break;
      default:
        break;
    }
  };

  const clickItemHandler = ({id, e}) => {
    let nextList = [id];
    const list = store.getState().activeItemsList;
    if (multiSelect) {
      nextList = list.includes(id) ? [...list.filter(item => item !== id)] :
          [...list, id];
    }

    if (!customActive) {
      // const showOpenMenus = isPopup? []: getState().openMenus;
      store.setState({activeItemsList: nextList});
    }

    //update the store
    onSelect && onSelect(nextList, e);

    //close all popup submenus
    if (isPopup) {
      if (!customOpen) {
        store.setState({openList: []});
      }
      onOpenedMenu && onOpenedMenu([]);
    }

  };

  const openMenuHandler = ({id, e, directChild}) => {
    if (isNil(id) || includes(store.getState().openList, id)) {
      return;
    }

    let nextList;
    if (isPopup) {
      const preTimer = preTimeoutRef.current;
      if (!isNil(preTimer)) {
        preTimeoutRef.current = null;
        clearTimeout(preTimer);
      }
      //if this submenu is direct child of menu, that means only one submenu should
      //open later
      nextList = directChild ? [id]
          : store.getState().openList.concat(id);
    } else {
      nextList = store.getState().openList.concat(id);
      preExpandList.current = nextList;
    }
    if (!customOpen) {
      store.setState({openList: nextList});
    }
    onOpenedMenu && onOpenedMenu(nextList);
  };

  /**
   * multiple updates will cause a directly change made for the existing list of store, delay
   * 50 mill-seconds to check whether need to notify the updates and rerender the nodes afterwards.
   * If the mouse leaves from submenu1 and focus on submenu2, we don't want the callback invoked twice (one is due to mouse leaving,
   * the other is due to mouse entering). Instead the callback should be invoked once and the opened list
   * should only include the last focused submenu's id.
   */
  const closeMenuHandler = useCallback(({id, e}) => {
    const {updateState, notifyChanges, getState, setState} = store;
    if (isNil(id) || !includes(getState().openList, id)) {
      return;
    }

    const restList = [...getState().openList.filter(it => it !== id)];
    if (isPopup) {
      //only update the store
      updateState({openList: restList});

      const preTimeout = preTimeoutRef.current;
      if (!isNil(preTimeout)) {
        //exits if there already be a timer running
        return;
      }

      //delay 50 mills to notify that the open list is changed
      preTimeoutRef.current = execute(function() {
        preTimeoutRef.current = null;
        if (!customOpen) {
          notifyChanges();
        }
        onOpenedMenu && onOpenedMenu(getState().openList);
      }, 50);
    } else {
      //directly set the state and notify the changes
      if (!customOpen) {
        setState({openList: restList});
      }
      preExpandList.current = restList;
      onOpenedMenu && onOpenedMenu(restList);
    }
  }, [store, isPopup, customOpen, onOpenedMenu]);

  const ctx = {
    store,
    dispatch,

    hasBox,
    hasBorderRadius,
    hasArrow,
    type,
    direction,
    popupSubMenu: isPopup,
    canCompact: true,
    compact,
    hasHeader: false,
    collapsable,
    selectable,
    onClickItem,
  };
  return <MenuContext.Provider value={ctx}>
    <BaseMenu className={clsName}
              popupSubMenu={false}//tells base menu to ignore this menu since it can't pop up any items list
              ref={multiRef}
              rootMenu={true}
              {...otherProps} >
      {newChildren}
    </BaseMenu>
  </MenuContext.Provider>;
});

Menu.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  hasBox: PropTypes.bool,
  hasBorderRadius: PropTypes.bool,
  hasArrow: PropTypes.bool,
  collapsable: PropTypes.bool,
  justify: PropTypes.string,
  direction: PropTypes.string,
  type: PropTypes.string,
  popupSubMenu: PropTypes.bool,
  autoIndent: PropTypes.bool,
  indentUnit: PropTypes.string,
  indentation: PropTypes.number,
  onSelect: PropTypes.func,
  onClickItem: PropTypes.func,
  multiSelect: PropTypes.bool,
  compact: PropTypes.bool,
  defaultActiveItems: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  activeItems: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  defaultOpenedMenus: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  openedMenus: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onOpenedMenu: PropTypes.func,
  selectable: PropTypes.bool,
};

Menu.SubMenu = SubMenu;
Menu.Item = Item;
Menu.Group = Group;

export default Menu;