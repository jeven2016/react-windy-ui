import React, {useMemo} from "react";
import clsx from "clsx";

const SkeletonType = {
  line: 'line',
  circle: 'circle'

}

const SkeletonItem = React.forwardRef((props, ref) => {
  const {
    className = 'skeleton-item',
    extraClassName,
    type = SkeletonType.line,
    width,
    height,
    style,
    ...rest
  } = props;
  const clsName = clsx(extraClassName, className, type);
  const newStyle = useMemo(() => ({width, height, ...style}), [height, style, width]);

  return <div className={clsName} style={newStyle} {...rest}/>;
});

const Skeleton = React.forwardRef((props, ref) => {
  const {
    className = 'skeleton',
    extraClassName,
    ...rest
  } = props;

  return <div className={className} {...rest}/>;
});

Skeleton.Item = SkeletonItem;

export default Skeleton;