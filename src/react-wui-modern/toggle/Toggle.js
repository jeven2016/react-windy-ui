import React, {useMemo} from 'react';
import {isNil} from '../Utils';
import useInternalActive from '../common/useInternalActive';
import clsx from 'clsx';
import {Spring} from 'react-spring/renderprops';
import {toggleAnimation} from '../animation/ToggleAnimation';

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

    disabled = false, className = 'toggle', extraClassName,
    block = false, style,
    children, type = 'normal', content, onChange, ...otherProps
  } = props;

  const isExternalControl = props.hasOwnProperty('active');
  const {currentActive: isActive, setActive} = useInternalActive(
      isExternalControl,
      defaultActive, active);

  let isOn = isExternalControl ? active : isActive;
  let clsName = clsx(extraClassName, className, {
    on: isOn,
    off: !isOn,
    disabled: disabled,
    [type]: type,
  });

  const getContent = (isBarContent, defaultValue = null) => {
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
  };

  const clickToggle = (e) => {
    if (disabled) {
      return;
    }
    const newActive = !isActive;
    //the active state is set by the other component
    if (isExternalControl) {
      !isNil(onChange) && onChange(newActive, e);
      return;
    }

    setActive(newActive);
    !isNil(onChange) && onChange(newActive, e);
  };

  const calcInitOffsetX = () => {
    if (type === ToggleType.normal) {
      return {leftOffset: '-5%', rightOffset: '-95%'};
    }
    if (type !== ToggleType.normal) {
      return {leftOffset: '0.2rem', rightOffset: '-1.7rem'};
    }
  };

  const {from, to, config} = useMemo(
      () => toggleAnimation(calcInitOffsetX()),
      [type]);
  const animationSetting = isOn ? {from: from, to: to} : {from: to, to: from};
  animationSetting.config = config;

  const btnStyle = {};
  if (block) {
    btnStyle.width = '100%';
  }

  const barContent = type === ToggleType.normal ? <span
      className="bar"> {getContent(true)}</span> : null;

  const infoContent = type !== ToggleType.normal ? <span className="info">
    {getContent(true, '\u00A0')}
      </span> : null;

  return <button style={{...btnStyle, ...style}}
                 ref={ref}
                 className="toggle-button"
                 disabled={disabled}
                 onClick={clickToggle} {...otherProps}>
      <span className={clsName}>
        {barContent}
        {infoContent}
        <Spring
            from={animationSetting.from}
            to={animationSetting.to}
            config={animationSetting.config}
        >
          {
            springProps => (<span className="ball" style={springProps}>
              {getContent(false)}
            </span>)
          }
          </Spring>
      </span>
  </button>;

});

export default Toggle;