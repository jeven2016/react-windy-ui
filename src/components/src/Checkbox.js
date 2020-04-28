import React, {useCallback, useMemo} from 'react';
import PropTypes from 'prop-types';
import {IconChecked, IconCheckedIndeterminate, IconUnChecked} from './Icons';
import Element from './common/Element';
import clsx from 'clsx';
import useInternalState from './common/useInternalState';
import {isNil, startsWith} from './Utils';
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
  const isExternalControl = props.hasOwnProperty('checked');
  const {state: checkState, setState: setCheckState} = useInternalState(
      isExternalControl,
      defaultChecked, checked);

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
  });

  const handleClick = useCallback((e) => {
    if (disabled || showIndeterminateState) {
      preventEvent(e);
      return;
    }
    const nextState = !checkState;
    if (!isExternalControl) {
      setCheckState(nextState);
    }
    onChange && onChange(nextState);
  }, [onChange, checkState, isExternalControl, setCheckState, disabled]);

  /*
   * For internal used icon
   */
  const isColorValue = useCallback((value) => !isNil(value) &&
      (startsWith(value, '#') || startsWith(value, 'rgb')),
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

  /* todo
    const iconStyle = useMemo(() => {
      if (checkState && !isNil(checkedColor) && isColorValue(checkedColor)) {
        return {color: `${checkedColor}!important`};
      }
      if (!checkState && !isNil(uncheckedColor) && isColorValue(uncheckedColor)) {
        return {color: `${uncheckedColor}!important`};
      }
      return null;
    }, [checkState, checkedColor, uncheckedColor, isColorValue]);
  */
  realIcon = useMemo(() => realIcon ? React.cloneElement(realIcon, {
        onKeyDown: (e) => e.keyCode === 13 && handleClick(),
        tabIndex: 0,
        extraClassName: iconColorCls,
        style: showIndeterminateState
            ? iconIndeterminateStyle
            : null,
      }) : null,
      [iconColorCls, realIcon, showIndeterminateState, iconIndeterminateStyle]);

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