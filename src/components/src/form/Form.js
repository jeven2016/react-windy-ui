import React from 'react';
import {FormItemType} from '../common/Constants';
import clsx from 'clsx';

const Label = React.forwardRef((props, ref) => {
  const {
    className = 'label-col',
    extraClassName, ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className);
  return <label className={clsName} {...otherProps} ref={ref}/>;
});

const Item = React.forwardRef((props, ref) => {
  const {className = 'form-item', extraClassName, type, ...otherProps} = props;
  const formCls = FormItemType[type];
  let clsName = clsx(extraClassName, className, {
    [formCls]: formCls,
  });
  return <div ref={ref} className={clsName} {...otherProps}/>;
});

const Form = React.forwardRef((props, ref) => {
  const {
    nativeType: RootElement = 'form', className = 'form', extraClassName,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className);
  return <RootElement className={clsName} {...otherProps} ref={ref}/>;
});

Form.Item = Item;
Form.Label = Label;

export default Form;