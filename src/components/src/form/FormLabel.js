import React from "react";
import clsx from "clsx";
import {JustifyContentType} from "../common/Constants";

const FormLabel = React.forwardRef((props, ref) => {
  const {
    className = 'label-col',
    required = false,
    iconPosition = 'left', //left or right
    hasRequiredIcon = true,
    extraClassName,
    children,
    ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className);
  const existsIcon = required && hasRequiredIcon;
  const isLeftPos = iconPosition === 'left';
  return <label className={clsName} {...otherProps} ref={ref}>
    {existsIcon && isLeftPos && <span className="required-left-col">
      *
    </span>}
    <span>{children}</span>
    {existsIcon && !isLeftPos && <span className="required-right-col">
      *
    </span>}
  </label>;
});

export default FormLabel;