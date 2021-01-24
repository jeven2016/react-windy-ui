import React, {useMemo} from "react";
import clsx from "clsx";
import {AlignItemsType, Direction} from "../common/Constants";
import {nonNil} from "../Utils";

const defaultX = 8;
const defaultY = 16;

const Space = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'space-row',
    align = 'center',
    gutter,
    wrap = false,
    children,
    direction = Direction.horizontal,
    ...rest
  } = props;
  const isVertical = direction === Direction.vertical;

  const alignCls = AlignItemsType[align];

  const gutterX = useMemo(() => {
    const x = gutter?.x;
    if (nonNil(x) || isVertical) {
      return x;
    }
    return defaultX;
  }, [gutter, isVertical]);

  const gutterY = useMemo(() => {
    const y = gutter?.y;
    if (nonNil(y) || !isVertical) {
      return y;
    }
    return defaultY
  }, [gutter, isVertical]);


  const count = useMemo(() => {
    return React.Children.count(children);
  }, [children]);

  const newChd = useMemo(() => {
    return React.Children.map(children, (chd, i) => {
      const sty = {};
      const notLastNode = i + 1 < count;
      if (nonNil(gutterX) && notLastNode) {
        //not the last node
        sty.marginRight = `${gutterX}px`;
      }

      if (nonNil(gutterY)) {
        if (notLastNode || !isVertical) {
          sty.marginBottom = `${gutterY}px`;
        }
      }
      return <div className="space-item" style={sty}>
        {chd}
      </div>
    });
  }, [children, count, gutterX, gutterY, isVertical]);

  const clsName = clsx(extraClassName, className, alignCls, {
    column: isVertical,
    wrap,
  });

  return <div className={clsName} {...rest}>
    {newChd}
  </div>
});

export default Space;