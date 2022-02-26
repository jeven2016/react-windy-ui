import React from 'react';
import { DivProps } from '../generic';

export type MenuGroupProps = {
  header?: React.ReactNode;
  level?: number;
  style?: React.CSSProperties;
} & DivProps<HTMLDivElement>;

declare const Group: React.ForwardRefExoticComponent<MenuGroupProps>;
export default Group;
