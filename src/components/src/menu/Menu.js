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

//todo: refactor with Store to update open list
const Menu = React.forwardRef((props, ref) => {
  const {
    hasBox = true,
    hasBorderRadius = true,
    hasArrow = true,
    collapsable = true,
    justify,
    direction = MenuDirection.vertical.key,
    type = 'normal',
    popupSubMenu = false,
    children,
    autoIndent = true,
    indentUnit = 'rem',
    indentation = 2,
    onSelect,
    onClickHeader,
    multiSelect = false,
    compact = false,

    defaultActiveItems,
    activeItems,

    defaultOpenedMenus,
    openedMenus,
    onOpenedMenu, //invoked by opening / closing submenu
    delayMouseOver,

    ...otherProps
  } = props;
  const clsName = clsx('menu', JustifyContentType[justify]);
  const menuRef = useRef(null);
  const multiRef = useMultipleRefs(ref, menuRef);

  const customActive = isCustomized(props, 'activeItems');
  const customOpen = isCustomized(props, 'openedMenus');
  const preTimeoutRef = useRef(null); //previous close timer

  //init a internal store
  const [store] = useState(initStore({
    activeItemsList: convertToArray(defaultActiveItems),
    openList: convertToArray(defaultOpenedMenus),
  }));

  //apply the customized properties
  useEffect(() => {
    if (customActive) {
      store.setState({activeItemsList: activeItems});
    }

    if (customOpen) {
      store.setState({openList: openedMenus});
    }
  }, [activeItems, openedMenus, store]);

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
        clickItemHandler(params.itemInfo, params.e);
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

  const clickItemHandler = useCallback((itemInfo, e) => {
    if (multiSelect) {

    } else {
      if (!customActive) {
        const {setState, getState} = store;

        // const showOpenMenus = isPopup? []: getState().openMenus;
        setState({activeItemsList: [itemInfo.id]});
      }
      //update the store
      onSelect && onSelect(itemInfo, e);

      //close all popup submenus
      if (isPopup) {
        if (!customOpen) {
          store.setState({openList: []});
        }
        onOpenedMenu && onOpenedMenu([]);
      }
    }
  }, [onSelect, store]);

  const openMenuHandler = useCallback(({id, e, directChild}) => {
    if (isNil(id) || includes(store.getState().openList, id)) {
      return;
    }

    if (isPopup) {
      const preTimer = preTimeoutRef.current;
      if (!isNil(preTimer)) {
        preTimeoutRef.current = null;
        clearTimeout(preTimer);
      }
      //if this submenu is direct child of menu, that means only one submenu should
      //open later
      const nextList = directChild ? [id]
          : store.getState().openList.concat(id);
      if (!customOpen) {
        store.setState({openList: nextList});
      }
      onOpenedMenu && onOpenedMenu(nextList);
    }

  }, [store, isPopup, customOpen, onOpenedMenu]);

  /**
   * multiple updates will cause a directly change made for the existing list of store, delay
   * 50 mill-seconds to check whether need to notify the updates and rerender the nodes afterwards.
   * If the mouse leaves from submenu1 and focus on submenu2, we don't want the callback invoked twice (one is due to mouse leaving,
   * the other is due to mouse entering). Instead the callback should be invoked once and the opened list
   * should only include the last focused submenu's id.
   */
  const closeMenuHandler = useCallback(({id, e}) => {
    const {updateState, notifyChanges, getState} = store;
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
  hasBox: PropTypes.bool,
  hasBorderRadius: PropTypes.bool,
  hasArrow: PropTypes.bool,
  collapsable: PropTypes.bool,

};

Menu.SubMenu = SubMenu;
Menu.Item = Item;
Menu.Group = Group;

export default Menu;