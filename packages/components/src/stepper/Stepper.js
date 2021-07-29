import React, {useContext, useMemo} from "react";
import clsx from "clsx";
import {StepperContext} from "../common/Context";
import {IconChecked2} from "../Icons";

const Step = React.forwardRef((props, ref) => {
  const {
    className = 'w-step',
    extraClassName,
    children,
    index,
    header,
    direction = 'horizontal',
    ...rest
  } = props;
  const clsName = clsx(extraClassName, className, direction);
  const {activeStep, count} = useContext(StepperContext);

  const realIcon = useMemo(() => {
    if (activeStep === index) {
      return <IconChecked2/>
    }
    return index + 1;
  }, [activeStep, index]);

  const chd = useMemo(() => {
    const iconClsName = clsx('w-step-icon', direction);
    return <div className={clsName} ref={ref} {...rest}>
      <span className={iconClsName}>
        {realIcon}
      </span>
      <div className='w-step-content'>
        <span className='w-step-title'>
          {header}
          {index < count - 1 && <div className='w-step-connector'/>}
        </span>
        <div className='w-step-body'>{children}</div>

      </div>

    </div>

  }, [children, clsName, count, direction, header, index, realIcon, ref, rest]);

  return chd;
});

const Stepper = React.forwardRef((props, ref) => {
  const {
    className = 'w-stepper',
    extraClassName,
    activeStep,
    children,
    ...rest
  } = props;
  const clsName = clsx(extraClassName, className);

  const chdArray = useMemo(() => React.Children.toArray(children), [children]);
  console.log(chdArray.length)
  const childrenCount = useMemo(() => chdArray.length, [chdArray.length]);

  const chd = useMemo(() => chdArray.map((child, index) =>
    React.cloneElement(child, {index})), [chdArray]);

  const ctxValue = useMemo(() => ({
    activeStep,
    count: childrenCount
  }), [activeStep, childrenCount]);

  return <StepperContext.Provider value={ctxValue}>
    <div className={clsName} ref={ref} {...rest}>
      {chd}
    </div>
  </StepperContext.Provider>;
});

Stepper.Step = Step;

export default Stepper;