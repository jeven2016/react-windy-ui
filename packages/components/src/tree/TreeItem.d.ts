import { CommonProps } from '../generic';
import React from 'react';

export type TreeItemProps = {
  id?: string;
  className?: string;
  extraClassName?: string;
  label?: React.ReactNode;
  icon?: React.ReactNode;
  moreElements?: React.ReactNode[];
} & CommonProps<HTMLDivElement>;

declare const TreeItem: React.ForwardRefExoticComponent<TreeItemProps>;

export default TreeItem;
