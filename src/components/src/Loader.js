import React from 'react';
import {isNil} from './Utils';
import Mask from './Mask';
import clsx from 'clsx';
import Modal from './modal';

const LoaderWrapperStyle = {
  position: 'relative',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const LoaderWrapperBlockStyle = {
  ...LoaderWrapperStyle,
  display: 'flex',
};

const MaskStyle = {
  position: 'absolute',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  borderRadius: '0.25rem',
};

const LoaderStyle = {
  position: 'absolute',
  zIndex: '100',
};

const ModalBodyStyle = {
  display: 'flex',
  flex: '1 1 100%',
  alignItems: 'center',
  justifyContent: 'center',
};

const Loader = React.forwardRef((props, ref) => {

  const {
    text, block, color, active, type = 'primary', size = 'normal',
    hasMask = true, hasBackground = true,
    global = false, position = 'center',  //position only works with  global=true
    children, className = 'loader', extraClassName, ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className, {
    active: active,
    [type]: type,
    [size]: size,
    [color]: color,
    block,
  });

  const getContent = () => {
    let content = null;
    if (type === 'primary') {
      content = <span className="content"/>;
    }
    if (type === 'secondary' || type === 'third') {
      content = <span className="content">
        {
          React.Children.map(Array.from(Array(12), (val, i) => i + 1),
              value => {
                const itemCls = `segment${value}`;
                return <span className={itemCls}>
                  <span className="item"/>
                </span>;
              })
        }
      </span>;
    }

    if (!isNil(text)) {
      return <>
        {content}
        <span className="info">
          {text}
        </span>
      </>;
    }
    return content;
  };

  let content = getContent();

  const getSimpleBody = () => <span className={clsName} {...otherProps}
                                    ref={ref}>
      {content}
    </span>;

  const getTextBody = () => {
    return <>
     <span className={clsName} {...otherProps} style={LoaderStyle}>
            {content}
          </span>
      {children}
    </>;
  };
  const getBodyWithChildren = () => {
    if (!isNil(children)) {
      let wrapperStyle = block ? LoaderWrapperBlockStyle : LoaderWrapperStyle;
      return <>
        <span style={wrapperStyle} ref={ref}>
          <Mask active={active} style={MaskStyle}/>
          {getTextBody()}
        </span>
      </>;
    }
    return null;
  };

  const getModal = () => {
    const modalStyle = hasBackground ? null : {
      background: 'transparent',
      boxShadow: 'none',
    };
    return <Modal alignCenter={true} active={active} style={modalStyle}
                  hasMask={hasMask}>
      <Modal.Body>
        <div style={ModalBodyStyle}>
          {getSimpleBody()}
        </div>
      </Modal.Body>
    </Modal>;
  };

  if (global) {
    return getModal();
  }

  const bodyWithChildren = getBodyWithChildren();
  if (!isNil(bodyWithChildren)) {
    return bodyWithChildren;
  }
  return getSimpleBody();

});

export default Loader;