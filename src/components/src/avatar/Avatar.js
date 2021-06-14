import React from "react";
import clsx from "clsx";
import {nonNil} from "../Utils";

const Avatar = React.forwardRef((props, ref) => {
  const {
    className = "avatar",
    extraClassName,
    size = "medium",
    shape = "circle",
    src,  //image src
    alt,
    children,
    style,
    imgProps,
    ...rest
  } = props;

  const clsName = clsx(extraClassName, className, shape, size);

  return <div className={clsName} style={style} {...rest} ref={ref}>
    <div className="wrapper">
      {nonNil(src) && <img className="avatar-img" src={src} alt={alt} {...imgProps}/>}
      {children}
    </div>
  </div>;
});

export default Avatar;

