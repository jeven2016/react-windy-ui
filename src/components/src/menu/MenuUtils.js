import React from 'react';
import {isNil, isNumber, nonNil} from '../Utils';
import SubMenu from './SubMenu';
import Group from './Group';
import Item from './Item';

export const MenuDirection = {
  horizontal: {key: 'horizontal', className: 'menu-row'},
  vertical: {key: 'vertical', className: 'menu-column'},

  isVertical: (direction) => {
    return direction === MenuDirection.vertical.key;
  },
};

export const SubMenuDirection = {
  bottom: {key: 'bottom', className: 'bottom'},
  right: {key: 'right', className: 'right'},

  isBottom: (direction) => {
    return direction === SubMenuDirection.bottom.key;
  },
};

export const MenuClassName = {
  groupHeader: 'group-header',
  group: 'menu-group',
  header: 'menu-header',
  item: 'menu-item ',
  subMenu: 'base-menu',
};

export const MenuType = {
  block: 'block',
  primary: 'primary',
  dark: 'dark',
};

export const Action = {
  clickItem: 'clickItem',
  openMenu: 'openMenu',
  closeMenu: 'closeMenu',
  clickHeader: 'clickHeader',
};

export const MenuConst = {
  all: 'all',
};

const deepUpdateLevel = ({node, level, popupSubMenu}) => {
  if (isNil(node)) {
    return null;
  }

  const children = node.props.children;
  if (node.type === Item || isNil(children) || children.length === 0) {
    return React.cloneElement(node, {level: level});
  }

  if (node.type !== Group && node.type !== SubMenu) {
    return node;
  }

  return React.cloneElement(node, {
    level: level,
    children: React.Children.map(children, chd => {
      return deepUpdateLevel({node: chd, level: popupSubMenu ? 1 : level + 1});
    }),
  });

};

export const fillLevel = ({
                            id,
                            children,
                            popupSubMenu,
                            indentUnit,
                            indentation,
                          }) => {

  console.log('fill the level again');
  let level = 0;
  return React.Children.map(children, chd => {
    if (chd.type !== SubMenu && chd.type !== Group) {
      return chd;
    }

    if (chd.type === SubMenu) {
      return deepUpdateLevel({node: chd, level, popupSubMenu});
    }
  });
};

export const getPaddingStyle = ({
                                  compact,
                                  indentUnit,
                                  indentation,
                                  initIndent,
                                  level,
                                }) => {
  if (isNumber(level)) {
    const padding = level * indentation;
    const finalPadding = padding === 0 ? initIndent : `${(padding +
        initIndent)}`;
    return {paddingLeft: finalPadding + indentUnit};
  }
  return null;
};