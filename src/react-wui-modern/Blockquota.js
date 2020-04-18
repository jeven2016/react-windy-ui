import React from 'react';
import clsx from 'clsx';

const Blockquota = React.forwardRef((props, ref) => {
  const {
    className = 'blockquote', extraClassName, type, hasBorder,
    hasBox,
    hasBackground,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className, {
    [type]: type,
    border: hasBorder,
    'with-bg': hasBackground,
    'with-box': hasBox,
  });
  return <div className={clsName} {...otherProps} ref={ref}/>;
});

export default Blockquota;