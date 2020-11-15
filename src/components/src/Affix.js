import React, {useCallback, useMemo, useRef, useState} from 'react';
import {invoke, isNil} from './Utils';
import {useEvent} from './index';
import {EventListener} from './common/Constants';
import clsx from 'clsx';
import useResizeObserver from './common/UseResizeObserver';
import PropTypes from 'prop-types';

const Affix = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'affix ',
    top,
    bottom,
    disabled = false,
    style,
    children,
    block = false,
    onChange,
    ...otherProps
  } = props;
  const [status, setStatus] = useState(
      {affixed: false, width: 0, height: 0, isBlock: false});
  const containerRef = useRef(null);
  const isTop = !isNil(top);
  const isBottom = !isNil(bottom);
  const canAffix = !disabled && status.affixed;

  const newStyle = useMemo(() => {
    if (disabled) {
      return null;
    }
    const memoStyle = {};
    if (status.affixed) {
      if (isTop) {
        memoStyle.top = top;
      } else if (isBottom) {
        memoStyle.bottom = bottom;
      }

      if (!block) {
        memoStyle.width = status.width;
      }
      memoStyle.height = status.height;
    }
    return memoStyle;
  }, [
    disabled,
    status.affixed,
    status.height,
    status.width,
    isTop,
    isBottom,
    block,
    top,
    bottom]);

  const handleAffixed = useCallback((e) => {
    const isScrollEvent = e?.type === 'scroll';
    if (disabled || isNil(containerRef.current)) {
      return;
    }
    const rect = containerRef.current.getBoundingClientRect();
    let isAffixed;
    if (isTop) {
      isAffixed = rect.top < top;
    } else if (isBottom) {
      isAffixed = rect.bottom + bottom > window.innerHeight;
    }

    if (isScrollEvent) {
      //unnecessary to update the width and height while the window is scrolling
      if (status.affixed !== isAffixed) {
        setStatus({...status, affixed: isAffixed});
        invoke(onChange, isAffixed);
      }
    } else {
      setStatus({
        ...status,
        affixed: isAffixed,
        width: rect.width,
        height: rect.height,
      });
      invoke(onChange, isAffixed);
    }
  }, [bottom, disabled, isBottom, isTop, onChange, status, top]);

  //register a scroll listener
  useEvent(EventListener.scroll, handleAffixed);

  //observe the changes of container
  useResizeObserver(containerRef, handleAffixed);

  const containerStyle = style;
  const clsName = clsx(className,
      {'affix-fixed': canAffix, 'block': status.isBlock || block});

  const containerClsName = clsx('affix-container', extraClassName, {
    block: status.isBlock || block,
  });

  return disabled ? children :
      <div className={containerClsName} style={containerStyle}
           ref={containerRef}>
        {canAffix ?
            <div style={{width: status.width, height: status.height}}/>
            : null}
        <div className={clsName} ref={ref}
             style={!disabled ? newStyle : null} {...otherProps}>
          {children}
        </div>
      </div>;
});

Affix.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  top: PropTypes.number,
  bottom: PropTypes.number,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.node,
  block: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Affix;