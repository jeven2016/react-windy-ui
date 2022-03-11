import { CommonProps } from '../generic';
import React from 'react';

export type MaskProps = {
  active?: boolean;
  onClick?: () => void;
  dark?: boolean;
} & CommonProps<HTMLDivElement>;

declare const Mask: React.ForwardRefExoticComponent<MaskProps>;
export default Mask;
