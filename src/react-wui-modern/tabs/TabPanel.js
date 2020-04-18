import React from 'react';
import clsx from 'clsx';

const TabPanel = ((props) => {
  const {
    className,
    extraClassName,
    children,
    itemValue,
  } = props;
  const clsName = clsx(extraClassName, className);
  return <div className={clsName}>{children}</div>;
});

export default TabPanel;