import React, { useMemo } from 'react';
import clsx from 'clsx';
import { adjustItems, AlignItemsType, Direction, JustifyContentType } from '../common/Constants';
import { nonNil } from '../Utils';
import PropTypes from 'prop-types';

const defaultX = 8;
const defaultY = 16;

const Space = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'space-row',
    block = false,
    blockItem = false,
    align = 'center',
    justifyItem = 'center',
    alignItem = 'center',
    gutter,
    wrap = false,
    children,
    direction = Direction.horizontal,
    ...rest
  } = props;
  const isVertical = direction === Direction.vertical;

  const alignCls = adjustItems(null, align);

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
    return defaultY;
  }, [gutter, isVertical]);

  const count = useMemo(() => {
    return React.Children.count(children);
  }, [children]);

  const newChd = useMemo(() => {
    const itemClsName = clsx(
      'space-item',
      { block: blockItem },
      adjustItems(justifyItem, alignItem)
    );
    return React.Children.map(children, (chd, i) => {
      const sty = {};
      const notLastNode = i + 1 < count;

      if (!blockItem && !isVertical) {
        if (nonNil(gutterX) && notLastNode) {
          //not the last node
          sty.marginRight = `${gutterX}px`;
        }
      }

      if (nonNil(gutterY)) {
        if (notLastNode || !isVertical) {
          sty.marginBottom = `${gutterY}px`;
        }
      }
      return (
        <div className={itemClsName} style={sty}>
          {chd}
        </div>
      );
    });
  }, [alignItem, blockItem, children, count, gutterX, gutterY, isVertical, justifyItem]);

  const clsName = clsx(extraClassName, className, alignCls, {
    column: isVertical,
    wrap,
    block
  });

  return (
    <div className={clsName} {...rest}>
      {newChd}
    </div>
  );
});

Space.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  align: PropTypes.oneOf(Object.keys(AlignItemsType)),
  justifyItem: PropTypes.oneOf(Object.keys(JustifyContentType)),
  alignItem: PropTypes.oneOf(Object.keys(AlignItemsType)),
  gutter: PropTypes.shape({ x: PropTypes.number, y: PropTypes.number }),
  wrap: PropTypes.bool,
  direction: PropTypes.oneOf(Object.keys(Direction)),
  block: PropTypes.bool,
  blockItem: PropTypes.bool
};
export default Space;
