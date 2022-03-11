import React, { MouseEvent } from 'react';
import Item from './Item';
import Group from './Group';
import SubMenu from './SubMenu';
import { ClassNameRefProps } from '../generic';

export type RippleColor = {
  dark?: string;
  defaultColor?: string;
};

export type MenuItemIdType = string | string[] | number | number[];

export type MenuProps = {
  hasBox?: boolean;
  hasBorderRadius?: boolean;
  hasArrow?: boolean;
  collapsable?: boolean;
  justify?: string;
  direction?: string;
  type?: string;
  popupSubMenu?: boolean;
  autoIndent?: boolean;
  initIndent?: number;
  indentUnit?: string;
  indentation?: number;
  groupInitIndent?: number;
  groupIndentation?: number;
  onSelect?: (selectedId: MenuItemIdType, e: MouseEvent) => void;
  onClickItem?: (selectedId: MenuItemIdType, e: MouseEvent) => void;
  multiSelect?: boolean;
  compact?: boolean;
  defaultActiveItems?: MenuItemIdType;
  activeItems?: MenuItemIdType;
  defaultOpenedMenus?: MenuItemIdType;
  openedMenus?: MenuItemIdType;
  onOpenedMenu?: (openedMenuIds: number[] | string[], e: MouseEvent) => void;
  primaryBarPosition?: 'left' | 'right';
  selectable?: boolean;
  hasRipple?: boolean;
  rippleColor?: RippleColor;
} & Omit<ClassNameRefProps<HTMLDivElement>, 'onSelect'>;

interface RootComponent extends React.ForwardRefExoticComponent<MenuProps> {
  Item: typeof Item;
  Group: typeof Group;
  SubMenu: typeof SubMenu;
}

declare const Menu: RootComponent;
export default Menu;
