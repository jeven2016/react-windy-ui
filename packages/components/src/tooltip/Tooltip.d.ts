import { PositionType } from '../generic';
import React from 'react';
import { PopupProps } from '../popup';

export type TooltipProps = {
  position?: PositionType;
  body?: React.ReactNode;
  zIndex?: number;
  offset?: number;
  hasArrow?: boolean;
  background?: string;
  tooltipStyle?: React.CSSProperties;
  popupInstanceRef?: React.Ref<any> | ((domTarget: HTMLElement) => void);
  popupBodyStyle?: React.CSSProperties;
} & PopupProps;

declare const Tooltip: React.ForwardRefExoticComponent<TooltipProps>;
export default Tooltip;
