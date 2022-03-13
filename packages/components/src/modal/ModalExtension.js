import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import * as ReactDOM from 'react-dom';
import Modal from './Modal';
import { Button, IconError, IconInfo, IconOk, IconWarning } from '../index';
import { createContainer, execute, isNil, nonNil } from '../Utils';
import { IconQuestion } from '../icon';
import useMultipleRefs from '../common/UseMultipleRefs';
import { ModalType } from './ModalUtils';
import ButtonGroup from '../buttonGroup';
import Divider from '../divider';
import useEventCallback from '../common/useEventCallback';
import PropTypes from 'prop-types';

const InfoType = {
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
  confirm: 'confirm'
};

const iconColorClass = {
  info: 'text color-blue',
  warning: 'text color-yellow',
  error: 'text color-red',
  success: 'text color-green',
  confirm: 'text color-blue'
};

const SubModal = React.forwardRef((props, ref) => {
  const {
    hasIcon = true,
    compact = false,
    type = ModalType.secondary,
    callback,
    infoType,
    header,
    title,
    body,
    okText,
    cancelText,
    onOk,
    onCancel,
    icon,
    okButtonProps,
    cancelButtonProps,
    extraClassName,
    ...otherProps
  } = props;
  const modalRef = useRef();
  const multiRef = useMultipleRefs(ref, modalRef);
  const [active, setActive] = useState(true);
  const [content, setContent] = useState({
    header: null,
    title: null,
    body: null,
    okText: null,
    cancelText: null
  });
  const okBtnRef = useRef(null);

  const modalHeader = useMemo(() => {
    let realHeader = null;
    if (!isNil(content.header)) {
      realHeader = content.header;
    } else if (!isNil(header)) {
      realHeader = header;
    }
    return realHeader && <Modal.Header>{realHeader}</Modal.Header>;
  }, [header, content]);

  const denseFooter = type === ModalType.secondary && isNil(modalHeader);

  //focus on the ok button by default
  useEffect(() => {
    const okBtnNode = okBtnRef.current;
    if (!isNil(okBtnNode)) {
      okBtnRef.current.focus();
    }
  }, [okBtnRef]);

  const closeModal = useEventCallback((e) => {
    setActive(false);
    callback();
  });

  const handleOk = useEventCallback((e) => {
    closeModal(e);
    onOk && onOk(e);
  });

  const handleCancel = useEventCallback((e) => {
    closeModal(e);
    onCancel && onCancel(e);
  });

  useImperativeHandle(
    multiRef,
    () => ({
      close: handleCancel,
      update: (data) => {
        setContent((pre) => ({ ...pre, ...data }));
      }
    }),
    [handleCancel]
  );

  const iconInfo = useMemo(() => {
    if (!isNil(icon)) {
      return icon;
    }
    switch (infoType) {
      case InfoType.info:
        return <IconInfo size="large" />;
      case InfoType.warning:
        return <IconWarning size="large" />;
      case InfoType.error:
        return <IconError size="large" />;
      case InfoType.success:
        return <IconOk size="large" />;
      case InfoType.confirm:
        return <IconQuestion size="large" />;
      default:
        return null;
    }
  }, [icon, infoType]);

  const modalTitle = content.title || title;
  const modalDesc = content.body || body;
  const okBtnText = content.okText || okText;
  const cancelBtnText = content.cancelText || cancelText;
  const okProps = content.okButtonProps || okButtonProps;
  const cancelProps = content.cancelButtonProps || cancelButtonProps;

  return (
    <Modal
      active={active}
      type={type}
      extraClassName={`${extraClassName ? extraClassName : ''} ${compact ? 'compact' : ''}`}
      onCancel={handleCancel}
      {...otherProps}
    >
      {modalHeader}
      <Modal.Body>
        <div className={`body-content`}>
          {hasIcon && <div className={`icon-col ${iconColorClass[infoType]}`}>{iconInfo}</div>}
          <div className={`content`}>
            {nonNil(modalTitle) && <div className="title">{modalTitle}</div>}
            {nonNil(modalDesc) && <div className="details">{modalDesc}</div>}
          </div>
        </div>
      </Modal.Body>
      {compact && <Divider />}
      {(nonNil(okText) || nonNil(cancelText)) && (
        <Modal.Footer compact={!compact && denseFooter}>
          {compact && (
            <ButtonGroup block size="large">
              {okBtnText && (
                <Button color="blue" inverted hasBox={false} onClick={handleOk} {...okProps}>
                  OK
                </Button>
              )}
              {okBtnText && cancelBtnText && <Divider direction="vertical" />}
              {cancelBtnText && (
                <Button hasBox={false} onClick={handleCancel} {...cancelProps}>
                  NO
                </Button>
              )}
            </ButtonGroup>
          )}

          {!compact && nonNil(okText) && (
            <Button hasMinWidth={true} color="blue" ref={okBtnRef} onClick={handleOk} {...okProps}>
              {okBtnText}
            </Button>
          )}

          {!compact && nonNil(cancelText) && (
            <Button hasMinWidth={true} onClick={handleCancel} {...cancelProps}>
              {cancelBtnText}
            </Button>
          )}
        </Modal.Footer>
      )}
    </Modal>
  );
});

const modalMap = new Map();

const show = (infoType, config) => {
  const container = createContainer();
  const ref = React.createRef(null);
  const modal = (
    <SubModal
      ref={ref}
      callback={() => {
        execute(() => {
          modalMap.delete(container.id);
          ReactDOM.render(null, container.container);
          container.remove();
        }, 400);
      }}
      infoType={infoType}
      {...config}
    />
  );
  modalMap.set(container.id, ref);

  //CSSTransition not working for ReactDOM.render, todo
  ReactDOM.render(modal, container.container);

  return {
    ref: ref,
    update: (content) => {
      ref.current && ref.current.update(content);
    },
    close: () => {
      ref.current && ref.current.close();
    }
  };
};

SubModal.propTypes = {
  extraClassName: PropTypes.string,
  hasIcon: PropTypes.bool,
  compact: PropTypes.bool,
  type: PropTypes.oneOf(['primary', 'secondary', 'fullWindow', 'simple']),
  callback: PropTypes.func,
  infoType: PropTypes.string,
  header: PropTypes.node,
  title: PropTypes.node,
  body: PropTypes.node,
  okText: PropTypes.node,
  cancelText: PropTypes.node,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
  icon: PropTypes.node,
  okButtonProps: PropTypes.object,
  cancelButtonProps: PropTypes.object
};

const MethodDefinition = {
  info(config) {
    return show(InfoType.info, config);
  },
  warning(config) {
    return show(InfoType.warning, config);
  },
  error(config) {
    return show(InfoType.error, config);
  },
  success(config) {
    return show(InfoType.success, config);
  },
  confirm(config) {
    return show(InfoType.confirm, config);
  },

  compact(config) {
    return show(InfoType.confirm, { ...config, compact: true });
  },

  closeAll(delay = 100) {
    for (let [key, value] of modalMap.entries()) {
      execute(() => {
        if (value.current) {
          value.current.close();
        }
      }, delay);
    }
  }
};

export default MethodDefinition;
