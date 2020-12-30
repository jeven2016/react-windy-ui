import React, {useCallback, useEffect, useMemo} from 'react';
import {execute, isNil, validate} from './Utils';
import clsx from 'clsx';
import {IconClear, IconError, IconInfo, IconOk, IconWarning} from './Icons';
import {Transition} from 'react-spring/renderprops';
import useInternalState from './common/useInternalState';
import * as PropTypes from 'prop-types';
import Button from "./button";

const AlertType = {
  simple: {clsName: 'alert-simple', icon: null},
  info: {clsName: 'alert-info', icon: <IconInfo/>},
  mini: {clsName: 'alert-mini', icon: <IconInfo/>},
  ok: {clsName: 'alert-ok', icon: <IconOk/>},
  warning: {clsName: 'alert-warning', icon: <IconWarning/>},
  error: {clsName: 'alert-error', icon: <IconError/>},
};

const Alert = React.forwardRef((props, ref) => {
  const {
    type = 'info',
    children,
    hasLeftBorder = true,
    className = 'alert',
    extraClassName,
    duration = 5000,
    onClose,
    title,
    body,
    style,
    filled = false,
    autoClose = false,
    hasCloseIcon = true,
    icon,
    hasIcon = true,
    iconStyle,
    closeStyle,
    active,
    animated = true,//whether to show / close with animation
    ...otherProps
  } = props;
  validate(AlertType.hasOwnProperty(type),
    `The type '${type}' is not acceptable.`);

  const {
    state: activeAlert,
    setState: setActive,
    customized,
  } = useInternalState({
    props,
    stateName: 'active',
    defaultState: true,
    state: active,
  });

  let typeCls = AlertType[type].clsName;

  const close = useCallback((e) => {
    if (!customized) {
      setActive(false);
    }
    onClose && onClose(true, e);
  }, [customized, setActive, onClose]);

  useEffect(() => {
    let timer;
    //auto close while the duration is set
    if (activeAlert && autoClose && !isNil(duration) && duration > 0) {
      timer = execute(() => {
        close();
      }, duration);
    }

    return () => {
      !isNil(timer) && clearTimeout(timer);
    };
  }, [activeAlert, autoClose, duration, close]);

  const iconElem = useMemo(() => {
    let iconElement = null;
    let iconElementChild = null;
    if (hasIcon) {
      if (!isNil(icon)) {
        iconElementChild = icon;
      } else {
        iconElementChild = !isNil(AlertType[type])
          ? AlertType[type].icon
          : null;
      }
      if (iconElementChild) {
        iconElement = <div className="alert-icon"
                           style={iconStyle}>{iconElementChild}</div>;
      }
    }
    return iconElement;
  }, [hasIcon, icon, type, iconStyle]);

  let clsName = clsx(extraClassName, className, {
    filled,
    'with-left-border': hasLeftBorder,
    'with-title': title,
    [typeCls]: typeCls,
  });

  const getContent = useCallback((extraProps) => {
    return <div className={clsName} {...otherProps} ref={ref}
                style={{...style, ...extraProps}}>
      {iconElem}

      <div className="alert-content">
        {
          !isNil(title)
            ? <div className="title">{title}</div>
            : null
        }
        <div className="body">
          {body}{children}
        </div>

      </div>
      {
        hasCloseIcon ?
          <Button hasBorder={false} hasBox={false} onClick={close}
                  hasRipple={false}
                  style={closeStyle}
                  extraClassName="alert-close"
                  {...(filled ? {color: 'white'} : {})}>
            <IconClear size="small"/>
          </Button>
          : null
      }
    </div>;
  }, [body, children, close, closeStyle, clsName, filled, hasCloseIcon, iconElem, otherProps, ref, style, title]);

  return animated ? <Transition
    items={activeAlert}
    config={{clamp: true, mass: 1, tesion: 100, friction: 15}}
    from={{opacity: 0, transform: 'scaleY(0)'}}
    enter={{opacity: 1, transform: 'scaleY(1)'}}
    leave={{opacity: 0, transform: 'scaleY(0)'}}>
    {
      (show) => show && (springProps => getContent(springProps))
    }
  </Transition> : activeAlert && getContent();

});

Alert.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  hasLeftBorder: PropTypes.bool,
  duration: PropTypes.number,
  onClose: PropTypes.func,
  title: PropTypes.node,
  body: PropTypes.node,
  style: PropTypes.object,
  autoClose: PropTypes.bool,
  hasCloseIcon: PropTypes.bool,
  icon: PropTypes.node,
  hasIcon: PropTypes.bool,
  iconStyle: PropTypes.object,
  closeStyle: PropTypes.object,
  active: PropTypes.bool,
  animated: PropTypes.bool,
};

export default Alert;