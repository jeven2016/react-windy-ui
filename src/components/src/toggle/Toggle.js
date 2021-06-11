import React, {useCallback, useMemo} from 'react';
import {isNil, isObject} from '../Utils';
import clsx from 'clsx';
import {Spring} from 'react-spring/renderprops';
import PropTypes from 'prop-types';
import useInternalState from '../common/useInternalState';

const ToggleType = {
  normal: 'normal',
  primary: 'primary',
  secondary: 'secondary',
};

const Toggle = React.forwardRef((props, ref) => {
  const {
    className = 'toggle-container',
    extraClassName,
    type = 'normal',
    defaultActive = false,
    active,
    block = false,
    errorType, //no default style for this component
    disabled = false,
    style,
    label,
    onChange,
    ...otherProps
  } = props;

  const [isActive, setActive, customized] = useInternalState({
    props,
    stateName: 'active',
    defaultState: defaultActive,
    state: active,
  });

  let isOn = isActive;
  let clsName = clsx('toggle', {
    on: isOn,
    off: !isOn,
    disabled: disabled,
    [type]: type,
  });

  const labelContent = useMemo(() => {
    let onLabel, offLabel;

    if (!isObject(label)) {
      onLabel = offLabel = label;
    } else {
      onLabel = label?.on;
      offLabel = label?.off;
    }
    return {on: onLabel, off: offLabel};
  }, [label]);

  const getContent = useCallback((isBarContent, defaultValue = null) => {
    if (type === ToggleType.normal) {
      return null;
    }
    if (isNil(label)) {
      return defaultValue;
    }

    if ((isBarContent && !label?.showInBar)) {
      return defaultValue;
    }

    if (!isBarContent && label?.showInBar) {
      return defaultValue;
    }

    return isOn ? labelContent.on : labelContent.off;
  }, [isOn, label, labelContent.off, labelContent.on, type]);

  const clickToggle = useCallback((e) => {
    if (disabled) {
      return;
    }
    const newActive = !isActive;
    //the active state is set by the other component
    if (customized) {
      !isNil(onChange) && onChange(newActive, e);
      return;
    }

    setActive(newActive);
    !isNil(onChange) && onChange(newActive, e);
  }, [disabled, isActive, customized, onChange, setActive]);

  const currentStyle = useMemo(() => {
    let offset = type === ToggleType.normal ? {
        leftOffset: 'translate3d(-5%,0,0)',
        rightOffset: 'translate3d(-95%,0,0)',
      }
      : {
        leftOffset: 'translate3d(0.2rem,-50%,0)',
        rightOffset: 'translate3d(-1.7rem,-50%,0)',
      };

    return {
      left: isOn ? '100%' : '0%',
      transform: isOn
        ? offset.rightOffset
        : offset.leftOffset,
    };
  }, [isOn, type]);

  const barContent = type === ToggleType.normal ? <span
    className="bar"> {getContent(true)}</span> : null;

  const infoContent = type !== ToggleType.normal ? <span
    className={`info ${isOn ? 'on' : 'off'}`}>
    {getContent(true, '\u00A0')}
      </span> : null;

  const normalLabel = useMemo(() => {
    if (type !== ToggleType.normal || isNil(label)) {
      return null;
    }
    const text = isOn ? labelContent.on : labelContent.off;
    const labelClsName = `toggle-label ${isOn ? 'on' : ''}`;
    return <span className={labelClsName}>{text}</span>;
  }, [type, label, isOn, labelContent.on, labelContent.off]);

  const buttonClsName = clsx('toggle-button', {
    block: block,
    disabled,
  });

  return <div className={clsx(extraClassName, className, {block: block})}
              style={style}>
    <button ref={ref}
            type="button"
            className={buttonClsName}
            disabled={disabled}
            onClick={clickToggle} {...otherProps}>
      <span className={clsName}>
        {barContent}
        {infoContent}
        <Spring
          from={currentStyle}
          to={currentStyle}
          config={{clamp: true, mass: 1, tesion: 100, friction: 15}}
        >
          {
            springProps => (<span className="ball" style={springProps}>
              {getContent(false)}

            </span>)
          }
          </Spring>
      </span>
    </button>
    {normalLabel}
  </div>;

});

Toggle.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  type: PropTypes.oneOf(['normal', 'primary', 'secondary']),
  defaultActive: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  label: PropTypes.oneOfType([
    PropTypes.string, PropTypes.shape({
      on: PropTypes.node,
      off: PropTypes.node,
      showInBar: PropTypes.bool,
    })]),
  onChange: PropTypes.func,
  errorType: PropTypes.string,
};

export default Toggle;