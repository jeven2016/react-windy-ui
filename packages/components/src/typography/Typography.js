import React from "react";
import clsx from "clsx";

const TypographyType = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  normal: 'normal'
}

const Typography = React.forwardRef((props, ref) => {
  const {
    className,
    extraClassName,
    type,
    color,
    disabled,
    mark,
    code,
    keyboard,
    underline,
    deleted,
    strong,
    italic,
    display = 'span',//it has the highest priority
    nativeType,
    ...rest
  } = props;
  const clsName = clsx(extraClassName, className);


  return <div className={clsName} ref={ref} {...rest}>

  </div>
});

export default Typography;