import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";

/**
 * 1. margin top/bottom , left/right
 * 2. align left/right, justify
 * 3. two equals columns
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<unknown>>}
 */
const Box = React.forwardRef((props, ref) => {
  const {
    className = "wui-box",
    extraClassName,
    children,
    left,
    right,
    center,
    autoEllipsis = true,
    hasMarginBottom,
    block,
    ...rest
  } = props;
  const clsName = clsx(extraClassName, className, {
    "wui-with-margin-bottom": hasMarginBottom,
    "wui-block": block
  });

  const boxClsName = clsx("wui-box-center", {
    ellipsis: autoEllipsis
  });
  return (
    <div className={clsName} ref={ref} {...rest}>
      {left && <div className="wui-box-left">{left}</div>}

      {(center || children) && (
        <div className={boxClsName}>
          {center}
          {children}
        </div>
      )}

      {right && <div className="wui-box-right">{right}</div>}
    </div>
  );
});

Box.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  children: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node,
  center: PropTypes.node,
  hasMarginBottom: PropTypes.bool,
  block: PropTypes.bool,
  autoEllipsis: PropTypes.bool
};

export default Box;
