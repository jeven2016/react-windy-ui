import React, {useCallback, useContext, useMemo} from 'react';
import {isNil, nonNil, startsWith} from './Utils';
import {IconRadioChecked, IconRadioUnChecked} from './Icons';
import PropTypes from 'prop-types';
import useInternalState from './common/useInternalState';
import clsx from 'clsx';
import {preventEvent} from './event';
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
    errorType,
    alignLabel = 'right',
    checkedIcon = <IconRadioChecked/>,
    uncheckedIcon = <IconRadioUnChecked/>,
    ...otherProps
  } = props;
  const ctx = useContext(RadioGroupContext);

  //whether the radio is under controlled by a radio group
  const existsGroup = ctx.existsGroup;
  const customizedFunction = useCallback(() => existsGroup ||
      props.hasOwnProperty('checked'), [existsGroup, props]);

  const initChecked = useMemo(() => {
    const ctxSelectedVal = ctx.selectedValue;
    return existsGroup ? !isNil(value) && value === ctxSelectedVal : checked;
  }, [existsGroup, ctx.selectedValue, checked, value]);

  const {
    state: checkState,
    setState: setCheckState,
    customized,
  } = useInternalState({
    customizedFunction,
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
    if (!customized) {
      setCheckState(nextState);
    }
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
    customized,
    setCheckState,
    disabled,
    ctx]);

  /*
   * For internal used icon
   */
  const isColorValue = useCallback((val) => {
        return !isNil(val) &&
            (startsWith(val, '#') || startsWith(val, 'rgb'));
      },
      []);

  const iconColorCls = useMemo(() => {
    if (checkState && !isNil(checkedColor) && !isColorValue(checkedColor)) {
      return 'text color-' + checkedColor;
    }
    if (!checkState && !isNil(uncheckedColor) &&
        !isColorValue(uncheckedColor)) {
      return 'text color-' + uncheckedColor;
    }
    return null;
  }, [checkState, checkedColor, uncheckedColor, isColorValue]);

  realIcon = useMemo(() => realIcon ? React.cloneElement(realIcon, {
        onKeyDown: (e) => e.keyCode === 13 && handleClick(),
        tabIndex: 0,
        extraClassName: iconColorCls,
      }) : null,
      [iconColorCls, realIcon, handleClick]);

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
  onChange: PropTypes.func,
  label: PropTypes.node,
  children: PropTypes.node,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
};

/**
 * Radio Group
 * @param props
 * @returns {*}
 * @constructor
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
  const {
    state: selectedValue,
    setState: setSelectedValue,
    customized,
  } = useInternalState({
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
      customized,
      disabled,
      selectedValue,
      existsGroup: true,
      errorType,
    };
  }, [handleChange, customized, disabled, selectedValue, errorType]);

  return <RadioGroupContext.Provider value={ctx}>
    <span className={clsName} ref={ref} {...otherProps}>{children}</span>
  </RadioGroupContext.Provider>;
});

RadioGroup.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.node,
  defaultValue: PropTypes.any,
  value: PropTypes.any,
};

export default Radio;
export {RadioGroup};