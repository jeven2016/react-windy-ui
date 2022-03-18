import React, { useCallback, useContext, useMemo } from 'react';
import { createColorClsName, invoke, isNil, nonNil, preventEvent } from '../Utils';
import { IconRadioChecked, IconRadioUnChecked } from '../icon';
import PropTypes from 'prop-types';
import useInternalState from '../common/useInternalState';
import clsx from 'clsx';
import Element from '../common/Element';
import { RadioGroupContext } from '../common/Context';
import Button from '../button';
import ButtonGroup from '../buttonGroup';

/**
 * Radio Component
 * @param props
 * @returns {*}
 * @constructor
 */
const Radio = React.forwardRef((props, ref) => {
  const {
    className = 'radio',
    extraClassName,
    disabled = false,
    checked = false,
    defaultChecked = false,
    value,
    onChange,
    label,
    children,
    checkedColor,
    uncheckedColor,
    alignLabel = 'right',
    checkedIcon = <IconRadioChecked />,
    uncheckedIcon = <IconRadioUnChecked />,
    errorType,
    ...otherProps
  } = props;
  const ctx = useContext(RadioGroupContext);

  //whether the radio is under controlled by a radio group
  const existsGroup = ctx.existsGroup;
  const checkCustomized = useCallback(
    () => existsGroup || props.hasOwnProperty('checked'),
    [existsGroup, props]
  );

  const initChecked = useMemo(() => {
    const ctxSelectedVal = ctx.selectedValue;
    return existsGroup ? !isNil(value) && value === ctxSelectedVal : checked;
  }, [existsGroup, ctx.selectedValue, checked, value]);

  const [checkState, setCheckState] = useInternalState({
    checkCustomized,
    defaultState: defaultChecked,
    state: initChecked
  });

  let realIcon = useMemo(() => {
    return checkState ? checkedIcon : uncheckedIcon;
  }, [checkedIcon, uncheckedIcon, checkState]);

  const realErrType = nonNil(errorType) ? errorType : ctx.errorType;
  const clsName =
    !ctx.button &&
    clsx(extraClassName, className, alignLabel, {
      checked: checkState,
      unchecked: !checkState,
      [`check-${realErrType}`]: realErrType
    });

  const handleClick = useCallback(
    (e) => {
      if (disabled || ctx.disabled || checkState) {
        preventEvent(e);
        return;
      }
      const nextState = !checkState;
      setCheckState(nextState);

      const nextValue = nonNil(value) ? value : nextState;
      const callback = existsGroup ? ctx.onChange : onChange;
      invoke(callback, nextValue, e);
    },
    [disabled, ctx, checkState, setCheckState, value, existsGroup, onChange]
  );

  const iconColor = useMemo(
    () =>
      !ctx.button &&
      createColorClsName({
        checkState,
        checkedColor,
        uncheckedColor
      }),
    [checkState, checkedColor, ctx.button, uncheckedColor]
  );

  realIcon = useMemo(
    () =>
      realIcon && !ctx.button
        ? React.cloneElement(realIcon, {
            onKeyDown: (e) => e.keyCode === 13 && handleClick(),
            tabIndex: 0,
            extraClassName: iconColor?.className || '',
            style: (!iconColor?.isClass && iconColor?.style) || {}
          })
        : null,
    [realIcon, ctx.button, iconColor?.className, iconColor?.isClass, iconColor?.style, handleClick]
  );

  return useMemo(() => {
    if (ctx.button) {
      return (
        <Button
          active={checkState}
          disabled={disabled || ctx.disabled}
          onClick={handleClick}
          ref={ref}
          outline
          hasBox={false}
          initOutlineColor
          type="primary"
          {...otherProps}
        >
          {children}
        </Button>
      );
    }

    return (
      <Element
        className={clsName}
        disabled={disabled || ctx.disabled}
        {...otherProps}
        onClick={handleClick}
        ref={ref}
      >
        {realIcon}
        <input
          type="radio"
          value={checkState}
          disabled={disabled}
          className="hidden-input"
          tabIndex="-1"
        />
        {(label || children) && (
          <span className="label">
            {label}
            {children}
          </span>
        )}
      </Element>
    );
  }, [
    checkState,
    children,
    clsName,
    ctx.button,
    ctx.disabled,
    disabled,
    handleClick,
    label,
    otherProps,
    realIcon,
    ref
  ]);
});

Radio.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
  label: PropTypes.node,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
  alignLabel: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  errorType: PropTypes.oneOf(['ok', 'warning', 'error']),
  button: PropTypes.bool
};

/**
 * Radio Group
 */
const RadioGroup = React.forwardRef((props, ref) => {
  const {
    className = 'radio-group',
    extraClassName,
    children,
    defaultValue,
    value,
    onChange,
    disabled,
    errorType,
    button = false,
    ...otherProps
  } = props;
  const clsName = clsx(className, extraClassName);
  const [selectedValue, setSelectedValue] = useInternalState({
    props,
    stateName: 'value',
    defaultState: defaultValue,
    state: value
  });

  const handleChange = useCallback(
    (radioValue, e) => {
      setSelectedValue(radioValue);
      onChange && onChange(radioValue, e);
    },
    [setSelectedValue, onChange]
  );

  const ctx = useMemo(() => {
    return {
      onChange: handleChange,
      disabled,
      selectedValue,
      existsGroup: true,
      errorType,
      button
    };
  }, [handleChange, disabled, selectedValue, errorType, button]);

  const chd = useMemo(() => {
    if (button) {
      return (
        <ButtonGroup ref={ref} {...otherProps}>
          {children}
        </ButtonGroup>
      );
    }
    return (
      <span className={clsName} ref={ref} {...otherProps}>
        {children}
      </span>
    );
  }, [button, children, clsName, otherProps, ref]);

  return <RadioGroupContext.Provider value={ctx}>{chd}</RadioGroupContext.Provider>;
});

RadioGroup.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  errorType: PropTypes.oneOf(['ok', 'warning', 'error']),
  button: PropTypes.bool
};

export default Radio;
export { RadioGroup };
