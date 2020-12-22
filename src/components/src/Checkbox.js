import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {IconChecked, IconCheckedIndeterminate, IconUnChecked} from './Icons';
import Element from './common/Element';
import clsx from 'clsx';
import useInternalState from './common/useInternalState';
import {createColorClsName} from './Utils';
import {preventEvent} from './event';

const Checkbox = React.forwardRef((props, ref) => {
  const {
    className = 'checkbox',
    extraClassName,
    disabled = false,
    checked = false,
    defaultChecked = false,
    onChange,
    label,
    children,
    errorType,//ok, error, warning
    checkedColor,
    uncheckedColor,
    alignLabel = 'right',
    checkedIcon = <IconChecked/>,
    uncheckedIcon = <IconUnChecked/>,
    showIndeterminateState = false,
    iconIndeterminate = <IconCheckedIndeterminate/>,
    iconIndeterminateStyle,
    ...otherProps
  } = props;

  const {
    state: checkState,
    setState: setCheckState,
    customized,
  } = useInternalState({
    props,
    stateName: 'checked',
    defaultState: defaultChecked,
    state: checked,
  });

  let realIcon = useMemo(() => {
    let icon;
    if (showIndeterminateState) {
      icon = iconIndeterminate;
    } else if (checkState) {
      icon = checkedIcon;
    } else {
      icon = uncheckedIcon;
    }
    return icon;
  }, [
    checkedIcon,
    uncheckedIcon,
    showIndeterminateState,
    checkState,
    iconIndeterminate]);

  const clsName = clsx(extraClassName, className, alignLabel, {
    checked: checkState,
    unchecked: !checkState,
    indeterminate: showIndeterminateState,
    [`check-${errorType}`]: errorType,
  });

  const handleClick = useCallback((e) => {
    if (disabled) {
      preventEvent(e);
      return;
    }
    const nextState = !checkState;
    if (!customized) {
      setCheckState(nextState);
    }
    onChange && onChange(nextState, e);
  }, [onChange, checkState, customized, setCheckState, disabled]);

  const iconColor = useMemo(() => createColorClsName({
    checkState, checkedColor, uncheckedColor,
  }), [checkState, checkedColor, uncheckedColor]);

  realIcon = useMemo(() => realIcon ? React.cloneElement(realIcon, {
        onKeyDown: (e) => e.keyCode === 13 && handleClick(),
        tabIndex: 0,
        extraClassName: iconColor?.className || '',
        style: showIndeterminateState
            ? iconIndeterminateStyle
            : ((!iconColor?.isClass && iconColor?.style) || {}),
      }) : null,
      [
        realIcon,
        iconColor,
        showIndeterminateState,
        iconIndeterminateStyle,
        handleClick]);

  return <>
    <Element className={clsName} disabled={disabled} {...otherProps}
             onClick={handleClick} ref={ref}>
      {realIcon}
      <input type="checkbox" value={checkState} disabled={disabled}
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

Checkbox.propTypes = {
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
  showIndeterminateState: PropTypes.bool,
  iconIndeterminate: PropTypes.object,
  iconIndeterminateStyle: PropTypes.object,
};

export default Checkbox;