import { CommonProps, Direction, Size } from '../generic';
import React from 'react';

export type LoaderType = 'primary' | 'secondary' | 'third';

export type LoaderProps = {
  text?: React.ReactNode;
  block?: boolean;
  color?: 'white' | 'primary' | 'blue';
  active?: boolean;
  type?: LoaderType;
  size?: Size;
  hasMask?: boolean;
  darkMask?: boolean;
  hasBackground?: boolean;
  direction?: Direction;
  modalStyle?: React.CSSProperties;
  global?: boolean;
  onMaskClick?: () => void;
  hasDefaultWidth?: boolean; //only works with global type
} & CommonProps<HTMLElement>;

declare const Loader: React.ForwardRefExoticComponent<LoaderProps>;
export default Loader;
