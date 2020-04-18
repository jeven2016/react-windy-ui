import React from 'react';
import clsx from 'clsx';

const Split = React.forwardRef((props, ref) => {
  const {
    className = 'layout-split',
    extraClassName,
    ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className);

  return <div className={clsName} {...otherProps}/>;
});

export default Split;