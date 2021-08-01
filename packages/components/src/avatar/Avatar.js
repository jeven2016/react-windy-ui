import React, {useMemo} from "react";
import clsx from "clsx";
import {isNil, nonNil} from "../Utils";
import PropTypes from "prop-types";

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
    hasBox = true,
    isAccessory = false,
    accessory,
    accessoryStyle,
    ...rest
  } = props;

  const realAccessory = useMemo(() => {
    if (nonNil(accessory)) {
      const accClsName = accessory.props[className];
      const cls = clsx(accClsName, "avatar avatar-accessory", `accessory-${size}`);
      return React.cloneElement(accessory, {className: cls, isAccessory: true});
    }
    return accessory;
  }, [accessory, className, size]);

  const clsName = clsx(extraClassName, className, shape, {
    'with-box': hasBox,
    [size]: nonNil(size) && !isAccessory //accessory has self classes for variant sizes
  });
  const rootCls = clsx("avatar-root", {'non-accessory': !isAccessory})

  const avatarNodeProps = useMemo(() => isNil(accessory) ? {ref: ref, ...rest} : rest, [accessory, ref, rest]);
  const avatarNode = <div className={clsName} style={style} {...avatarNodeProps} >
    <div className="wrapper">
      {nonNil(src) && <img className="avatar-img" src={src} alt={alt} {...imgProps}/>}
      {children}
    </div>
  </div>;

  return isNil(accessory) ? avatarNode : <div className={rootCls} ref={ref}>
    {avatarNode}
    {realAccessory}
  </div>;
});

Avatar.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  shape: PropTypes.oneOf(["circle", "square", 'round']),
  src: PropTypes.string,  //image src
  alt: PropTypes.string,
  style: PropTypes.object,
  imgProps: PropTypes.object,
  hasBox: PropTypes.bool,
  isAccessory: PropTypes.bool,
  accessory: PropTypes.node,
  accessoryStyle: PropTypes.object,
}

export default Avatar;

