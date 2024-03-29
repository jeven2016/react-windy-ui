import React, { useContext } from 'react';
import Modal from './Modal';
import useElement from '../common/useElement';
import { adjustItems } from '../common/Constants';
import { ModalContext } from '../common/Context';
import { isNil } from '../Utils';
import Element from '../common/Element';
import ModelExtension from './ModalExtension';
import { IconClear } from '../icon';

const Body = React.forwardRef((props, ref) => {
  const context = useContext(ModalContext);
  const clsName = context.autoOverflow ? 'body overflow' : 'body';
  return useElement(props, ref, clsName);
});

const Footer = React.forwardRef((props, ref) => {
  const { justify = 'end', compact = false, ...otherProps } = props;
  const justifyCls = adjustItems(justify);
  return useElement({ ...otherProps }, ref, 'footer', {
    'compact-footer': compact,
    [justifyCls]: justifyCls
  });
});

const Header = React.forwardRef((props, ref) => {
  const { children, className = 'header', ...otherProps } = props;
  const context = useContext(ModalContext);
  const onCancel = context.onCancel;
  const headerRef = ref;

  let cancelIcon = isNil(onCancel) ? null : <IconClear size="small" onClick={onCancel} />;

  return (
    <Element className={className} {...otherProps} ref={headerRef}>
      <div className="title">{children}</div>
      {cancelIcon}
    </Element>
  );
});

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
Modal.info = ModelExtension.info;
Modal.warning = ModelExtension.warning;
Modal.error = ModelExtension.error;
Modal.success = ModelExtension.success;
Modal.confirm = ModelExtension.confirm;
Modal.closeAll = ModelExtension.closeAll;
Modal.compact = ModelExtension.compact;

export default Modal;
