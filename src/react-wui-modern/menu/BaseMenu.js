import React, {useState} from 'react';
import {isNil} from '../Utils';
import {openMenuType} from '../common/Constants';

export const useMenuList = (
    id, defaultOpenedMenus, disabled, onClickHeader) => {
  const defaultState = isDefaultOpen(defaultOpenedMenus, id);

  //about manualChang, this variable indicates whether this menu is manually changed by clicking header.
  const [showMenuList, setShowMenuList] = useState(
      {show: defaultState, manualChang: false});

  // handle header
  const handleHeader = (headerInfo, evt) => {
    if (disabled) {
      return;
    }

    // call callback
    let callback = onClickHeader;
    let autoCloseMenu = true;
    if (!isNil(callback)) {
      // the menu won't be closed automatically if the callback returns false
      autoCloseMenu = callback(headerInfo, evt);
    }

    //close the menu list automatically if autoCloseMenu is true , undefined or null
    if (isNil(autoCloseMenu) || autoCloseMenu) {
      let finalState = showMenuList.show;
      //if not changed by user clicking
      if (!showMenuList.manualChang) {
        if (finalState !== defaultState) {
          finalState = defaultState;
        }
      }

      setShowMenuList({show: !finalState, manualChang: true});
    }

    return autoCloseMenu;
  };

  return {
    showMenuList,
    setShowMenuList,
    handleHeader,
    isShow: () => {
      return showMenuList.manualChang ? showMenuList.show : defaultState;
    },
  };
};

export const useActiveItems = (
    defaultActiveItems,
    activeItems,
    onSelect,
    multiSelect,
    onClickItem,
    autoSelectItem,
    selectable) => {

  //todo: default active只会一次生效，后续选中的item无法显示激活状态,activeItems问题
  //todo: add activeItems prop, 一旦此prop设定后，内部不在自行维护activeItems 状态

  const isControlledByOutside = !isNil(activeItems);

  //if no id is assigned , the value field would be used as identifier
  const [autoActiveItems, setActiveItems] = useState(defaultActiveItems);

  // handle item
  const handleItem = (itemInfo, evt) => {
    const itemId = isNil(itemInfo.id) ? itemInfo.value : itemInfo.id;
    let autoActiveItem = true;
    let callback = onClickItem;
    if (!isNil(callback)) {
      autoActiveItem = callback(itemInfo, evt);
    }
    //do nothing if the activeItems is passed from outside
    if (isControlledByOutside) {
      return;
    }

    if (!selectable || !autoSelectItem) {
      return false;
    }

    if (isNil(autoActiveItem) || autoActiveItem) {
      let selectItems = [];
      //multiSelect
      if (multiSelect) {
        if (autoActiveItems.includes(itemId)) {
          //deselect this item
          selectItems = autoActiveItems.filter(
              existingItem => itemId !== existingItem);
        } else {
          //select this item
          selectItems = autoActiveItems.concat(itemId);
        }
      } else {
        //for single selection
        selectItems = [itemId];
      }
      setActiveItems(items => selectItems);

      //callback
      onSelect && onSelect(selectItems);
    }
    return autoActiveItem;
  };

  return {
    autoActiveItems: isControlledByOutside ? activeItems : autoActiveItems,
    handleItem,
  };
};

/**
 * check if this menu is opened by default
 * @param defaultOpenedMenus  'all' or array with ids
 * @param id current menu's id
 * @returns {boolean} current menu is opened by default
 */
export const isDefaultOpen = (defaultOpenedMenus, id) => {
  if (isNil(defaultOpenedMenus)) {
    return false;
  }
  let openCurrentMenu = false;
  if (defaultOpenedMenus === openMenuType.all
      || (!isNil(id) && defaultOpenedMenus.includes(id))) {
    openCurrentMenu = true;
  }
  return openCurrentMenu;
};

/**
 * check current menu if it should be disabled
 * @param parentDisabled other disabled value passed from react context
 * @param localDisabled whether the disabled value is set in this component
 * @return {boolean}
 */
export const isDisabledMenu = (
    disabled, parentSubMenuDisabled, menuDisabled) => {

  let isDisabled = null;
  let statusArray = [disabled, parentSubMenuDisabled, menuDisabled];
  for (let e in statusArray) {
    if (!isNil(statusArray[e])) {
      isDisabled = statusArray[e];
      break;
    }
  }
  return isDisabled;
};