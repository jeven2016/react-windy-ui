import React from 'react';
import clsx from 'clsx';

const Mask = React.forwardRef((props, ref) => {
  const {
    className = 'mask', extraClassName, active,
    onClick, ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className, {
    active: active,
    inactive: !active,
  });
  return <div ref={ref} className={clsName} onClick={onClick} {...otherProps}/>;
});

export default Mask;