import React from 'react';
import clsx from 'clsx';
import {isNil} from "../Utils";
import {FormContext} from "../common/Context";
import {FormDirection} from "../common/Constants";

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

  return <FormContext.Provider value={{form, direction, labelCol, controlCol}}>
    <RootElement onSubmit={submit}
                 className={clsName} {...otherProps}
                 ref={ref}/>
  </FormContext.Provider>;
});

export default Form;