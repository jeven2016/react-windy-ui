import React, {useContext, useState, useRef} from 'react';
import PropTypes from 'prop-types';
import {BaseMenu} from './NormalMenu';
import {MenuContext, SubMenuContext} from './MenuUtils';
import {isDisabledMenu, useMenuList} from './BaseMenu';
import useEvent from '../common/UseEvent';
import {EventListener} from '../common/Constants';
import {isNil} from '../Utils';
import List from './List';

/**
 * SubMenu Component
 */
const SubMenu = React.forwardRef((props, ref) => {
  const {
    disabled,
    className,
    extraClassName,
    isDirectChild,
    children,
    id, ...otherProps
  } = props;
  const menuCtx = useContext(MenuContext);
  const subMenuRef = ref;

  //todo: if mualchanged check by activeItems else use default open menus
  //to display or close this menu

  //the submenu doesn't have default open menus
  const {isShow, handleHeader, showMenuList, setShowMenuList} = useMenuList(id,
      menuCtx.defaultOpenedMenus, disabled, menuCtx.onClickHeader);

  //add a window event listener to close the popup submenu if this submenu is
  const closeSubMenu = (e) => {
    if (showMenuList.show && menuCtx.multiLevelMenus) {
      let inside = subMenuRef.current.contains(e.target);
      if (inside) {
        return;
      }
      // if the header is one child of current sub-menu, the menu list cannot be closed
      setShowMenuList({show: false, manualChang: true});
    }
  };

//a direct child of menu
  useEvent(EventListener.click, (evt) => {
    closeSubMenu(evt);
  }, menuCtx.multiLevelMenus);

/*  useEvent(EventListener.mouseEnter, () => {
        if (!showMenuList.show) {
          setShowMenuList({show: true, manualChang: true});
        }
      }, menuCtx.multiLevelMenus,
      () => subMenuRef.current);
  useEvent(EventListener.mouseLeave, closeSubMenu, menuCtx.multiLevelMenus,
      () => subMenuRef.current);*/

  const parenSubMenuCtx = useContext(SubMenuContext);

  //disable menu from three levels
  const menuDisabled = menuCtx.menuDisabled;
  const parentSubMenuDisabled = parenSubMenuCtx.subMenuDisabled;
  let isDisabled = isDisabledMenu(disabled, parentSubMenuDisabled,
      menuDisabled);

  let clsName = className;
  let subMenuMultiSelect = menuCtx.multiSelect;
  let clickItem = menuCtx.clickItem;
  let childrenElem = children;

  if (menuCtx.multiLevelMenus) {
    subMenuMultiSelect = false; //multi-level menus don't support multi-selection
    clickItem = (itemInfo, e) => {
      // debugger
      const autoClose = menuCtx.clickItem(itemInfo, e);
      if (isNil(autoClose) || autoClose) {
        //close all submenus by triggering the click event on body
        document.body.click();
      }
    };
    if (isDirectChild) {
      clsName = 'submenu direct-child';

      //tell the menu list to adjust its position (to fixed)
      childrenElem = React.Children.map(children, child => {
        if (child.type === List) {
          return React.cloneElement(child, {adjustPosition: true});
        }
        return child;
      });
    } else {
      clsName = 'submenu non-direct-child';
    }
  }

  return <MenuContext.Provider
      value={{
        ...menuCtx,
        clickItem: clickItem,
        disabled: props.disabled,
        clickHeader: handleHeader,
        defaultOpenedMenus: menuCtx.defaultOpenedMenus,
      }}>
    <SubMenuContext.Provider value={{
      subMenuDisabled: isDisabled,
      closeAllMultiLevelMenus: false,
    }}>
      <BaseMenu className={clsName}
                ref={subMenuRef}
                multiSelect={subMenuMultiSelect}
                extraClassName={extraClassName} {...otherProps}
                showMenuList={isShow()}
                {...otherProps}>
        {childrenElem}
      </BaseMenu>
    </SubMenuContext.Provider>
  </MenuContext.Provider>;
});

SubMenu.defaultProps = {
  disabled: null, //means unset
  className: 'normal submenu',
};

SubMenu.propTypes = {
  disabled: PropTypes.bool, //disable this Menu
  className: PropTypes.string, //the class name of menu
  id: PropTypes.string,
};

export default SubMenu;