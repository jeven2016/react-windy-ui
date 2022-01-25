import * as React from 'react';

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonShape = 'circle' | 'round';

// const Types = tuple('button', 'reset', 'submit', 'a');
export type ButtonType = 'button' | 'reset' | 'submit' | 'a';

interface BaseButtonProps {
  children?: React.ReactNode;
  className?: string;
  extraClassName?: string;
  nativeType?: ButtonType;
  type?: string;
  block?: boolean;
  color?: string;
  directRef?: Function | React.RefAttributes<HTMLElement>;
  active?: boolean;
  size?: ButtonSize;
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
}

// export type ButtonProps = BaseButtonProps &
//   Omit<React.AnchorHTMLAttributes<any>, 'type' | 'onClick'>;

export type ButtonProps = BaseButtonProps & Omit<React.AnchorHTMLAttributes<any>, 'type'>;

// declare const Button: React.ForwardRefRenderFunction<ButtonProps, any> = (
//   props,
//   ref
// ): JSX.Element => {};

// export default Button;
export default function Button(props: ButtonProps, any);
