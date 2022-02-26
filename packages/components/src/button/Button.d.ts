import React from 'react';
import { ButtonType, Size, ButtonShape, ClassNameRefProps } from '../generic';

export type AnchorBtnProps = {
  href: string;
  target?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'type'>;

export type BaseButtonProps = {
  children?: React.ReactNode;
  nativeType?: ButtonType;
  type?: string;
  block?: boolean;
  color?: string;
  directRef?: Function | React.RefAttributes<HTMLElement>;
  active?: boolean;
  size?: Size;
  outline?: boolean;
  circle?: boolean;
  hasMinWidth?: boolean;
  shape?: ButtonShape;
  inverted?: boolean;
  hasOutlineBackground?: boolean;
  initOutlineColor?: boolean;
  hasBox?: boolean;
  hasBorder?: boolean;
  invertedOutline?: boolean;
  hasRipple?: boolean;
  rippleColor?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  leftLoader?: boolean;
  loader?: React.ReactNode;
} & ClassNameRefProps<HTMLButtonElement>;

export type ButtonProps = Partial<BaseButtonProps & AnchorBtnProps>;

const Button: React.ForwardRefExoticComponent<ButtonProps>;
export default Button;
