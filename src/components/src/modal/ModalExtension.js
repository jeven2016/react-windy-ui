import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as ReactDOM from 'react-dom';
import Modal from './Modal';
import {Button, IconError, IconInfo, IconOk, IconWarning} from '../index';
import {createContainer, execute, isNil} from '../Utils';
import Row from '../grid/Row';
import Col from '../grid/Col';
import {IconQuestion} from '../Icons';
import useMultipleRefs from '../common/UseMultipleRefs';

const InfoType = {
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
  confirm: 'confirm',
};

const iconColorClass = {
  info: 'text color-blue',
  warning: 'text color-yellow',
  error: 'text color-red',
  success: 'text color-green',
  confirm: 'text color-blue',
};

const titleStyle = {
  fontSize: '1.25em',
  fontWeight: '500',
  lineHeight: '1.5',
};

const contentStyle = {
  display: 'flex',
  flex: '0 1 100%',
};

const iconColStyle = {
  display: 'flex',
  fontSize: '2em',
  marginRight: '0.5em',
  flex: '0 0 2em',
  justifyContent: 'flex-end',
};

const textColStyle = {
  flex: '0 1 auto',
};

const SubModal = React.forwardRef((props, ref) => {
  const {
    callback,
    infoType, header, title, body,
    okText, cancelText,
    onOk, onCancel, icon, ...otherProps
  } = props;
  const modalRef = useRef();
  const multiRef = useMultipleRefs(ref, modalRef);

  const [active, setActive] = useState(true);
  const [content, setContent] = useState(
      {header: null, title: null, body: null, okText: null, cancelText: null});
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


  //focus on the ok button by default
  useEffect(() => {
    const okBtnNode = okBtnRef.current;
    if (!isNil(okBtnNode)) {
      okBtnRef.current.focus();
    }
  }, [okBtnRef]);

  const closeModal = useCallback((e) => {
    setActive(false);
    callback();
  }, [setActive, callback]);

  const handleOk = useCallback((e) => {
    closeModal(e);
    onOk && onOk(e);
  }, [closeModal, onOk]);

  const handleCancel = useCallback((e) => {
    closeModal(e);
    onCancel && onCancel(e);
  }, [closeModal, onCancel]);

  useImperativeHandle(multiRef, () => ({
    close: handleCancel,
    update: (data) => {
      setContent(pre => ({...pre, ...data}));
    },
  }), [handleCancel]);

  const iconInfo = useMemo(() => {
    if (!isNil(icon)) {
      return icon;
    }
    switch (infoType) {
      case InfoType.info:
        return <IconInfo/>;
      case InfoType.warning:
        return <IconWarning/>;
      case InfoType.error:
        return <IconError/>;
      case InfoType.success:
        return <IconOk/>;
      case InfoType.confirm:
        return <IconQuestion/>; //need to update
      default:
        return null;
    }
  }, [icon, infoType]);

  return <Modal active={active}
                onCancel={handleCancel}
                {...otherProps}>
    {modalHeader}
    <Modal.Body>
      <div style={contentStyle}>
        <div style={iconColStyle} className={iconColorClass[infoType]}>
          {iconInfo}
        </div>
        <div style={textColStyle}>
          <Row>
            <Col sm={12} style={titleStyle}>{isNil(content.title)
                ? title
                : content.title}</Col>
          </Row>
          <Row style={{marginTop: '0.5rem'}}>
            <Col sm={12}>{isNil(content.body) ? body : content.body}</Col>
          </Row>
        </div>
      </div>
    </Modal.Body>
    {
      (!isNil(okText) || !isNil(cancelText)) &&
      <Modal.Footer>
        {
          !isNil(okText) &&
          <Button hasMinWidth={true} color="blue" ref={okBtnRef}
                  onClick={handleOk}>{isNil(content.okText)
              ? okText
              : content.okText}</Button>
        }

        {
          !isNil(cancelText) && <Button hasMinWidth={true}
                                        onClick={handleCancel}>{isNil(
              content.cancelText) ? cancelText : content.cancelText}</Button>
        }

      </Modal.Footer>
    }

  </Modal>;
});

const modalMap = new Map();

const show = (infoType, config) => {
  const container = createContainer();
  const ref = React.createRef(null);
  const modal = <SubModal ref={ref} callback={() => {
    execute(() => {
      modalMap.delete(container.id);
      ReactDOM.render(null, container.container);
      container.remove();
    }, 400);

  }} infoType={infoType} {...config} />;
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
    },
  };
};

export default {
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

  closeAll(delay = 100) {
    for (let [key, value] of modalMap.entries()) {
      execute(() => {
        if (value.current) {
          value.current.close();
        }
      }, delay);
    }
  },
};