import React, { useEffect, useMemo, useRef } from 'react';
import { ModalContext } from '../common/Context';
import clsx from 'clsx';
import useEvent from '../common/UseEvent';
import { EventListener } from '../common/Constants';
import { updateBodyStyle } from '../Utils';
import Mask from '../mask';
import { animated, config, to, useSpring } from 'react-spring';
import useMultipleRefs from '../common/UseMultipleRefs';
import PropTypes from 'prop-types';
import useEventCallback from '../common/useEventCallback';
import { ModalSizeStyle, ModalType } from './ModalUtils';

const createCenterStyle = (active, center) => {
  return {
    opacity: active ? 1 : 0,
    xyz: ['-50%', center ? '-50%' : '0', '0'],
    scale: active ? 1 : 0.8,
    disp: active ? 1 : 0
  };
};

const createFullWindowStyle = (active) => {
  return {
    opacity: active ? 1 : 0,
    xyz: [0, 0, 0],
    scale: active ? 1 : 0.5,
    disp: active ? 1 : 0
  };
};

const Modal = React.forwardRef((props, ref) => {
  const {
    size = 'medium',
    type = 'primary',
    className = 'modal',
    hasMask = true,
    canEsc = true,
    extraClassName,
    onCancel,
    active,
    children,
    style,
    center = true,
    autoOverflow = false,
    hasDefaultWidth = true,
    ...otherProps
  } = props;
  const isFullWindow = type === ModalType.fullWindow;
  const internalRef = useRef(null);
  const multiRef = useMultipleRefs(ref, internalRef);

  useEvent(EventListener.keyDown, (e) => {
    //add listener for esc key
    if (canEsc && active && e.keyCode === 27) {
      onCancel && onCancel(e);
    }
  });

  useEffect(() => {
    updateBodyStyle(active);
  }, [active]);

  const modalType = isFullWindow ? 'primary full-window' : type;
  const clsName = clsx(extraClassName, className, {
    center: center,
    'with-width': !isFullWindow && hasDefaultWidth,
    [modalType]: modalType,
    [ModalSizeStyle[size]]: !isFullWindow && ModalSizeStyle[size]
  });

  const handleCancel = useEventCallback((e) => {
    if (internalRef.current.contains(e.target)) {
      return;
    }

    onCancel && onCancel(e);
  });

  const fromStyle = useMemo(() => {
    if (isFullWindow) {
      return createFullWindowStyle(false);
    }

    return createCenterStyle(false, center);
  }, [center, isFullWindow]);

  const toStyle = useMemo(() => {
    if (isFullWindow) {
      return createFullWindowStyle(active);
    }

    return createCenterStyle(active, center);
  }, [isFullWindow, active, center]);

  const { opacity, xyz, scale, disp } = useSpring({
    config: config.friction,
    from: fromStyle,
    to: toStyle
  });

  const modalStyle = {
    ...style,
    opacity,
    transform: to(
      [xyz.to((x, y, z) => `translate3d(${x}, ${y},${z})`), scale.to((scale) => `scale(${scale})`)],
      (t, scale) => `${t ? t : ''} ${scale ? scale : ''}`
    ),
    display: disp.to((disp) => (disp === 0 ? 'none' : 'initial'))
  };

  return (
    <ModalContext.Provider
      value={{
        onMove: null, //useMove(internalRef),
        onCancel: onCancel,
        autoOverflow
      }}
    >
      {hasMask && !isFullWindow && <Mask active={active} onClick={handleCancel} />}
      <animated.div className={clsName} ref={multiRef} style={modalStyle} {...otherProps}>
        {children}
      </animated.div>
    </ModalContext.Provider>
  );
});

Modal.propTypes = {
  size: PropTypes.oneOf(['xLarge', 'large', 'medium', 'small']),
  type: PropTypes.oneOf(['primary', 'secondary', 'fullWindow', 'simple']),
  className: PropTypes.string,
  hasMask: PropTypes.bool,
  extraClassName: PropTypes.string,
  onCancel: PropTypes.func,
  active: PropTypes.bool,
  style: PropTypes.object,
  center: PropTypes.bool,
  autoOverflow: PropTypes.bool,
  hasDefaultWidth: PropTypes.bool
};

export default Modal;
