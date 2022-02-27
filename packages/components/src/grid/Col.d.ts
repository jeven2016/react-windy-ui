import { AlignType, JustifyType } from '../generic';
import React from 'react';

export type ColProps = {
  col?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xsOffset?: number;
  smOffset?: number;
  mdOffset?: number;
  lgOffset?: number;
  xlOffset?: number;
  order?: number;
  gutter?: { x: number; y: number };
  flexCol?: boolean;
  justify?: JustifyType;
  align?: AlignType;
} & Omit<DivProps, 'align' | 'order' | 'col'>;

declare const Col: React.ForwardRefExoticComponent<ColProps>;
export default Col;
