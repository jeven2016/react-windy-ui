import React from 'react';
import { CommonProps } from '../generic';

export type FormLabelProps = {
  required?: boolean;
  iconPosition?: 'left' | 'right';
  hasRequiredIcon?: boolean;
} & CommonProps<HTMLElement>;

declare const FormLabel: React.ForwardRefExoticComponent<FormLabelProps>;

export default FormLabel;
