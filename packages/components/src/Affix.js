import React, { useMemo, useRef, useState } from 'react';
import { execute, invoke, isEqual, isNil } from './Utils';
import { useEvent } from './index';
import { EventListener } from './common/Constants';
import clsx from 'clsx';
import useResizeObserver from './common/UseResizeObserver';
import PropTypes from 'prop-types';
import useEventCallback from './common/useEventCallback';

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
    targetWindow = window,
    ...otherProps
  } = props;
  const [status, setStatus] = useState({ affixed: false, width: 0, height: 0, isBlock: false });
  const containerRef = useRef(null);
  const isTop = !isNil(top);
  const isBottom = !isNil(bottom);
  const canAffix = !disabled && status.affixed;

  const newStyle = useMemo(() => {
    if (disabled) {
      return null;
    }
    const memoStyle = { ...style };
    if (canAffix) {
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
  }, [disabled, style, canAffix, isTop, isBottom, top, bottom, block, status.height, status.width]);

  const handleAffixed = useEventCallback(
    (e) => {
      // const isScrollEvent = e?.type === 'scroll';
      if (disabled || isNil(containerRef.current)) {
        return;
      }
      const rect = containerRef.current.getBoundingClientRect();
      let isAffixed;
      if (isTop) {
        isAffixed = rect.top < top;
      } else if (isBottom) {
        isAffixed = rect.bottom > targetWindow.innerHeight;
      }

      const nextStatus = {
        ...status,
        affixed: isAffixed,
        width: rect.width,
        height: rect.height
      };

      if (!isEqual(nextStatus, status)) {
        setStatus(nextStatus);
        execute(() => invoke(onChange, isAffixed), 100);
      }
    },
    [disabled, isBottom, isTop, onChange, status, targetWindow.innerHeight, top]
  );

  //register a scroll listener
  useEvent(EventListener.scroll, handleAffixed, true, targetWindow);

  //observe the changes of container
  useResizeObserver(containerRef, handleAffixed);

  const clsName = clsx(className, { 'affix-fixed': canAffix, block: status.isBlock || block });

  const containerClsName = clsx('affix-container', extraClassName, {
    block: status.isBlock || block
  });

  return disabled ? (
    children
  ) : (
    <div className={containerClsName} ref={containerRef}>
      {canAffix ? <div style={{ width: status.width, height: status.height }} /> : null}
      <div className={clsName} ref={ref} style={!disabled ? newStyle : null} {...otherProps}>
        {children}
      </div>
    </div>
  );
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
  onChange: PropTypes.func
};

export default Affix;
