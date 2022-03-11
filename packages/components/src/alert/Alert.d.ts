import React from 'react';
import { CommonProps } from '../generic';

export type AlertType = 'simple' | 'info' | 'mini' | 'ok' | 'warning' | 'error';

export type AlertProps = {
  type?: AlertType;
  hasLeftBorder?: boolean;
  duration?: number;
  onClose?: PropTypes.func;
  title?: React.ReactNode;
  body?: React.ReactNode;
  style?: PropTypes.CSSProperties;
  filled?: boolean;
  autoClose?: boolean;
  hasCloseIcon?: boolean;
  icon?: React.ReactNode;
  hasIcon?: boolean;
  iconStyle?: PropTypes.CSSProperties;
  closeStyle?: PropTypes.CSSProperties;
  active?: boolean;
  animated?: boolean;
} & CommonProps<HTMLDivElement>;

declare const Alert: React.ForwardRefExoticComponent<AlertProps>;
export default Alert;
