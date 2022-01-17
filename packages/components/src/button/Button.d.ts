import React from 'react';

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonShape = 'circle' | 'round';

const Types = tuple('button', 'reset', 'submit', 'a');
export type ButtonType = typeof Types[number];

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

const Button: React.ForwardRefRenderFunction<any, ButtonProps>;

export default Button;
// export default function Button(props: ButtonProps): JSX.Element;
