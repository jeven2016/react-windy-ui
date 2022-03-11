import { ButtonProps } from '../button';
import { ErrorType } from '../../dist/stepper/Stepper';
import React, { MouseEvent } from 'react';
import { CommonProps } from '../generic';

export type RadioProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  value?: any;
  onChange?: (value?: any, e?: MouseEvent) => void;
  label?: React.ReactNode;
  checkedColor?: string;
  uncheckedColor?: string;
  alignLabel?: string;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  errorType?: ErrorType;
} & ButtonProps &
  React.Attributes<HTMLDivElement>;

export type RadioGroupProps = {
  defaultValue?: any;
  value?: any;
  onChange?: (value?: any, e?: MouseEvent) => void;
  disabled?: boolean;
  errorType?: ErrorType;
  button?: boolean;
} & CommonProps<HTMLElement>; //todo inherit from ButtonGroup

declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps>;
export { RadioGroup };

declare const Radio: React.ForwardRefExoticComponent<RadioProps>;
export default Radio;
