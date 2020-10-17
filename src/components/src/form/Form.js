import React from 'react';
import clsx from 'clsx';
import {isNil} from '../Utils';
import {FormDirection} from '../common/Constants';
import {FormProvider} from 'react-hook-form';

const Form = React.forwardRef((props, ref) => {
  const {
    form,
    onSubmit,
    onError,
    nativeType: RootElement = 'form',
    className = 'form',
    extraClassName,
    direction = FormDirection.vertical,
    labelCol,
    controlCol,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className, direction);

  let submit = onSubmit;
  if (!isNil(form)) {
    submit = form.handleSubmit(onSubmit, onError);
  }

  return <FormProvider {...form} direction={direction} labelCol={labelCol}
                       controlCol={controlCol}>
    <RootElement onSubmit={submit}
                 className={clsName} {...otherProps}
                 ref={ref}/>
  </FormProvider>;
});

export default Form;