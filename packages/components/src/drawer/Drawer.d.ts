import { CommonProps } from '../generic';
import React from 'react';

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom';

export type DrawerProps = {
  active?: boolean;
  onChange?: (active: boolean, e: MouseEvent) => void;
  hasMask?: boolean;
  hasAnchor?: boolean;
  anchor?: React.ReactNode;
  autoClose?: boolean;
  position?: DrawerPosition;
  header?: React.ReactNode;
  footer?: React.ReactNode;
} & Omit<CommonProps<HTMLDivElement>, 'onChange'>;

declare const Drawer: React.ForwardRefExoticComponent<DrawerProps>;

export default Drawer;
