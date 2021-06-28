import React from 'react';
import clsx from 'clsx';

const Icon = React.forwardRef((props, ref) => {
  const {className = 'icon', extraClassName, color, ...otherProps} = props;
  let clsName = clsx(extraClassName, className);
  return (<i ref={ref} className={clsName} {...otherProps}/>);
});

export default Icon;