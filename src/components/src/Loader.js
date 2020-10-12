import React, {useMemo} from 'react';
import {isNil} from './Utils';
import Mask from './Mask';
import clsx from 'clsx';
import Modal from './modal';
import PropTypes from 'prop-types';

const ModalBodyStyle = {
  display: 'flex',
  flex: '1 1 100%',
  alignItems: 'center',
  justifyContent: 'center',
};

const LoaderType = {
  primary: 'primary',
  secondary: 'secondary',
  third: 'third',
};

const LoaderColor = {
  white: 'white',
  blue: 'blue',
  dark: 'dark',
};

const LoaderDirection = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};

const Loader = React.forwardRef((props, ref) => {
  const {
    className = 'loader',
    extraClassName,
    text,
    block,
    color,
    active,
    type = LoaderType.primary,
    size = 'medium',
    hasMask = true,
    darkMask = true,
    hasBackground = true,
    direction = LoaderDirection.vertical,
    modalStyle,
    global = false,
    children,
    onMaskClick,
    hasDefaultWidth = true, //only works with global type
    ...otherProps
  } = props;

  const directionCls = useMemo(() => direction === LoaderDirection.horizontal
      ? 'loader-row'
      : 'loader-column', [direction]);

  let clsName = clsx(extraClassName, className, directionCls, {
    active: active,
    [type]: type,
    [size]: size,
    [color]: color === LoaderColor.dark ? LoaderColor.white : color,
    block,
  });

  const content = useMemo(() => {
    let cnt = null;
    if (type === LoaderType.primary) {
      cnt = <span className="content"/>;
    }
    if (type === LoaderType.secondary || LoaderType.third) {
      cnt = <span className="content">
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

    return <>
      {cnt}
      {!isNil(text) && <span className="info">
          {text}
        </span>}
    </>;
  }, [text, type]);

  const simpleBody = useMemo(() => <span className={clsName} {...otherProps}
                                         ref={ref}>
      {content}
    </span>, [clsName, content, otherProps, ref]);

  //wrapper for children
  const bodyWithChildren = useMemo(() => {
    if (!isNil(children)) {
      const wrapperClsName = clsx('loader-wrapper',
          {block, 'with-opacity': !darkMask, active});
      return <>
        <span className={wrapperClsName} ref={ref} {...otherProps}>
          <Mask active={active} onClick={onMaskClick}
                dark={darkMask}/>
          {active && <span className={clsName}>{content}</span>}
          {children}
        </span>
      </>;
    }
    return null;
  }, [
    active,
    block,
    children,
    clsName,
    content,
    darkMask,
    onMaskClick,
    otherProps,
    ref]);

  const modal = useMemo(() => {
    let mStyle = null;
    if (hasBackground && !isNil(modalStyle)) {
      mStyle = {...modalStyle};
    }

    if (!hasBackground) {
      mStyle = {
        background: 'transparent',
        boxShadow: 'none',
      };
    }

    return <Modal alignCenter={true} active={active} style={mStyle}
                  type="secondary"
                  hasDefaultWidth={hasDefaultWidth}
                  hasMask={hasMask} onCancel={onMaskClick}>
      <Modal.Body>
        <div style={ModalBodyStyle}>
          {simpleBody}
        </div>
      </Modal.Body>
    </Modal>;
  }, [
    active,
    hasBackground,
    hasDefaultWidth,
    hasMask,
    modalStyle,
    onMaskClick,
    simpleBody]);

  if (global) {
    return modal;
  }

  if (!isNil(bodyWithChildren)) {
    return bodyWithChildren;
  }
  return active && simpleBody;
});

Loader.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  text: PropTypes.node,
  block: PropTypes.bool,
  color: PropTypes.string,
  active: PropTypes.bool,
  type: PropTypes.string,
  size: PropTypes.string,
  hasMask: PropTypes.bool,
  darkMask: PropTypes.bool,
  hasBackground: PropTypes.bool,
  direction: PropTypes.string,
  modalStyle: PropTypes.object,
  global: PropTypes.bool,
  onMaskClick: PropTypes.func,
  hasDefaultWidth: PropTypes.bool,
};

export default Loader;