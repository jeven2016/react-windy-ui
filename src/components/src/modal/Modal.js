import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {ModalContext} from '../common/Context';
import clsx from 'clsx';
import useEvent from '../common/UseEvent';
import {EventListener} from '../common/Constants';
import {isNil, setDisplay} from '../Utils';
import Mask from '../Mask';
import {animated, config, useSpring} from 'react-spring';
import useMultipleRefs from '../common/UseMultipleRefs';
import PropTypes from 'prop-types';

const ModalSizeStyle = {
  small: 'width-sm',
  medium: 'width-md',
  large: 'width-lg',
  xLarge: 'width-xl',
};

const Modal = React.forwardRef((props, ref) => {
  const {
    size = 'medium',
    type = 'primary',
    className = 'dialog',
    hasMask = true,
    extraClassName,
    onCancel,
    active,
    autoClose = true,
    children,
    style,
    alignCenter = true,
    allowOverflow = false,
    hasDefaultWidth = true,
    ...otherProps
  } = props;

  const internalRef = useRef(null);
  const multiRef = useMultipleRefs(ref, internalRef);

  useEvent(EventListener.keyDown, (e) => {
    //add listener for esc key
    if (active && e.keyCode === 27 && !isNil(onCancel)) {
      onCancel(e);
    }
  });

  useEffect(() => {
    let body = document.body;
    if (!active) {
      body.removeAttribute('style');
      return;
    }
    body.style.overflow = 'hidden';
    body.style.paddingRight = '17px'; //避免滚动条造成的页面抖动
  }, [active]);

  const clsName = clsx(extraClassName, className,
      alignCenter ? 'align-center' : 'align-top',
      {
        'with-width': hasDefaultWidth,
        [type]: type,
        [ModalSizeStyle[size]]: ModalSizeStyle[size],
      },
  );

  const handleCancel = (e) => {
    if (!autoClose || internalRef.current.contains(e.target)) {
      return;
    }

    if (onCancel) {
      return onCancel(e);
    }
  };

  const from = useMemo(() => {
    return alignCenter ? {
      top: '50%',
      left: '50%',
      opacity: 0,
      transform: 'translate3D(-50%, -50%, 0) scale(0.8)',
    } : {opacity: 0, transform: 'translate3D(-50%, -100%, 0)'};
  }, [alignCenter]);

  const to = useMemo(() => {
    if (alignCenter) {
      return active ? {
            top: '50%',
            left: '50%',
            opacity: 1,
            transform: 'translate3D(-50%, -50%, 0) scale(1)',
          } :
          {opacity: 0, transform: 'translate3D(-50%, -50%, 0) scale(0.8)'};
    } else {
      return active ? {opacity: 1, transform: 'translate3D(-50%, 0, 0)'}
          : {opacity: 0, transform: 'translate3D(-50%, -100%, 0)'};
    }
  }, [alignCenter, active]);

  const preUpdate = useCallback(() => setDisplay(active, 'flex', internalRef),
      [active]);
  const postUpdate = useCallback(
      () => setDisplay(!active, 'none', internalRef),
      [active]);

  const springProps = useSpring({
    // config: {clamp: true, mass: 1, tesion: 100, friction: 15},
    config: config.friction,
    from: from,
    to: to,
    onStart: preUpdate,
    onRest: postUpdate,
  });

  const modalStyle = {...style, ...springProps};
  return <ModalContext.Provider value={{
    onMove: null,//useMove(internalRef),
    onCancel: onCancel,
    allowOverflow,
  }}>
    <>
      {
        hasMask &&
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
  alignCenter: PropTypes.bool,
  allowOverflow: PropTypes.bool,
  hasDefaultWidth: PropTypes.bool
};

export default Modal;
