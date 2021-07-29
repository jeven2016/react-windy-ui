import React, {useMemo} from "react";
import clsx from "clsx";
import {isBlank, nonNil} from "../Utils";
import Tooltip from "../Tooltip";

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
    // type,
    color,
    disabled,
    mark,
    code,
    keyboard,
    underline,
    deleted,
    strong,
    italic,
    nativeType = 'span',//it has the highest priority
    bold = false,
    align, //left,right, center
    children,
    autoEllipsis = false,
    hasTooltip = false,
    ...rest
  } = props;
  let clsName = useMemo(() => {
    const cls = clsx(extraClassName, className, {
      [`color-${color}`]: color,
      bold,
      disabled,
      underline,
      italic,
      deleted,
      strong,
      ellipsis: autoEllipsis
    });
    return isBlank(cls) ? null : `text ${cls}`;
  }, [autoEllipsis, bold, className, color, deleted, disabled, extraClassName, italic, strong, underline])


  const Tag = nativeType;

  return useMemo(() => {
    const content = <Tag className={clsName} ref={ref} {...rest}>
      {
        strong ? <strong>{children}</strong> : children
      }
    </Tag>;

    if (hasTooltip && nonNil(children)) {
      return <Tooltip body={children}>{content}</Tooltip>;
    }

    return content;

  }, [children, clsName, hasTooltip, ref, rest, strong]);

});

export default Typography;