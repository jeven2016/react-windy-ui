import React from 'react';
import { CommonProps } from '../generic';

export type BoxProps = {
  className?: string;
  extraClassName?: string;
  children?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  center?: React.ReactNode;
  hasMarginBottom?: boolean;
  block?: PropTypes.bool;
  autoEllipsis?: PropTypes.bool;
} & CommonProps<HTMLDivElement>;

const Box: React.ForwardRefExoticComponent<BoxProps>;

export default Box;
