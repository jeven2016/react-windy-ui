import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  adjustItems,
  AlignItemsType,
  JustifyContentType
} from "../common/Constants";

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
    block = false,
    justify = "start",
    align = "center",
    justifyLeft = "start",
    alignLeft = "center",
    justifyCenter = "start",
    alignCenter = "center",
    justifyRight = "end",
    alignRight = "center",
    hasPadding = true,
    growLeft,
    growRight,
    growCenter = true,
    ...rest
  } = props;

  const justifyCls = adjustItems(justify, align);
  const clsName = clsx(justifyCls, extraClassName, className, {
    "wui-with-margin-bottom": hasMarginBottom,
    "wui-block": block,
    "wui-normal": !block,
    "wui-with-padding": hasPadding
  });

  const justifyCenterCls = adjustItems(justifyCenter, alignCenter);
  const boxClsName = clsx("wui-box-center", {
    ellipsis: autoEllipsis,
    [justifyCls]: !left && !right && !center,
    [justifyCenterCls]: center,
    "wui-flex-grow": growCenter
  });

  const leftCls = buildCls(
    clsx("wui-box-left", { "wui-flex-grow": growLeft ?? !center }),
    left, justifyLeft, alignLeft);

  const rightCls = buildCls(
    clsx("wui-box-right", { "wui-flex-grow": growRight ?? !center }), left,
    justifyRight,
    alignRight);

  return (
    <div className={clsName} ref={ref} {...rest}>
      {left && <div className={leftCls}>{left}</div>}

      {(center || children) && (
        <div className={boxClsName}>
          {center}
          {children}
        </div>
      )}

      {right && <div className={rightCls}>{right}</div>}
    </div>
  );
});

function buildCls(baseCls, isValid, justify, align) {
  const justifyLeftCls = adjustItems(justify, align);
  return clsx(baseCls, {
    [justifyLeftCls]: isValid
  });
}

Box.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  children: PropTypes.node,
  left: PropTypes.node,
  right: PropTypes.node,
  center: PropTypes.node,
  hasMarginBottom: PropTypes.bool,
  block: PropTypes.bool,
  autoEllipsis: PropTypes.bool,
  justify: PropTypes.oneOf(Object.keys(JustifyContentType)),
  align: PropTypes.oneOf(Object.keys(AlignItemsType))
};

export default Box;
