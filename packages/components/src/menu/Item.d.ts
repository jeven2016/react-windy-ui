import { DivProps } from '../generic';
import React, { MouseEvent } from 'react';

export type MenuItemProps = {
  disabled?: boolean;
  id?: string | number;
  equitable?: boolean;
  align?: string;
  hasBackground?: boolean;
  hasBottomBar?: boolean;
  icon?: React.ReactNode;
  directChild?: boolean;
  onClick?: (id: string | number, e: MouseEvent) => void;
  customizedChildren?: boolean;
  level?: number;
} & Omit<DivProps<HTMLDivElement>, 'onClick'>;

declare const Item: React.ForwardRefExoticComponent<MenuItemProps>;
export default Item;
