import { FormErrorType } from '../generic';
import React from 'react';

export type FormMessageProps = {
  errors?: any;
  name?: string;
  errorType?: FormErrorType;
  message?: React.ReactNode;
  children?: React.ReactNode;
};

declare const FormMessage: React.ForwardRefExoticComponent<FormMessageProps>;

export default FormMessage;
