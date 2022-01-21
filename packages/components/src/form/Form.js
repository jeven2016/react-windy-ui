import React, { useMemo } from 'react';
import clsx from 'clsx';
import { isNumber, nonNil } from '../Utils';
import { ColCount, FormDirection } from '../common/Constants';
import { FormProvider } from 'react-hook-form';
import PropTypes from 'prop-types';

const defaultOnSubmit = () => {};
const defaultOnError = () => {};

const Form = React.forwardRef((props, ref) => {
  const {
    form,
    onSubmit = defaultOnSubmit,
    onError = defaultOnError,
    nativeType: RootElement = 'form',
    className = 'form',
    extraClassName,
    direction = FormDirection.vertical,
    labelCol,
    controlCol,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className, direction);
  let submit = nonNil(form) ? form.handleSubmit(onSubmit, onError) : onSubmit;

  const colDefinition = useMemo(() => {
    let labelDef, ctrlDef;
    if (isNumber(labelCol)) {
      labelDef = {
        md: labelCol,
        sm: ColCount
      };

      ctrlDef = {
        md: ColCount - labelCol,
        sm: ColCount
      };

      return { label: labelDef, ctrl: ctrlDef };
    }

    return { label: labelCol, ctrl: controlCol };
  }, [controlCol, labelCol]);

  return (
    <FormProvider
      direction={direction}
      labelCol={colDefinition.label}
      errors={form?.formState?.errors}
      controlCol={colDefinition.ctrl}
      {...form}
    >
      <RootElement onSubmit={submit} className={clsName} {...otherProps} ref={ref} />
    </FormProvider>
  );
});

Form.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  onError: PropTypes.func,
  nativeType: PropTypes.string,
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  direction: PropTypes.oneOf(Object.keys(FormDirection)),
  labelCol: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
  controlCol: PropTypes.object
};

export default Form;
