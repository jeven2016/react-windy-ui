import React from 'react';
import clsx from 'clsx';

const Group = React.forwardRef((props, ref) => {
  const {
    header,
    children,
    ...otherProps
  } = props;
  const clsName = clsx('menu-group');
  return <div className={clsName} {...otherProps}>
    {header && <div className='group-header'>{header}</div>}
    {children}
  </div>;
});

export default Group;
