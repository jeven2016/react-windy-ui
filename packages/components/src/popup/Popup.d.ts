import { CommonProps, PositionType } from '../generic';
import React, { MouseEvent } from 'react';

export type PopupProps = {
  zIndex?: number;
  hasBox?: boolean;
  hasBorderRadius?: boolean;
  hasBorder?: boolean;
  popupExtraClassName?: string;
  popupStyle?: React.CSSProperties;
  popupBodyStyle?: React.CSSProperties;
  offset?: number;
  ctrlNode?: React.ReactNode;
  body?: React.ReactNode;
  ctrlRef?: React.Ref<any> | ((domTarget: HTMLElement) => void);
  popupRef?: React.Ref<any> | ((domTarget: HTMLElement) => void);
  activeBy?: string;
  defaultActive?: boolean;
  active?: boolean;
  onChange?: (active: boolean, e: MouseEvent) => void;
  disabled?: boolean;
  hidePopup?: boolean;
  delayClose?: number;
  animationFunc?: (active: boolean) => boolean;
  position?: PositionType;
  autoClose?: boolean;
} & Omit<CommonProps<HTMLDivElement>, 'onChange'>;

declare const Popup: React.ForwardRefExoticComponent<PopupProps>;
export default Popup;
