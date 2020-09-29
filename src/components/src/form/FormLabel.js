import React from "react";
import clsx from "clsx";

const FormLabel = React.forwardRef((props, ref) => {
  const {
    className = 'label-col',
    extraClassName, ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className);
  return <label className={clsName} {...otherProps} ref={ref}/>;
});

export default FormLabel;