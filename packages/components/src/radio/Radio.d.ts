import { ButtonProps } from '../button';
import { ErrorType } from '../../dist/stepper/Stepper';
import React, { MouseEvent } from 'react';
import { CommonProps } from '../generic';
import { ButtonGroupProps } from '../buttonGroup';

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
  Omit<React.Attributes<HTMLDivElement>, 'onChange'>;

export type RadioGroupProps = {
  defaultValue?: any;
  value?: any;
  onChange?: (value?: any, e?: MouseEvent) => void;
  disabled?: boolean;
  errorType?: ErrorType;
  button?: boolean;
} & ButtonGroupProps &
  Omit<CommonProps<HTMLElement>, 'onChange'>; //todo inherit from ButtonGroup

declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps>;
export { RadioGroup };

declare const Radio: React.ForwardRefExoticComponent<RadioProps>;
export default Radio;
