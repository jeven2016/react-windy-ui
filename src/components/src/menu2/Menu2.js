import React, {useMemo} from 'react';
import SubMenu from './SubMenu';
import Item from './Item';
import clsx from 'clsx';
import Group from './Group';
import BaseMenu from './BaseMenu';
import {MenuContext} from '../common/Context';
import {MenuDirection} from './MenuUtils';

const Menu2 = React.forwardRef((props, ref) => {
  const {
    direction,
    type,
    popupSubMenu = false,
    children,
    ...otherProps
  } = props;
  const clsName = clsx('menu2');

  const newChildren = useMemo(() => React.Children.map(children, (chd) => {
    if (chd.type === SubMenu) {
      return React.cloneElement(chd, {directChild: true});
    }
    return chd;
  }), [children]);

  const innerCollapsePanelStyle = useMemo(
      () => direction === MenuDirection.vertical.key ? {
        display: 'flex',
        flexDirection: 'column',
      } : {
        display: 'flex',
        flexDirection: 'row',
      }, [direction]);

  const ctx = {
    type,
    direction,
    popupSubMenu,
  };
  return <MenuContext.Provider value={ctx}>
    <BaseMenu className={clsName}
              ref={ref}
              type={type}
              direction={direction}
              innerPanelStyle={innerCollapsePanelStyle}
              {...otherProps} >
      {newChildren}
    </BaseMenu>
  </MenuContext.Provider>;
});

Menu2.SubMenu = SubMenu;
Menu2.Item = Item;
Menu2.Group = Group;

export default Menu2;