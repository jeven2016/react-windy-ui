import React, {useEffect, useMemo, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';
import Item from './Item';
import clsx from 'clsx';
import Group from './Group';
import BaseMenu from './BaseMenu';
import {MenuContext} from '../common/Context';
import {Action, fillLevel, MenuDirection, MenuType} from './MenuUtils';
import useMultipleRefs from '../common/UseMultipleRefs';
import {convertToArray, execute, includes, isCustomized, isNil} from '../Utils';
import {EventListener, JustifyContentType} from '../common/Constants';
import {initStore} from '../common/Store';
import useEvent from '../common/UseEvent';
import useEventCallback from '../common/useEventCallback';

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
    initIndent = 1.5,
    indentUnit = 'rem',
    indentation = 2,
    groupInitIndent = 1,
    groupIndentation = 1.25,
    onSelect,
    onClickItem,
    multiSelect = false,
    compact = false,
    defaultActiveItems,
    activeItems,
    defaultOpenedMenus,
    openedMenus,
    onOpenedMenu, //invoked by opening / closing submenu
    primaryBarPosition = 'right', //'left' or 'right
    selectable = true,
    hasRipple = true,
    rippleColor = {
      dark: '#fff',
      defaultColor: '#ccc',
    },
    ...otherProps
  } = props;
  const isDark = type === MenuType.dark;
  const clsName = clsx(extraClassName, className, JustifyContentType[justify]);
  const menuRef = useRef(null);
  const multiRef = useMultipleRefs(ref, menuRef);

  const defaultOpenList = convertToArray(defaultOpenedMenus);
  const preExpandList = useRef(defaultOpenList);//previous expanded submenus ( non-popup submenus)

  const customActive = isCustomized(props, 'activeItems');
  const customOpen = isCustomized(props, 'openedMenus');
  const preTimeoutRef = useRef(null); //previous close timer

  //init a internal store for defaultXXXX fields
  const [store] = useState(() => initStore({
    activeItemsList: convertToArray(defaultActiveItems),
    openList: defaultOpenList,
  }));

  //while the field is not customized, the store would be changed in Item and then the memorized data would get
  //outdated data, so remove the useMemo()
  const realActiveItems = () => customActive ? activeItems : store.getState().activeItemsList;
  const realOpenList = () => customOpen ? openedMenus : store.getState().openList;

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

  //fill leven field in props of Header & Item & Group,
  const updatedChildren = useMemo(() => {
    return fillLevel({
      children,
      popupSubMenu: isPopup,
      indentUnit,
      indentation,
    });
  }, [children, indentUnit, indentation, isPopup]);

  //switch compact/popup
  //1. compact, don't show expanded menu，
  //2. show last expanded menus while switching to other other menu types
  useEvent(EventListener.click, function () {
    //clicking the document will cause the opened popup submenu to be closed
    if (isPopup && realOpenList().length > 0) {
      store.setState({openList: []});
    }
  }, isPopup);

  const newChildren = useMemo(() => {
    if (!updatedChildren) {
      return null;
    }
    return React.Children.map(updatedChildren, chd => {
      if (isNil(chd?.type)) {
        return chd;
      }
      if (chd.type === SubMenu || chd.type === Item) {
        return React.cloneElement(chd, {directChild: true});
      }
      return chd;
    });
  }, [updatedChildren]);

  const dispatch = useEventCallback(({type: actionType, ...params}) => {
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
  });

  const clickItemHandler = useEventCallback(({id, e}) => {
    let nextList = [id];
    const list = realActiveItems();
    if (multiSelect) {
      nextList = list.includes(id) ? [...list.filter(item => item !== id)] :
        [...list, id];
    }

    if (!customActive) {
      // const showOpenMenus = isPopup? []: getState().openMenus;
      store.setState({activeItemsList: nextList});
    }

    //update the store
    const selectedId = multiSelect ? nextList : nextList[0];
    onSelect && onSelect(selectedId, e);

    //close all popup submenus
    if (isPopup) {
      if (!customOpen) {
        store.setState({openList: []});
      }
      onOpenedMenu && onOpenedMenu([], e);
    }

  });

  const openMenuHandler = useEventCallback(({id, e, directChild}) => {
    const oList = realOpenList();
    if (isNil(id) || includes(oList, id)) {
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
        : oList.concat(id);
    } else {
      nextList = oList.concat(id);
      preExpandList.current = nextList;
    }
    if (!customOpen) {
      store.setState({openList: nextList});
    }
    onOpenedMenu && onOpenedMenu(nextList);
  });

  /**
   * multiple updates will cause a directly change made for the existing list of store, delay
   * 50 mill-seconds to check whether need to notify the updates and rerender the nodes afterwards.
   * If the mouse leaves from submenu1 and focus on submenu2, we don't want the callback invoked twice (one is due to mouse leaving,
   * the other is due to mouse entering). Instead the callback should be invoked once and the opened list
   * should only include the last focused submenu's id.
   */
  const closeMenuHandler = useEventCallback(({id, e}) => {
    const oList = realOpenList();
    const {updateState, notifyChanges, getState, setState} = store;
    if (isNil(id) || !includes(oList, id)) {
      return;
    }

    const restList = [...oList.filter(it => it !== id)];
    if (isPopup) {
      //only update the store
      updateState({openList: restList});

      const preTimeout = preTimeoutRef.current;
      if (!isNil(preTimeout)) {
        //exits if there already be a timer running
        return;
      }

      //delay 50 mills to notify that the open list is changed
      preTimeoutRef.current = execute(function () {
        preTimeoutRef.current = null;
        if (!customOpen) {
          notifyChanges();
        }
        onOpenedMenu && onOpenedMenu(getState().openList, e);
      }, 50);
    } else {
      //directly set the state and notify the changes
      if (!customOpen) {
        setState({openList: restList});
      }
      preExpandList.current = restList;
      onOpenedMenu && onOpenedMenu(restList, e);
    }
  });

  const ctx = {
    store,
    customActive,
    customOpen,
    activeItems: realActiveItems(),
    openList: realOpenList(),
    dispatch,
    initIndent,
    indentation,
    groupInitIndent,
    groupIndentation,
    indentUnit,
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
    primaryBarPosition,
    autoIndent,
    hasRipple,
    rippleColor: isDark ? rippleColor.dark : rippleColor.defaultColor,
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
  initIndent: PropTypes.number,
  indentUnit: PropTypes.string,
  indentation: PropTypes.number,
  groupInitIndent: PropTypes.number,
  groupIndentation: PropTypes.number,
  onSelect: PropTypes.func,
  onClickItem: PropTypes.func,
  multiSelect: PropTypes.bool,
  compact: PropTypes.bool,
  defaultActiveItems: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array]),
  activeItems: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array]),
  defaultOpenedMenus: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array]),
  openedMenus: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.array]),
  onOpenedMenu: PropTypes.func,
  primaryBarPosition: PropTypes.oneOf(['left', 'right']),
  selectable: PropTypes.bool,
  hasRipple: PropTypes.bool,
  rippleColor: PropTypes.shape({
    dark: PropTypes.string,
    defaultColor: PropTypes.string,
  }),
};

Menu.SubMenu = SubMenu;
Menu.Item = Item;
Menu.Group = Group;

export default Menu;