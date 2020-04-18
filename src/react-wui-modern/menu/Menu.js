import React from 'react';
import NormalMenu from './NormalMenu';
import Header from './Header';
import List from './List';
import SubMenu from './SubMenu';
import Item from './Item';
import {isNil} from '../Utils';
import {openMenuType} from '../common/Constants';

const Menu = React.forwardRef((props, ref) => {
  const {multiLevelMenus, defaultOpenedMenus, children, ...otherProps} = props;
  let newChildren = children;
  let newDefaultOpenedMenus = defaultOpenedMenus;
  if (multiLevelMenus) {
    newChildren = React.Children.map(children, (child) => {
      if (child.type === SubMenu) {
        return React.cloneElement(child, {
          isDirectChild: true,
        });
      }
      return child;
    });
  } else if (isNil(defaultOpenedMenus)) {
    newDefaultOpenedMenus = openMenuType.all;
  }

  return <NormalMenu multiLevelMenus={multiLevelMenus}
                     ref={ref}
                     defaultOpenedMenus={newDefaultOpenedMenus}
                     children={newChildren} {...otherProps}/>;
});

Menu.Header = Header;
Menu.List = List;
Menu.SubMenu = SubMenu;
Menu.Item = Item;

export default Menu;