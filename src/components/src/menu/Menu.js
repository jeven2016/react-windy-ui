import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import PropTypes from 'prop-types';
import SubMenu from './SubMenu';
import Item from './Item';
import clsx from 'clsx';
import Group from './Group';
import BaseMenu from './BaseMenu';
import {MenuContext} from '../common/Context';
import {Action, cancelIndent, indentMenu, MenuDirection} from './MenuUtils';
import useMultipleRefs from '../common/UseMultipleRefs';
import useInternalState from '../common/useInternalState';
import {
  convertToArray,
  includes,
  isCustomized,
  isNil,
  retrieveArray,
} from '../Utils';
import {EventListener, JustifyContentType} from '../common/Constants';
import usePrevious from '../common/UsePrevious';
import useEvent from '../common/UseEvent';
import useInvoke from '../common/UseInvoke';
import {initStore} from '../common/Store';

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

    ...otherProps
  } = props;
  const clsName = clsx('menu', JustifyContentType[justify]);
  const menuRef = useRef(null);
  const multiRef = useMultipleRefs(ref, menuRef);

  const customActive = isCustomized(props, 'activeItems');
  const customOpen = isCustomized(props, 'openedMenus');

  //init a internal store
  const store = useMemo(() => initStore({
    activeItemsList: convertToArray(defaultActiveItems),
    openList: convertToArray(defaultOpenedMenus),
  }), []);

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
    // console.log('type=' + actionType);
    switch (actionType) {
      case Action.clickHeader:
        clickItemHandler(params.itemInfo, params.e);
        break;

      case Action.openMenu:
        openMenuHandler(params.id, params.e);
        break;

      case Action.closeMenu:
        closeMenuHandler(params.id, params.e);
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
      // closePopSubMenu();
    }
  }, [onSelect, store]);

  const openMenuHandler = useCallback((id, e) => {
    if (isNil(id)) {
      return;
    }
    const list = store.getState().openList;
    if (includes(list, id)) {
      return;
    }
    const nextList = store.getState().openList.concat(id);
    if (isPopup) {
      if (!customOpen) {
        store.setState({openList: nextList});
      }
      onOpenedMenu && onOpenedMenu(nextList);
    }

  }, [store, isPopup, customOpen, onOpenedMenu]);

  const closeMenuHandler = (id, e) => {
    const {setState, getState} = store;
    const list = getState().openList;
    if (isNil(id) || !includes(list, id)) {
      return;
    }

    //focust on submenu2 header and move, next both submenu1 and2 dispaly
    //due to the restList is wrong TODO
    const restList = [...list.filter(it => it !== id)];
    if (isPopup) {
      if (!customOpen) {
        setState({openList: restList});
      }
      onOpenedMenu && onOpenedMenu(restList);
    } else {
    }
  };

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
              popupSubMenu={false}//tells base menu to ignore the menu since it can't pop any items list
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