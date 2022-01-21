import React, { useMemo } from 'react';
import clsx from 'clsx';
import { isBlank, isColorValue, nonNil } from '../Utils';
import Tooltip from '../Tooltip';
import * as PropTypes from 'prop-types';

const Typography = React.forwardRef((props, ref) => {
  const {
    className,
    extraClassName,
    color,
    disabled,
    //mark
    // code,
    // keyboard,
    underline,
    deleted,
    strong,
    italic,
    nativeType = 'span', //it has the highest priority
    bold = false,
    // align, //left,right, center
    children,
    autoEllipsis = false,
    hasTooltip = false,
    style,
    ...rest
  } = props;

  const validColor = isColorValue(color);

  let clsName = useMemo(() => {
    const cls = clsx(extraClassName, className, {
      [`color-${color}`]: !validColor && !isBlank(color),
      bold,
      disabled,
      underline,
      italic,
      deleted,
      strong,
      ellipsis: autoEllipsis
    });
    return isBlank(cls) ? null : `text ${cls}`;
  }, [
    autoEllipsis,
    bold,
    className,
    color,
    deleted,
    disabled,
    extraClassName,
    italic,
    strong,
    underline,
    validColor
  ]);

  const sty = useMemo(
    () => (isColorValue(color) ? { ...style, color: color } : style),
    [color, style]
  );

  const Tag = nativeType;

  return useMemo(() => {
    const content = (
      <Tag className={clsName} ref={ref} style={sty} {...rest}>
        {strong ? <strong>{children}</strong> : children}
      </Tag>
    );

    if (hasTooltip && nonNil(children)) {
      return <Tooltip body={children}>{content}</Tooltip>;
    }

    return content;
  }, [children, clsName, hasTooltip, ref, rest, strong, sty]);
});

Typography.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  // type,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  mark: PropTypes.bool,
  code: PropTypes.bool,
  keyboard: PropTypes.bool,
  underline: PropTypes.bool,
  deleted: PropTypes.bool,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  nativeType: PropTypes.string,
  bold: PropTypes.bool,
  // align: PropTypes.oneOf(['left', 'right', 'center']),
  autoEllipsis: PropTypes.bool,
  hasTooltip: PropTypes.bool
};

export default Typography;
