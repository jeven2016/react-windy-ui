import React from 'react';
import { DivProps } from '../generic';

export type SubMenuProps = {
  id?: number | string;
  hasBottomBar?: boolean;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
} & DivProps<HTMLDivElement>;

declare const SubMenu: React.ForwardRefExoticComponent<SubMenuProps>;
export default SubMenu;
