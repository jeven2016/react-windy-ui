import { CommonProps, Direction, Size } from '../generic';
import React from 'react';

export type ButtonGroupProps = {
  size?: Size;
  block?: boolean;
  direction?: Direction;
} & CommonProps<HTMLDivElement>;

declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps>;

export default ButtonGroup;
