import React from 'react';
import {FormItemType} from '../common/Constants';
import clsx from 'clsx';
import {animated, useTransition} from 'react-spring';

const Label = React.forwardRef((props, ref) => {
  const {
    className = 'label-col',
    extraClassName, ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className);
  return <label className={clsName} {...otherProps} ref={ref}/>;
});

const Item = React.forwardRef((props, ref) => {
  const {
    className = 'form-item',
    hasMessage = true,//todo
    extraClassName,
    type,
    ...otherProps
  } = props;
  const formCls = FormItemType[type];
  let clsName = clsx(extraClassName, className, {
    [formCls]: formCls,
    'with-msg': hasMessage,
    'normal': !hasMessage,
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

const ErrorMessage = React.forwardRef((props, ref) => {
  const {
    error,
    validationType,
    type = 'error', //ok, error, warning,success
    message,
  } = props;
  const transition = useTransition(error?.type === validationType, null, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  });

  return transition.map(({item, key, props: tranProps}) => {
    return item && <animated.h5 key={key} style={tranProps}
                                className={`form-msg text ${type}`}>{message}</animated.h5>;
  });
});

Form.Item = Item;
Form.Label = Label;
Form.ErrorMessage = ErrorMessage;

export default Form;