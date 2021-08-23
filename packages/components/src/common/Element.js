import React, {useCallback} from 'react';
import clsx from 'clsx';
import {isFunction, preventEvent} from '../Utils';

const proxy = (method, disabled) => {
  return (e) => {
    if (disabled) {
      preventEvent(e);
      return;
    }
    method && isFunction(method) && method(e);
  };
};

const Element = React.forwardRef((props, ref) => {
  const {
    className,
    extraClassName,
    moreClassSuffix,
    nativeType: ElementNode = 'div',
    disabled = false,
    setDisabledAttr = false,//for internal use, whether to set the 'disabled' attribute for the corresponding dom node
    children,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    onDragOver,
    onDragLeave,
    onDragEnd,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onTouchCancel,
    ...otherProps
  } = props;

  const handleClick = useCallback(proxy(onClick, disabled),
    [onClick, disabled]);

  const handleMouseEnter = useCallback(proxy(onMouseEnter, disabled),
    [onMouseEnter, disabled]);

  const handleMouseLeave = useCallback(proxy(onMouseLeave, disabled),
    [onMouseLeave, disabled]);

  const handleFocus = useCallback(proxy(onFocus, disabled),
    [onFocus, disabled]);

  const handleBlur = useCallback(proxy(onBlur, disabled),
    [onBlur, disabled]);

  const handleDragOver = useCallback(proxy(onDragOver, disabled),
    [onDragOver, disabled]);

  const handleDragLeave = useCallback(proxy(onDragLeave, disabled),
    [onDragLeave, disabled]);

  const handleDragEnd = useCallback(proxy(onDragEnd, disabled),
    [onDragEnd, disabled]);

  const handleTouchStart = useCallback(proxy(onTouchStart, disabled),
    [onTouchStart, disabled]);

  const handleTouchMove = useCallback(proxy(onTouchMove, disabled),
    [onTouchMove, disabled]);

  const handleTouchEnd = useCallback(proxy(onTouchEnd, disabled),
    [onTouchEnd, disabled]);

  const handleTouchCancel = useCallback(proxy(onTouchCancel, disabled),
    [onTouchCancel, disabled]);

  const others = setDisabledAttr ? {
    disabled,
    ...otherProps,
  } : {...otherProps};

  let clsName = clsx(extraClassName, className, {disabled: disabled},
    moreClassSuffix);
  return <ElementNode
    ref={ref}
    className={clsName}
    onClick={handleClick}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onFocus={handleFocus}
    onBlur={handleBlur}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
    onDragEnd={handleDragEnd}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    onTouchCancel={handleTouchCancel}
    {...others}>
    {children}
  </ElementNode>;
});

export default Element;