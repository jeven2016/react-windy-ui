import React from "react";
import clsx from "clsx";


const Body = React.forwardRef((props, ref) => {
  const {
    className = 'w-container-body',
    extraClassName,
    ...rest
  } = props;
  const clsName = clsx(extraClassName, className);
  return <div className={clsName} ref={ref} {...rest}/>
});

const Container = React.forwardRef((props, ref) => {
  const {
    className = 'w-container',
    extraClassName,
    children,
    size,
    autoAdjust = false,
    ...rest
  } = props;
  const clsName = clsx(extraClassName, className, {
    [`w-container-${size}`]: size,
    [`w-container-auto`]: autoAdjust
  });

  return <div className={clsName} ref={ref}>
    <Body size={size} {...rest}>
      {children}
    </Body>
  </div>
});

Container.Body = Body;

export default Container;