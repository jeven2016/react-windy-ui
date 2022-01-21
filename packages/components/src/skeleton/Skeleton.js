import React, { useMemo } from 'react';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';

const SkeletonType = {
  square: 'square',
  circle: 'circle'
};

const SkeletonItem = React.forwardRef((props, ref) => {
  const {
    className = 'skeleton-item',
    extraClassName,
    type = SkeletonType.square,
    width,
    height,
    style,
    ...rest
  } = props;
  const clsName = clsx(extraClassName, className, type);
  const newStyle = useMemo(() => ({ width, height, ...style }), [height, style, width]);

  return <div className={clsName} style={newStyle} {...rest} />;
});

const Skeleton = React.forwardRef((props, ref) => {
  const { className = 'skeleton', extraClassName, ...rest } = props;

  return <div className={className} {...rest} />;
});

SkeletonItem.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(SkeletonType)),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  style: PropTypes.object
};

Skeleton.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string
};

Skeleton.Item = SkeletonItem;

export default Skeleton;
