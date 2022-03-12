import { CommonProps, Direction } from '../generic';
import React from 'react';

export type DividerProps = {
  translucent?: boolean;
  direction?: Direction;
} & CommonProps<HTMLDivElement>;

declare const Divider: React.ForwardRefExoticComponent<DividerProps>;

export default Divider;
