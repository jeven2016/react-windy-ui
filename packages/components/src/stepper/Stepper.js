import React, { useCallback, useContext, useEffect, useMemo, useRef } from 'react';
import clsx from 'clsx';
import { StepperContext } from '../common/Context';
import { IconChecked2, IconClear, IconWarning2 } from '../Icons';
import { Direction } from '../common/Constants';
import { nonNil, validate } from '../Utils';
import useInternalState from '../common/useInternalState';
import Ripple from '../common/Ripple';
import * as PropTypes from 'prop-types';

const ErrorType = {
  error: 'error',
  warning: 'warning',
  normal: 'normal'
};

const StatusType = {
  finished: 'finished',
  processing: 'processing',
  todo: 'todo'
};

const Step = React.forwardRef((props, ref) => {
  const {
    currentStep,
    changeStep,
    count,
    borderedIcon,
    isVertical,
    dotIcon,
    reverse,
    solidDot,
    stepDirection,
    isVerticalStep,
    grayDot,
    errorType,
    errorIcon,
    warningIcon,
    showErrorIcon,
    showIcon,
    onClick,
    hasRipple,
    rippleColor
  } = useContext(StepperContext);

  const rippleRef = useRef(null);

  //bind ripple related event listeners
  const updatedProps = Ripple.useRippleEvent({
    rippleRef,
    rootProps: props,
    hasRipple: hasRipple
  });

  const {
    className = 'w-step',
    extraClassName,
    children,
    index,
    title,
    subtitle,
    icon,
    errorType: stepErrorType,
    disabled = false,
    status,
    ...rest
  } = updatedProps;

  const validVerticalStep = !isVertical && isVerticalStep;

  const isCurrentActive = useMemo(
    () => (reverse ? index === count - currentStep - 1 : index === currentStep),
    [count, currentStep, index, reverse]
  );

  const isActive = useMemo(
    () => (nonNil(status) ? status === StatusType.processing : isCurrentActive),
    [status, isCurrentActive]
  );

  const isChecked = useMemo(
    () =>
      nonNil(status)
        ? status === StatusType.finished
        : reverse
        ? index > count - currentStep - 1
        : index < currentStep,
    [status, reverse, index, count, currentStep]
  );

  const realErrType = useMemo(
    () => (nonNil(stepErrorType) ? stepErrorType : errorType),
    [errorType, stepErrorType]
  );

  const hasError = nonNil(stepErrorType) ? true : nonNil(errorType) && isActive;
  const isWarning = realErrType === ErrorType.warning;

  const clickable = nonNil(onClick) && !disabled;

  const clsName = clsx(extraClassName, className, stepDirection, {
    'vertical-step': validVerticalStep,
    [`with-${realErrType}`]: hasError,
    clickable,
    visible: clickable && isCurrentActive,
    disabled
  });

  const titleClsName = clsx('w-step-title', {
    active: isActive,
    checked: isChecked,
    'vertical-step': validVerticalStep
  });

  const bodyClsName = clsx('w-step-body', {
    active: isActive,
    checked: isChecked,
    'vertical-body': isVertical,
    [`with-${realErrType}`]: hasError
  });

  const realIcon = useMemo(() => {
    if (dotIcon) {
      return null;
    }
    if (showIcon && icon) {
      return icon;
    }

    if (showIcon) {
      if (icon) {
        return icon;
      }
      if (hasError && showErrorIcon) {
        return isWarning ? warningIcon : errorIcon;
      }
      if (isChecked) {
        return <IconChecked2 />;
      }
    }
    return index + 1;
  }, [
    dotIcon,
    errorIcon,
    hasError,
    icon,
    index,
    isChecked,
    isWarning,
    showErrorIcon,
    showIcon,
    warningIcon
  ]);

  const hasIconBorder = !solidDot && borderedIcon;
  const iconClsName = clsx('w-step-icon', stepDirection, {
    active: isActive,
    checked: isChecked,
    'with-border': hasIconBorder,
    'without-border': !hasIconBorder,
    'w-dot': dotIcon,
    'w-solid-dot': solidDot,
    'gray-dot': grayDot,
    [`with-${realErrType}`]: hasError
  });

  const vConnectorClsName = clsx('w-step-vertical-connector', { 'with-dot': dotIcon });
  const stepConnectorClsName = clsx('w-step-single-connector', {
    active: isActive || isChecked,
    normal: !dotIcon,
    'w-dot-connector': dotIcon
  });

  const handleChange = useCallback(
    (e) => {
      !disabled && changeStep(index, e);
    },
    [changeStep, disabled, index]
  );

  return (
    <div className={clsName} ref={ref} onClick={handleChange} {...rest}>
      {validVerticalStep && index > 0 && <div className={stepConnectorClsName} />}
      <span className={iconClsName}>{realIcon}</span>
      <div className="w-step-content">
        <span className={titleClsName}>
          <span className="w-step-title-info ellipsis">{title}</span>
          {subtitle && <span className="w-step-subtitle">{subtitle}</span>}
          {index < count - 1 && !isVertical && !isVerticalStep && (
            <div className="w-step-connector" />
          )}
        </span>
        <div className={bodyClsName}>{children}</div>
      </div>

      {isVertical && index < count - 1 && <div className={vConnectorClsName} />}
      {hasRipple && !disabled && clickable && (
        <Ripple ref={rippleRef} center={false} color={rippleColor} />
      )}
    </div>
  );
});

const Stepper = React.forwardRef((props, ref) => {
  const {
    className = 'w-stepper',
    extraClassName,
    activeStep,
    defaultActiveStep,
    children,
    borderedIcon = true,
    direction = Direction.horizontal,
    stepDirection = Direction.horizontal,
    dotIcon = false,
    reverse = false,
    solidDot = false,
    grayDot = false,
    errorType,
    errorIcon = <IconClear />,
    warningIcon = <IconWarning2 />,
    showErrorIcon = true,
    showIcon = true,
    onClick,
    hasRipple = true,
    rippleColor = '#ccc',
    ...rest
  } = props;

  const [currentStep, setStep] = useInternalState({
    props,
    stateName: 'activeStep',
    defaultState: defaultActiveStep,
    state: activeStep
  });

  const handleChange = useCallback(
    (index, e) => {
      setStep(index);
      onClick && onClick(index, e);
    },
    [onClick, setStep]
  );

  useEffect(() => {
    stepDirection === Direction.vertical &&
      validate(
        direction !== stepDirection,
        'The direction cannot be vertical while the stepDirection is vertical'
      );
  }, [direction, stepDirection]);

  const clsName = clsx(extraClassName, className, direction);

  const chdArray = useMemo(() => {
    const array = React.Children.toArray(children);
    return reverse ? array.reverse() : array;
  }, [children, reverse]);
  const childrenCount = useMemo(() => chdArray.length, [chdArray.length]);

  const chd = useMemo(
    () => chdArray.map((child, index) => React.cloneElement(child, { index })),
    [chdArray]
  );

  const ctxValue = useMemo(
    () => ({
      currentStep,
      changeStep: handleChange,
      borderedIcon,
      dotIcon,
      reverse,
      solidDot,
      grayDot,
      isVertical: direction === Direction.vertical,
      isVerticalStep: stepDirection === Direction.vertical,
      stepDirection,
      count: childrenCount,
      errorType,
      errorIcon,
      warningIcon,
      showErrorIcon,
      showIcon,
      onClick,
      hasRipple,
      rippleColor
    }),
    [
      currentStep,
      handleChange,
      borderedIcon,
      dotIcon,
      reverse,
      solidDot,
      grayDot,
      direction,
      stepDirection,
      childrenCount,
      errorType,
      errorIcon,
      warningIcon,
      showErrorIcon,
      showIcon,
      onClick,
      hasRipple,
      rippleColor
    ]
  );

  return (
    <StepperContext.Provider value={ctxValue}>
      <div className={clsName} ref={ref} {...rest}>
        {chd}
      </div>
    </StepperContext.Provider>
  );
});

Step.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  icon: PropTypes.node,
  errorType: PropTypes.oneOf(Object.keys(ErrorType)),
  disabled: PropTypes.bool,
  status: PropTypes.oneOf(Object.keys(StatusType))
};

Stepper.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  activeStep: PropTypes.number,
  defaultActiveStep: PropTypes.number,
  borderedIcon: PropTypes.bool,
  direction: PropTypes.oneOf(Object.keys(Direction)),
  stepDirection: PropTypes.oneOf(Object.keys(Direction)),
  dotIcon: PropTypes.bool,
  reverse: PropTypes.bool,
  solidDot: PropTypes.bool,
  grayDot: PropTypes.bool,
  errorType: PropTypes.oneOf(Object.keys(ErrorType)),
  errorIcon: PropTypes.node,
  warningIcon: PropTypes.node,
  showErrorIcon: PropTypes.bool,
  showIcon: PropTypes.bool,
  onClick: PropTypes.func,
  hasRipple: PropTypes.bool,
  rippleColor: PropTypes.string
};

Stepper.Step = Step;

export default Stepper;
