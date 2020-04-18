import React, {useEffect, useRef} from 'react';
import {ModalContext} from '../common/Context';
import clsx from 'clsx';
import useEvent from '../common/UseEvent';
import {EventListener} from '../common/Constants';
import {isNil} from '../Utils';
import {preventEvent} from '../event';

const ModalSizeStyle = {
  small: 'width-sm',
  medium: 'width-md',
  large: 'width-lg',
  extraLarge: 'width-xl',
};

const Modal = React.forwardRef((props, ref) => {
  const {
    modalContainerDom, //internal use
    size = 'medium',
    type, className = 'dialog',
    hasMask = true,
    extraClassName, onCancel,
    active, autoClose = true,
    children, alignCenter,
    ...otherProps
  } = props;

  const modalRef = ref;
  const contentRef = useRef(null);
  let containerRef = useRef(null);

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

  const clsName = clsx(className,
      alignCenter ? 'align-center' : 'align-top',
      {
        [type]: type,
        active: active,
        inactive: !active,
      },
  );

  const handleCancel = (e) => {
    if (!autoClose || contentRef.current.contains(e.target)) {
      preventEvent(e);
      // don't close the modal if clicking the modal body instead of black background
      return;
    }

    if (onCancel) {
      return onCancel(e);
    }
  };

  const sizeStyle = ModalSizeStyle[size];
  let contentCls = clsx(extraClassName, 'content', [sizeStyle]);

  let modal = <ModalContext.Provider value={{
    onMove: null,//useMove(containerRef, contentRef),
    onCancel: onCancel,
  }}>
    <>
      {
        hasMask ? <div className={active ? 'mask active' : 'mask inactive'}/>
            : null
      }

      <div className={clsName} onClick={handleCancel} ref={modalRef}>
        <div className="dialog-container" ref={containerRef}
             onClick={handleCancel}>
          <div className={contentCls} {...otherProps} ref={contentRef}>
            {children}
          </div>
        </div>
      </div>
    </>
  </ModalContext.Provider>;
  return modal;
  // return ReactDOM.createPortal(modal, rootElem);
});

export default Modal;
