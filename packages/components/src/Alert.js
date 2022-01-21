import React, { useCallback, useEffect, useMemo } from 'react';
import { execute, isNil, nonNil, validate } from './Utils';
import clsx from 'clsx';
import { IconClear, IconError, IconInfo, IconOk, IconWarning } from './Icons';
import { animated, useTransition } from 'react-spring';
import useInternalState from './common/useInternalState';
import * as PropTypes from 'prop-types';
import Button from './button';
import useEventCallback from './common/useEventCallback';

const AlertType = {
  simple: { clsName: 'alert-simple', icon: null },
  info: { clsName: 'alert-info', icon: <IconInfo /> },
  mini: { clsName: 'alert-mini', icon: <IconInfo /> },
  ok: { clsName: 'alert-ok', icon: <IconOk /> },
  warning: { clsName: 'alert-warning', icon: <IconWarning /> },
  error: { clsName: 'alert-error', icon: <IconError /> }
};

const Alert = React.forwardRef((props, ref) => {
  const {
    type = 'info',
    className = 'alert',
    extraClassName,
    children,
    hasLeftBorder = false,
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
    hasAnimation = true, //whether to show / close with animation
    ...otherProps
  } = props;
  validate(AlertType.hasOwnProperty(type), `The type '${type}' is not acceptable.`);

  const [activeAlert, setActive] = useInternalState({
    props,
    stateName: 'active',
    defaultState: true,
    state: active
  });

  let typeCls = AlertType[type].clsName;

  const close = useEventCallback((e) => {
    setActive(false);
    onClose && onClose(true, e);
  });

  useEffect(() => {
    let timer;
    //auto close while the duration is set
    if (activeAlert && autoClose && !isNil(duration) && duration > 0) {
      timer = execute(() => {
        close();
      }, duration);
    }

    return () => {
      nonNil(timer) && clearTimeout(timer);
    };
  }, [activeAlert, autoClose, duration, close]);

  const iconElem = useMemo(() => {
    let iconElement = null;
    let iconElementChild = null;
    if (hasIcon) {
      if (!isNil(icon)) {
        iconElementChild = icon;
      } else {
        iconElementChild = !isNil(AlertType[type]) ? AlertType[type].icon : null;
      }
      if (iconElementChild) {
        iconElement = (
          <div className="alert-icon" style={iconStyle}>
            {iconElementChild}
          </div>
        );
      }
    }
    return iconElement;
  }, [hasIcon, icon, type, iconStyle]);

  let clsName = clsx(extraClassName, className, {
    filled,
    'with-left-border': hasLeftBorder,
    'with-title': title,
    [typeCls]: typeCls
  });

  const getContent = useCallback(
    (extraProps) => {
      return (
        <animated.div
          className={clsName}
          {...otherProps}
          ref={ref}
          style={{ ...style, ...extraProps }}
        >
          {iconElem}

          <div className="alert-content">
            {!isNil(title) ? <div className="title">{title}</div> : null}
            <div className="body">
              {body}
              {children}
            </div>
          </div>
          {hasCloseIcon ? (
            <Button
              hasBorder={false}
              hasBox={false}
              onClick={close}
              hasRipple={false}
              style={closeStyle}
              extraClassName="alert-close"
              {...(filled ? { color: 'white' } : {})}
            >
              <IconClear size="small" />
            </Button>
          ) : null}
        </animated.div>
      );
    },
    [
      body,
      children,
      close,
      closeStyle,
      clsName,
      filled,
      hasCloseIcon,
      iconElem,
      otherProps,
      ref,
      style,
      title
    ]
  );

  const transitions = useTransition(activeAlert, {
    key: activeAlert,
    from: { opacity: 0, transform: 'scaleY(0)' },
    enter: { opacity: 1, transform: 'scaleY(1)' },
    leave: { opacity: 0, transform: 'scaleY(0)' },
    config: { clamp: true, mass: 1, tesion: 100, friction: 15 }
  });

  return hasAnimation
    ? transitions((tranStyles, show) => show && getContent(tranStyles))
    : activeAlert && getContent();
});

Alert.propTypes = {
  type: PropTypes.oneOf(Object.keys(AlertType)),
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  hasLeftBorder: PropTypes.bool,
  duration: PropTypes.number,
  onClose: PropTypes.func,
  title: PropTypes.node,
  body: PropTypes.node,
  style: PropTypes.object,
  filled: PropTypes.bool,
  autoClose: PropTypes.bool,
  hasCloseIcon: PropTypes.bool,
  icon: PropTypes.node,
  hasIcon: PropTypes.bool,
  iconStyle: PropTypes.object,
  closeStyle: PropTypes.object,
  active: PropTypes.bool,
  animated: PropTypes.bool
};

export default Alert;
