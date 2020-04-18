import React,{useCallback} from 'react';
import clsx from 'clsx';
import {preventEvent} from '../event';

const Element = React.forwardRef((props, ref) => {
  const {
    className,
    nativeType: ElementNode = 'div',
    extraClassName,
    disabled = false,
    children,
    onClick,
    onMouseEnter,
    onMouseLeave,
    onFocus,
    onBlur,
    ...otherProps
  } = props;

  const prevent = useCallback((e) => {
    if (disabled) {
      preventEvent(e);
    }
    return disabled;
  },[disabled]);

  const handleClick = (e) => {
    if (prevent(e)) return false;
    onClick && onClick(e);
  };

  const handleMouseEnter = (e) => {
    if (prevent(e)) return false;
    onMouseEnter && onMouseEnter(e);
  };

  const handleMouseLeave = (e) => {
    if (prevent(e)) return false;
    onMouseLeave && onMouseLeave(e);
  };

  const handleFocus = (e) => {
    if (prevent(e)) return false;
    onFocus && onFocus(e);
  };

  const handleBlur = (e) => {
    if (prevent(e)) return false;
    onBlur && onBlur(e);
  };

  let clsName = clsx(extraClassName, className, {disabled: disabled});
  return <ElementNode
      ref={ref}
      className={clsName}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...otherProps}>
    {children}
  </ElementNode>;
});

export default Element;