import { AlignType, CommonProps, Direction, JustifyType } from '../generic';
import React from 'react';

export type SpaceProps = {
  align?: AlignType;
  justifyItem?: JustifyType;
  alignItem?: AlignType;
  gutter?: { x?: number; y?: number };
  wrap?: boolean;
  direction?: Direction;
  block?: boolean;
  blockItem?: boolean;
} & CommonProps<HTMLDivElement>;

declare const Space: React.ForwardRefExoticComponent<SpaceProps>;

export default Space;
