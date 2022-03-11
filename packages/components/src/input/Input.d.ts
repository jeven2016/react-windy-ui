import { CommonProps, FormErrorType, Size } from '../generic';
import React from 'react';

export type PureInputProps = {
  size?: Size;
  type?: string; //"text", "textarea", "password", "file", etc.
  disabled?: boolean;
  block?: boolean; //whether the input's width is '100%' and it occupies the whole row
  hasBox?: boolean;
  borderType?: FormErrorType;
  readOnly?: boolean;
  canFocus?: boolean;
  errorType?: FormErrorType;
} & Omit<React.TextareaHTMLAttributes<any> & CommonProps<HTMLInputElement>, 'type' | 'size'>;

export type IconInputProps = {
  block?: boolean;
  hasBox?: boolean;
  icon?: React.ReactNode;
  leftIcon?: boolean;
  iconProps?: object;
  rightIcons?: React.ReactNode[];
  rootProps?: object;
  rootRef?: React.Ref<any> | ((domTarget: HTMLElement) => void);
  placeholder?: React.ReactNode;
  disabled?: boolean;
} & PureInputProps;

export type PasswordProps = {
  hasToggleIcon?: boolean;
  toggleIcons?: React.ReactNode[];
  type?: string;
  leftIcon?: React.ReactNode;
  rightIcons?: React.ReactNode[];
} & IconInputProps;

export const PureInput: React.ForwardRefExoticComponent<PureInputProps>;
export const IconInput: React.ForwardRefExoticComponent<IconInputProps>;
export const Password: React.ForwardRefExoticComponent<PasswordProps>;

interface RootComponent extends React.ForwardRefExoticComponent<PasswordProps> {
  isIconInput(comp?: any): boolean;
  IconInput: typeof IconInput;
}

declare const Input: RootComponent;
export default Input;
