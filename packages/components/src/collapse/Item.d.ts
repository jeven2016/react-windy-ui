import { CardProps } from '../card';
import React from 'react';

export type ItemProps = {
  header?: React.ReactNode;
  disabled?: boolean;
  value?: number | string;
  hasBackground?: boolean;
  moreItems?: React.ReactNode | React.ReactNode[];
} & CardProps;

declare const Item: React.ForwardRefExoticComponent<ItemProps>;
export default Item;
