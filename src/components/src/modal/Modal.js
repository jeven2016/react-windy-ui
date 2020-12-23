import React, {useEffect, useMemo, useRef} from 'react';
import {ModalContext} from '../common/Context';
import clsx from 'clsx';
import useEvent from '../common/UseEvent';
import {EventListener} from '../common/Constants';
import {isNil, nonNil, updateBodyStyle} from '../Utils';
import Mask from '../Mask';
import {animated, config, interpolate, useSpring} from 'react-spring';
import useMultipleRefs from '../common/UseMultipleRefs';
import PropTypes from 'prop-types';
import useEventCallback from "../common/useEventCallback";

const ModalSizeStyle = {
  small: 'width-sm',
  medium: 'width-md',
  large: 'width-lg',
  xLarge: 'width-xl',
};

const ModalType = {
  primary: 'primary',
  secondary: 'secondary',
  simple: 'simple',
  fullWindow: 'fullWindow'
}

const createCenterStyle = (active) => {
  return {
    opacity: active ? 1 : 0,
    xyz: ['-50%', '-50%', '0'],
    scale: active ? 1 : 0.9,
    disp: active ? 1 : 0,
  }
}

const createFullWindowStyle = (active) => {
  return {
    opacity: active ? 1 : 0,
    xyz: [0, 0, 0],
    scale: active ? 1 : 0.5,
    disp: active ? 1 : 0,
  };
}

const Modal = React.forwardRef((props, ref) => {
  const {
    size = 'medium',
    type = 'primary',
    className = 'modal',
    hasMask = true,
    extraClassName,
    onCancel,
    active,
    autoClose = true,
    children,
    style,
    allowOverflow = false,
    hasDefaultWidth = true,
    ...otherProps
  } = props;
  const isFullWindow = type === ModalType.fullWindow;
  const internalRef = useRef(null);
  const multiRef = useMultipleRefs(ref, internalRef);

  useEvent(EventListener.keyDown, (e) => {
    //add listener for esc key
    if (active && e.keyCode === 27 && !isNil(onCancel)) {
      onCancel(e);
    }
  });

  useEffect(() => {
    updateBodyStyle(active);
  }, [active]);

  const modalType = isFullWindow ? 'primary full-window' : type;
  const clsName = clsx(extraClassName, className,
    {
      'with-width': !isFullWindow && hasDefaultWidth,
      [modalType]: modalType,
      [ModalSizeStyle[size]]: !isFullWindow && ModalSizeStyle[size],
    },
  );

  const handleCancel = useEventCallback((e) => {
    if (!autoClose || internalRef.current.contains(e.target)) {
      return;
    }

    if (onCancel) {
      return onCancel(e);
    }
  });

  const from = useMemo(() => {
    if (isFullWindow) {
      return createFullWindowStyle(active);
    }

    return createCenterStyle(active);
  }, [active, isFullWindow]);

  const to = useMemo(() => {
    if (isFullWindow) {
      return createFullWindowStyle(active);
    }

    return createCenterStyle(active);

  }, [isFullWindow, active]);

  const {opacity, xyz, scale, disp} = useSpring({
    // config: {clamp: true, mass: 1, tesion: 100, friction: 15},
    config: config.friction,
    from: from,
    to: to,
  });

  console.log(from)
  console.log(to)

  const modalStyle = {
    ...style,
    opacity,
    transform: interpolate([
      xyz.interpolate((x, y, z) => `translate3d(${x}, ${y},${z})`),
      scale.interpolate(scale => `scale(${scale})`)
    ], (t, scale) => `${t ? t : ""} ${scale ? scale : ""}`),
    display: disp.interpolate(disp => disp === 0 ? 'none' : 'initial')
  };

  // console.log(modalStyle)

  return <ModalContext.Provider value={{
    onMove: null,//useMove(internalRef),
    onCancel: onCancel,
    allowOverflow,
  }}>
    <>
      {
        hasMask && !isFullWindow &&
        <Mask active={active} onClick={handleCancel}/>
      }
      <animated.div className={clsName} ref={multiRef}
                    style={modalStyle} {...otherProps}>
        {children}
      </animated.div>
    </>
  </ModalContext.Provider>;
});

Modal.propTypes = {
  size: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  hasMask: PropTypes.bool,
  extraClassName: PropTypes.string,
  onCancel: PropTypes.func,
  active: PropTypes.bool,
  autoClose: PropTypes.bool,
  style: PropTypes.object,
  allowOverflow: PropTypes.bool,
  hasDefaultWidth: PropTypes.bool
};

export default Modal;
