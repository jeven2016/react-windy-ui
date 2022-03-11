import { CommonProps, FormErrorType, Size } from '../generic';
import React from 'react';

export type TextFieldProps = {
  rootRef?: React.Ref<any> | ((domTarget: HTMLElement) => void);
  shape?: 'outline' | 'underline';
  required?: boolean;
  label?: React.ReactNode;
  labelFixed?: boolean;
  placeholder?: string;
  disabled?: boolean;
  nativeType?: string;
  hasBottomBar?: boolean;
  hasToggleIcon?: boolean;
  toggleIcons?: React.ReactNode | React.ReactNode[];
  leftItems?: React.ReactNode | React.ReactNode[];
  rightItems?: React.ReactNode | React.ReactNode[];
  block?: boolean;
  select?: boolean;
  selectProps?: any; //todo Select props
  size?: Size;
  errorType?: FormErrorType;
  hasBox?: boolean;
} & CommonProps<any>; //todo Select props

declare const TextField: React.ForwardRefExoticComponent<TextFieldProps>;

export default TextField;
