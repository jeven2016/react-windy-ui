import React from "react";
import clsx from 'clsx';


const Content = React.forwardRef((props,ref)=>{
  const {
    className = 'layout-content',
    extraClassName,
    ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className);

  return <div className={clsName} {...otherProps}/>;
});

export default Content;