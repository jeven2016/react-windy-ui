import React, {useRef} from 'react';
import Mask from './Mask';
import {isNil} from './Utils';
import clsx from 'clsx';
import {CSSTransition} from 'react-transition-group';
import useEvent from './common/UseEvent';
import {EventListener} from './common/Constants';

const Drawer = React.forwardRef((props, ref) => {
  const {
    type, active, className = 'drawer', extraClassName, width,
    onClose, showMask = true,
    autoClose = true,
    position, children, ...otherProps
  } = props;
  const dwRef = ref ? ref : useRef(null);

  // register window click event listener if no mask displays
  useEvent(EventListener.click, (evt) => {
    if (!active) {
      return;
    }
    if (dwRef.current.contains(evt.target)) {
      return;
    }
    close(evt);
  }, !showMask);

  const close = (evt) => {
    if (!autoClose) {
      return;
    }
    if (!isNil(onClose)) {
      onClose(evt);
    }
  };

  let clsName = clsx(extraClassName, className, {
    [type]: type,
    [position]: position,
  });
  return (
      <>
        {showMask ? <Mask active={active} onClick={close}/> : null}
        <CSSTransition classNames="drawer" in={active} timeout={300}>
          <div className={clsName} ref={dwRef} {...otherProps}>
            {children}
          </div>
        </CSSTransition>
      </>
  );
});

export default Drawer;