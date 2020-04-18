import React, {useEffect, useState} from 'react';
import {execute, isNil} from './Utils';
import clsx from 'clsx';
import {IconError, IconInfo, IconOk, IconWarning} from './Icons';

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
    type, children, className = 'alert', extraClassName,
    duration = 4000, onClose, onUnmount,
    title, body, closable = true, showCloseIcon = true, icon, isGlobal,
    showIcon = true,
    autoUnmout = true,
    ...otherProps
  } = props;
  const [active, setActive] = useState(true);
  const [unmounted, setUnmounted] = useState(false);

  let timer;
  useEffect(() => {
    //auto close while the duration is set
    if (active && closable
        && !isNil(duration) && duration > 0) {
      console.log("set duration")
      timer = execute(() => {
        console.log("timer.....")
        handleClose(null);
      }, duration);
    }

    return () => {
      !isNil(timer) && clearTimeout(timer);
    };
  }, [active, closable, duration]);

  const handleClose = (e) => {
    setActive(false);
  };

  const getIconContent = () => {
    let iconElement = null;
    let iconElementChild = null;
    if (showIcon) {
      if (!isNil(icon)) {
        iconElementChild = icon;
      } else {
        iconElementChild = !isNil(AlertType[type])
            ? AlertType[type].icon
            : null;
      }
      if (iconElementChild) {
        iconElement = <div className="alert-icon">{iconElementChild}</div>;
      }
    }
    return iconElement;
  };

  const getContent = () => {
    let typeCls;
    if (AlertType.hasOwnProperty(type)) {
      typeCls = AlertType[type].clsName;
    } else {
      throw new Error(`The type '${type}' is not acceptable.`);
    }
    let clsName = clsx(extraClassName, className, {
      'with-title': title,
      [typeCls]: typeCls,
      active,
      inactive: !active,
    });

    let iconElement = getIconContent();

    const unmoutAlert = () => {
      if (active) {
        return;
      }

      if (autoUnmout) {
        setUnmounted(true);
      }
      onClose && onClose();
      console.log("unmounted.....")
    };

    let content = <div className={clsName} {...otherProps} ref={ref}
                       onAnimationEnd={unmoutAlert}>
      {iconElement}

      <div className="alert-content">
        {
          !isNil(title) ? <div className="title">{title}</div> : null
        }
        <div className="body">
          {body}{children}
        </div>

      </div>
      {
        showCloseIcon ?
            <div className="alert-close">
              <button onClick={handleClose}
                      className="button close-btn">x
              </button>
            </div>
            : null
      }
    </div>;
    return content;
  };

  return unmounted ? null : getContent();
});

export default Alert;