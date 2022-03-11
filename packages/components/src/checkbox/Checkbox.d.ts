import { CommonProps } from '../generic';
import React, { MouseEvent } from 'react';

export type CheckboxProps = {
  disabled?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked?: boolean, e: MouseEvent) => void;
  label?: React.ReactNode;
  children?: React.ReactNode;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  checkedColor?: string;
  uncheckedColor?: string;
  showIndeterminateState?: boolean;
  iconIndeterminate?: React.ReactNode;
  iconIndeterminateStyle?: React.CSSProperties;
} & Omit<CommonProps<HTMLElement>, 'onChange'>;

declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps>;
export default Checkbox;
