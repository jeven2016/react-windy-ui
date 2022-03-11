import { CommonProps, Direction, JustifyType } from '../generic';
import { ColProps } from '../grid';
import React from 'react';

export type FormItemProps = {
  direction?: Direction | 'inline';
  justify?: JustifyType;
  justifyLabel?: JustifyType;
  labelCol?: ColProps;
  controlCol?: ColProps;
  name?: string;
  label?: React.ReactNode;
  rules?: object;
  required?: boolean;
  hasRequiredIcon?: boolean;
  iconPosition?: 'left' | 'right';
  rootItem?: boolean;
} & CommonProps<HTMLElement>;

declare const FormItemHoc: React.ForwardRefExoticComponent<FormItemProps>;

export default FormItemHoc;
