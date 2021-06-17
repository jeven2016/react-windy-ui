import React, {useCallback, useMemo} from 'react';
import clsx from "clsx";
import {nonNil} from "../Utils";
import Popover from "../popover";
import Space from "../space/Space";
import Avatar from "./Avatar";
import PropTypes from "prop-types";

/**
 * AvatarGroup
 */
const AvatarGroup = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = "avatar-group",
    children,
    max,
    extraAvatarStyle,
    extraAvatarProps,
    ...rest
  } = props;

  const chdArray = useMemo(() => React.Children.toArray(children), [children]);
  const chdCount = useMemo(() => chdArray.length, [chdArray.length]);
  const displayMore = nonNil(max) && chdCount > max;

  const sliceElems = useCallback(({prefix, array, start, end}) => {
    return array.slice(start, end)
      .map((elem, i) =>
        React.cloneElement(elem, {key: `${prefix}-${i}`}));
  }, []);

  const extraElem = useMemo(() => {
    if (!displayMore) {
      return null;
    }

    return <Popover activeBy="hover" key="popover-avatar" autoWidth body={<Space wrap>
      {
        sliceElems({prefix: 'pop', array: chdArray, start: max, end: chdCount})
      }
    </Space>}>
      <Avatar style={extraAvatarStyle} {...extraAvatarProps}>{`+${chdCount - max}`}</Avatar>
    </Popover>;
  }, [chdArray, chdCount, displayMore, extraAvatarProps, extraAvatarStyle, max, sliceElems]);

  const chd = useMemo(() => {
    return displayMore ? [...sliceElems({
      prefix: 'list',
      array: chdArray,
      start: 0,
      end: max
    }), extraElem] : children
  }, [chdArray, children, displayMore, max, extraElem, sliceElems]);
  const clsName = clsx(extraClassName, className, 'left');

  return <div className={clsName} ref={ref} {...rest}>
    {chd}
  </div>;
});

AvatarGroup.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  max: PropTypes.number,
  extraAvatarStyle: PropTypes.object,
  extraAvatarProps: PropTypes.object
}

export default AvatarGroup;