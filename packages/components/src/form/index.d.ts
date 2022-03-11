import { CommonProps, Direction } from '../generic';
import { UseFormReturn } from 'react-hook-form/dist/types';
import React from 'react';
import { ColProps } from '../grid';
import FormItemHoc from './FormItemHoc';
import FormLabel from './FormLabel';
import FormMessage from './FormMessage';
import Widget from './Widget';

export type FormProps = {
  form?: UseFormReturn<any, any>;
  onSubmit?: (data: any, e?: MouseEvent) => void;
  onError?: (err?: any, e?: MouseEvent) => void;
  nativeType?: string;
  direction?: Direction | 'inline';
  labelCol?: number | ColProps;
  controlCol?: ColProps;
} & Omit<CommonProps<HTMLFormElement>, 'onSubmit' | 'onError'>;

interface RootComponent extends React.ForwardRefExoticComponent<FormProps> {
  Item: FormItemHoc;
  Label: FormLabel;
  Message: FormMessage;
  useForm: (params?: object) => any;
  Widget: Widget;
}

export type { WidgetProps } from './Widget';
export type { FormMessageProps } from './FormMessage';
export type { FormLabelProps } from './FormLabel';
export type { FormItemProps } from './FormItemHoc';

declare const Form: RootComponent;
export default Form;
