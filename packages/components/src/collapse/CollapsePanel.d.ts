import { DivProps } from '../generic';
import React from 'react';

export type CollapsePanelProps = {
  collapse?: boolean;
  style?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
  height?: number;
  heightIncrement?: number;
  autoScaleHeight?: boolean;
} & DivProps<HTMLDivElement>;

declare const CollapsePanel: React.ForwardRefExoticComponent<CollapsePanelProps>;
export default CollapsePanel;
