import React from 'react';
import clsx from 'clsx';
import {isNil} from "../Utils";
import {FormContext} from "../common/Context";

const Form = React.forwardRef((props, ref) => {
  const {
    form,
    onSubmit,
    onError,
    nativeType: RootElement = 'form',
    className = 'form',
    extraClassName,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className);

  let submit;
  if (!isNil(form)) {
    submit = form.handleSubmit(onSubmit, onError);
  }

  return <FormContext.Provider value={{form}}>
    <RootElement onSubmit={submit}
                 className={clsName} {...otherProps}
                 ref={ref}/>
  </FormContext.Provider>;
});

export default Form;