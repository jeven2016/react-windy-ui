import { CommonProps } from '../generic';
import React, { MouseEvent } from 'react';

export type AffixProps = {
  top?: number;
  bottom?: number;
  disabled?: boolean;
  style?: React.CSSProperties;
  block?: boolean;
  onChange?: (affixed?: boolean, e?: MouseEvent) => void;
  targetWindow?: Window;
} & CommonProps<HTMLDivElement>;

declare const Affix: React.ForwardRefExoticComponent<AffixProps>;
export default Affix;
