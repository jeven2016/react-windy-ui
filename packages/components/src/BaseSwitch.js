import React from 'react';
import clsx from 'clsx';
import { isNil } from './Utils';
import Element from './common/Element';
import useInternalState from './common/useInternalState';

function BaseSwitch(props) {
  const {
    defaultValue,
    iconIndeterminate,
    showIndeterminateState = false,
    iconIndeterminateStyle,
    value,
    label,
    baseClassName,
    inputType,
    iconChecked,
    iconUnchecked,
    canUnchecked = true,
    disabled = false,
    children,
    onChange,
    checked,
    ...otherProps
  } = props;

  const [checkState, setCheckState] = useInternalState({
    props,
    stateName: 'value',
    defaultState: defaultValue,
    state: value
  });

  //get the icon
  let Icon;
  if (showIndeterminateState) {
    Icon = iconIndeterminate;
  } else if (checkState) {
    Icon = iconChecked;
  } else {
    Icon = iconUnchecked;
  }

  let clsName = clsx(baseClassName, {
    checked: checkState,
    unchecked: !checkState
  });

  const onClick = (e) => {
    if (checkState && !canUnchecked) {
      return;
    }
    let state = !checkState;
    setCheckState(state);
    !isNil(onChange) && onChange(state, e);
  };

  return (
    <>
      <Element className={clsName} disabled={disabled} onClick={onClick} {...otherProps}>
        <input type={inputType} value={value} className="hidden-input" />
        <Icon style={showIndeterminateState ? iconIndeterminateStyle : null} />
        <span className="label">
          {label}
          {children}
        </span>
      </Element>
    </>
  );
}

export default BaseSwitch;
