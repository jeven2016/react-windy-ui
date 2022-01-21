import React from 'react';
import { isNil, isNumber, nonNil } from '../Utils';
import SubMenu from './SubMenu';
import Group from './Group';
import Item from './Item';

export const MenuDirection = {
  horizontal: { key: 'horizontal', className: 'menu-row' },
  vertical: { key: 'vertical', className: 'menu-column' },

  isVertical: (direction) => {
    return direction === MenuDirection.vertical.key;
  }
};

export const SubMenuDirection = {
  bottom: { key: 'bottom', className: 'bottom' },
  right: { key: 'right', className: 'right' },

  isBottom: (direction) => {
    return direction === SubMenuDirection.bottom.key;
  }
};

export const MenuClassName = {
  groupHeader: 'group-header',
  group: 'menu-group',
  header: 'menu-header',
  item: 'menu-item ',
  subMenu: 'base-menu'
};

export const MenuType = {
  block: 'block',
  primary: 'primary',
  dark: 'dark'
};

export const Action = {
  clickItem: 'clickItem',
  openMenu: 'openMenu',
  closeMenu: 'closeMenu',
  clickHeader: 'clickHeader'
};

export const MenuConst = {
  all: 'all'
};

const deepUpdateLevel = ({ node, level }) => {
  if (isNil(node)) {
    return null;
  }

  const children = node.props.children;
  if (node.type === Item || isNil(children) || children.length === 0) {
    return React.cloneElement(node, { level: level });
  }
  const isGroup = node.type === Group;
  if (!isGroup && node.type !== SubMenu) {
    return node;
  }

  return React.cloneElement(node, {
    level: level,
    children: React.Children.map(children, (chd) => {
      return deepUpdateLevel({ node: chd, level: isGroup ? level : level + 1 });
    })
  });
};

/**
 * Fill level property for sub components
 * @param children
 * @param popupSubMenu
 * @param indentUnit
 * @param indentation
 * @returns children
 */
export const fillLevel = ({ children, popupSubMenu, indentUnit, indentation }) => {
  if (popupSubMenu) {
    return children;
  }

  return React.Children.map(children, (chd) => {
    if (chd.type !== SubMenu && chd.type !== Group) {
      return chd;
    }

    if (chd.type === Group) {
      return React.cloneElement(chd, {
        level: 0,
        children: deepUpdateLevel({ node: chd, level: 0 })
      });
    }
    if (chd.type === SubMenu) {
      return deepUpdateLevel({ node: chd, level: 0 });
    }
  });
};

export const getPaddingStyle = ({ ignored, indentUnit, indentation, initIndent, level }) => {
  if (ignored || !isNumber(level)) {
    return null;
  }
  const padding = level * indentation;
  const finalPadding = padding === 0 ? initIndent : `${padding + initIndent}`;
  return { paddingLeft: finalPadding + indentUnit };
};
