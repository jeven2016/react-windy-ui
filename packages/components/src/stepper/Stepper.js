import React, {useContext, useEffect, useMemo} from "react";
import clsx from "clsx";
import {StepperContext} from "../common/Context";
import {IconChecked2} from "../Icons";
import {Direction} from "../common/Constants";
import {validate} from "../Utils";

const Step = React.forwardRef((props, ref) => {
  const {
    className = 'w-step',
    extraClassName,
    children,
    index,
    title,
    subtitle,
    icon,
    ...rest
  } = props;

  const {
    activeStep,
    count,
    borderedIcon,
    isVertical,
    dotIcon,
    reverse,
    grayDot,
    stepDirection,
    isVerticalStep
  } = useContext(StepperContext);

  const validVerticalStep = !isVertical && isVerticalStep;
  const clsName = clsx(extraClassName, className, stepDirection, {'vertical-step': validVerticalStep});
  const isActive = useMemo(() => reverse ? index === (count - activeStep - 1) : index === activeStep,
    [activeStep, count, index, reverse]);
  const isChecked = useMemo(() => reverse ? index > count - activeStep - 1 : index < activeStep,
    [activeStep, count, index, reverse]);

  const titleClsName = clsx('w-step-title', {
    active: isActive,
    checked: isChecked,
    'vertical-step': validVerticalStep
  });
  const bodyClsName = clsx('w-step-body', {active: isActive, checked: isChecked, 'vertical-body': isVertical});

  const realIcon = useMemo(() => {
    if (dotIcon) {
      return null;
    }
    if (icon) {
      return icon;
    }
    if (index >= activeStep) {
      return index + 1;
    }
    return <IconChecked2/>;
  }, [activeStep, dotIcon, icon, index]);

  const iconClsName = clsx('w-step-icon', stepDirection, {
    active: isActive,
    checked: isChecked,
    'with-border': !grayDot && borderedIcon,
    'w-dot': dotIcon,
    'w-gray-dot': grayDot
  });

  const vConnectorClsName = clsx('w-step-vertical-connector', {'with-dot': dotIcon});
  const stepConnectorClsName = clsx('w-step-single-connector', {
    active: index <= activeStep,
    normal: !dotIcon,
    'w-dot-connector': dotIcon
  });

  return <div className={clsName} ref={ref} {...rest}>
    {validVerticalStep && index > 0 && <div className={stepConnectorClsName}/>}
    <span className={iconClsName}>{realIcon}</span>
    <div className='w-step-content'>
        <span className={titleClsName}>
          <span className='w-step-title-info'>{title}</span>
          {subtitle && <span className='w-step-subtitle'>{subtitle}</span>}
          {index < count - 1 && !isVertical && !isVerticalStep && <div className='w-step-connector'/>}
        </span>
      <div className={bodyClsName}>{children}</div>
    </div>

    {isVertical && index < count - 1 && <div className={vConnectorClsName}/>}
  </div>;
});


const Stepper = React.forwardRef((props, ref) => {
  const {
    className = 'w-stepper',
    extraClassName,
    activeStep,
    children,
    borderedIcon = true,
    direction = Direction.horizontal,
    stepDirection = Direction.horizontal,
    dotIcon = false,
    reverse = false,
    grayDot = false,
    ...rest
  } = props;

  console.log(`${direction}, ${stepDirection}`)
  useEffect(() => {
    stepDirection === Direction.vertical && validate(direction !== stepDirection,
      "The direction cannot be vertical while the stepDirection is vertical")
  }, [direction, stepDirection]);

  const clsName = clsx(extraClassName, className, direction);

  const chdArray = useMemo(() => {
    const array = React.Children.toArray(children);
    return reverse ? array.reverse() : array;
  }, [children, reverse]);
  const childrenCount = useMemo(() => chdArray.length, [chdArray.length]);

  const chd = useMemo(() => chdArray.map((child, index) =>
    React.cloneElement(child, {index})), [chdArray]);

  const ctxValue = useMemo(() => ({
    activeStep,
    borderedIcon,
    dotIcon,
    reverse,
    grayDot,
    isVertical: direction === Direction.vertical,
    isVerticalStep: stepDirection === Direction.vertical,
    stepDirection,
    count: childrenCount
  }), [activeStep, borderedIcon, childrenCount, direction, dotIcon, grayDot, reverse, stepDirection]);

  return <StepperContext.Provider value={ctxValue}>
    <div className={clsName} ref={ref} {...rest}>
      {chd}
    </div>
  </StepperContext.Provider>;
});

Stepper.Step = Step;

export default Stepper;