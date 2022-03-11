import React, { MouseEvent } from 'react';
import { PopupProps } from '../popup';
import Menu from '../menu';

export type DropdownProps = {
  title?: React.ReactNode;
  onSelect?: (selectedId: string, e: MouseEvent) => void;
  popupInstanceRef?: React.Ref<any> | ((domTarget: HTMLElement) => void);
} & Omit<PopupProps, 'onSelect' | 'title'>;

interface RootComponent extends React.ForwardRefExoticComponent<DropdownProps> {
  Item: typeof Menu.Item;
  Menu: typeof Menu;
  SubMenu: typeof Menu.SubMenu;
}

declare const Dropdown: RootComponent;
export default Dropdown;
