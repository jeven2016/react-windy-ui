import React, {useRef, useState, useCallback, useMemo} from 'react';
import {invoke, isNil} from './Utils';
import {useEvent} from './index';
import {EventListener} from './common/Constants';
import clsx from 'clsx';
import useResizeObserver from './common/UseResizeObserver';
import useMultipleRefs from './common/UseMultipleRefs';
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
  const preAffixedRef = useRef(status.affixed);
  const affixRef = useRef(null);
  const refs = useMultipleRefs(ref, affixRef);

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
    }
    return memoStyle;
  }, [status.affixed, isTop, isBottom]);

  const updateStatus = (rect, condition) => {
    if (!preAffixedRef.current && condition) {
      preAffixedRef.current = true;
      setStatus({
        affixed: true,
        width: rect.width,
        height: rect.height,
        isBlock: block,
      });
      invoke(onChange, true);
      return;
    }

    if (preAffixedRef.current && !condition) {
      preAffixedRef.current = false;
      setStatus({
        affixed: false,
        width: rect.width,
        height: rect.height,
        isBlock: false,
      });
      invoke(onChange, false);
    }
  };

  const update = useCallback(() => {
    if (disabled) {
      return;
    }

    const rect = containerRef.current.getBoundingClientRect();
    if (isTop) {
      updateStatus(rect, rect.top < top);
    } else if (isBottom) {
      updateStatus(rect, rect.bottom + bottom > window.innerHeight);// todo:
    }
  }, [preAffixedRef.current, disabled, top, bottom, block]);

  //observe the changes of parent node
  useResizeObserver(() => {
    return containerRef.current.parentNode;
  }, update);

  //observe changes of the affix node
  useResizeObserver(affixRef, update);

  //register a scroll listener
  useEvent(EventListener.scroll, () => update());

  const containerStyle = style;
  const clsName = clsx(className,
      {'affix-fixed': canAffix, 'block': status.isBlock || block});

  const containerClsName = clsx('affix-container', extraClassName, {
    block: status.isBlock || block,
  });

  return <div className={containerClsName} style={containerStyle}
              ref={containerRef}>
    {canAffix ?
        <div style={{width: status.width, height: status.height}}/>
        : null}
    <div className={clsName} ref={refs}
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