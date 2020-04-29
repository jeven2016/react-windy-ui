import React, {useCallback, useMemo} from 'react';
import {isNil} from '../Utils';
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
    defaultActive = false,
    onActiveChange, //a callback used to set the active state
    active,
    disabled = false,
    className = 'toggle',
    extraClassName,
    block = false,
    style,
    children,
    type = 'normal',
    content,
    onChange,
    ...otherProps
  } = props;

  const {state: isActive, setState: setActive, customized} = useInternalState({
    props,
    stateName: 'active',
    defaultState: defaultActive,
    state: active,
  });

  let isOn = customized ? active : isActive;
  let clsName = clsx(extraClassName, className, {
    on: isOn,
    off: !isOn,
    disabled: disabled,
    [type]: type,
  });

  const getContent = useCallback((isBarContent, defaultValue = null) => {
    if (type === ToggleType.normal) {
      return null;
    }
    if (isNil(content)) {
      return defaultValue;
    }

    if ((isBarContent && !content.showInBar)) {
      return defaultValue;
    }

    if (!isBarContent && content.showInBar) {
      return defaultValue;
    }

    return isOn ? content.on : content.off;
  }, [isOn, content, type]);

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

  const to = useMemo(
      () => {
        let offset = type === ToggleType.normal ? {
              leftOffset: '-5%',
              rightOffset: '-95%',
            }
            : {leftOffset: '0.2rem', rightOffset: '-1.7rem'};

        return {
          left: isOn ? '100%' : '0%',
          transform: isOn
              ? `translateX(${offset.rightOffset})`
              : `translateX(${offset.leftOffset})`,
        };
      },
      [isOn, type]);

  const btnStyle = {};
  if (block) {
    btnStyle.width = '100%';
  }

  const barContent = type === ToggleType.normal ? <span
      className="bar"> {getContent(true)}</span> : null;

  const infoContent = type !== ToggleType.normal ? <span className="info">
    {getContent(true, '\u00A0')}
      </span> : null;

  const normalLabel = useMemo(() => {
    if (type !== ToggleType.normal || isNil(content)) {
      return null;
    }
    const text = isOn ? content.on : content.off;
    const labelClsName = `toggle-label ${isOn ? 'on' : null}`;
    return <span className={labelClsName}>{text}</span>;
  }, [type, isOn, content]);

  return <>
    <button style={{...btnStyle, ...style}}
            ref={ref}
            className={`toggle-button`}
            disabled={disabled}
            onClick={clickToggle} {...otherProps}>
      <span className={clsName}>
        {barContent}
        {infoContent}
        <Spring
            to={to}
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
  </>;

});

Toggle.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string, //the customized class need to add
  disabled: PropTypes.bool,
  active: PropTypes.bool,
  onActiveChange: PropTypes.bool,
  block: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
  onChange: PropTypes.func,
  content: PropTypes.shape(
      {one: PropTypes.node, off: PropTypes.node, showInBar: PropTypes.bool}),
  children: PropTypes.node,
};

export default Toggle;