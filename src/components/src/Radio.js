import React, {useCallback, useContext, useMemo} from 'react';
import {createColorClsName, isNil, nonNil, preventEvent} from './Utils';
import {IconRadioChecked, IconRadioUnChecked} from './Icons';
import PropTypes from 'prop-types';
import useInternalState from './common/useInternalState';
import clsx from 'clsx';
import Element from './common/Element';
import {RadioGroupContext} from './common/Context';

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
    checkedIcon = <IconRadioChecked/>,
    uncheckedIcon = <IconRadioUnChecked/>,
    errorType,
    ...otherProps
  } = props;
  const ctx = useContext(RadioGroupContext);

  //whether the radio is under controlled by a radio group
  const existsGroup = ctx.existsGroup;
  const checkCustomized = useCallback(() => existsGroup ||
    props.hasOwnProperty('checked'), [existsGroup, props]);

  const initChecked = useMemo(() => {
    const ctxSelectedVal = ctx.selectedValue;
    return existsGroup ? !isNil(value) && value === ctxSelectedVal : checked;
  }, [existsGroup, ctx.selectedValue, checked, value]);

  const [checkState, setCheckState] = useInternalState({
    checkCustomized,
    defaultState: defaultChecked,
    state: initChecked,
  });

  let realIcon = useMemo(() => {
    return checkState ? checkedIcon : uncheckedIcon;
  }, [checkedIcon, uncheckedIcon, checkState]);

  const realErrType = nonNil(errorType) ? errorType : ctx.errorType;
  const clsName = clsx(extraClassName, className, alignLabel, {
    checked: checkState,
    unchecked: !checkState,
    [`check-${realErrType}`]: realErrType,
  });

  const handleClick = useCallback((e) => {
    if (disabled || ctx.disabled || checkState) {
      preventEvent(e);
      return;
    }
    const nextState = !checkState;
    setCheckState(nextState);
    if (existsGroup) {
      //call radio group's callback
      ctx.onChange && ctx.onChange(value, e);
    } else {
      onChange && onChange(value, e);
    }
  }, [
    existsGroup,
    value,
    onChange,
    checkState,
    setCheckState,
    disabled,
    ctx]);

  const iconColor = useMemo(() => createColorClsName({
    checkState, checkedColor, uncheckedColor,
  }), [checkState, checkedColor, uncheckedColor]);

  realIcon = useMemo(() => realIcon ? React.cloneElement(realIcon, {
      onKeyDown: (e) => e.keyCode === 13 && handleClick(),
      tabIndex: 0,
      extraClassName: iconColor?.className || '',
      style: (!iconColor?.isClass && iconColor?.style) || {},
    }) : null,
    [iconColor, realIcon, handleClick]);

  return <>
    <Element className={clsName}
             disabled={disabled || ctx.disabled} {...otherProps}
             onClick={handleClick} ref={ref}>
      {realIcon}
      <input type="radio" value={checkState} disabled={disabled}
             className="hidden-input" tabIndex="-1"/>
      {
        (label || children) && <span className="label">
        {label}
          {children}
        </span>
      }
    </Element>
  </>;
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
    ...otherProps
  } = props;
  const clsName = clsx(className, extraClassName);
  const [selectedValue, setSelectedValue] = useInternalState({
    props,
    stateName: 'value',
    defaultState: defaultValue,
    state: value,
  });

  const handleChange = useCallback((radioValue, e) => {
    setSelectedValue(radioValue);
    onChange && onChange(radioValue, e);
  }, [setSelectedValue, onChange]);

  const ctx = useMemo(() => {
    return {
      onChange: handleChange,
      disabled,
      selectedValue,
      existsGroup: true,
      errorType,
    };
  }, [handleChange, disabled, selectedValue, errorType]);

  return <RadioGroupContext.Provider value={ctx}>
    <span className={clsName} ref={ref} {...otherProps}>{children}</span>
  </RadioGroupContext.Provider>;
});

RadioGroup.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  defaultValue: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  errorType: PropTypes.oneOf(['ok', 'warning', 'error']),
};

export default Radio;
export {RadioGroup};