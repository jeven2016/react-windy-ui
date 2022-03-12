import { CommonProps, JustifyType } from '../generic';
import React from 'react';
import { ButtonProps } from '../button';

export type NavbarListProps = {
  nativeType?: string;
  justify?: JustifyType;
} & CommonProps<HTMLDivElement>;

export type NavbarItemProps = {
  nativeType?: string;
  hasBackground?: boolean;
  hasBar?: boolean;
  active?: boolean;
  compact?: boolean;
} & CommonProps<HTMLDivElement>;

export type NavbarTitleProps = CommonProps<HTMLDivElement>;

export type NavbarProps = {
  type?: 'primary' | 'normal';
  fixed?: 'top' | 'bottom';
  hideOnScroll?: boolean;
  hasBox?: boolean;
  hasBorder?: boolean;
  hasBar?: boolean;
  autoHideList?: boolean;
  defaultExpand?: boolean;
  expand?: boolean;
  onExpand?: (state?: boolean, e?: MouseEvent) => void;
  hasItemBackground?: boolean;
  mediaQuery?: string;
  mediaQueryWindow?: Window & typeof globalThis;
} & CommonProps<HTMLElement>;

export type SwitchProps = {
  autoSwitch?: boolean;
} & CommonProps<ButtonProps>;

declare const NavbarList: React.ForwardRefExoticComponent<NavbarListProps>;
declare const NavbarItem: React.ForwardRefExoticComponent<NavbarItemProps>;
declare const NavbarTitle: React.ForwardRefExoticComponent<NavbarTitleProps>;
declare const NavbarSwitch: React.ForwardRefExoticComponent<SwitchProps>;

interface RootComponent extends React.ForwardRefExoticComponent<NavbarProps> {
  List: typeof NavbarList;
  Item: typeof NavbarItem;
  Title: typeof NavbarTitle;
  Switch: typeof NavbarSwitch;
}

declare const Navbar: RootComponent;

export default Navbar;
