import React from 'react';
import { CommonProps } from '../generic';

export type MenuGroupProps = {
  header?: React.ReactNode;
  level?: number;
  style?: React.CSSProperties;
} & CommonProps<HTMLDivElement>;

declare const Group: React.ForwardRefExoticComponent<MenuGroupProps>;
export default Group;
