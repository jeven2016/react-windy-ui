import React from 'react';
import {adjustItems, AlignItemsType, JustifyContentType} from '../common/Constants';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {RowContext} from "../common/Context";
import {isNumber, nonNil} from "../Utils";
import Col from "./Col";

const DefaultGutter = {
  x: 0,
  y: 0
}

const Row = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'row',
    gutter = DefaultGutter, //todo
    justify = 'start',
    align = 'start',
    style,
    children,
    ...otherProps
  } = props;

  const gutterX = gutter?.x;
  const gutterY = gutter?.y;
  const validGutter = {
    x: nonNil(gutterX) && isNumber(gutterX) ? gutterX : DefaultGutter.x,
    y: nonNil(gutterY) && isNumber(gutterY) ? gutterY : DefaultGutter.y
  }

  const justifyCls = adjustItems(justify, align);
  const clsName = clsx(extraClassName, className, justifyCls);

  const rowStyle = validGutter.x === 0 && validGutter.y === 0 ? null : {
    margin: `-${validGutter.y / 2}px -${validGutter.x / 2}px ${validGutter.y
    / 2}px`
  };

  return <RowContext.Provider value={gutter}>
    <div ref={ref} style={{...style, ...rowStyle}}
         className={clsName} {...otherProps}>
      {
        React.Children.map(children, chd => {
          if (chd && chd?.type === Col) {
            return React.cloneElement(chd, {gutter: validGutter});
          }
          return chd;
        })
      }
    </div>
  </RowContext.Provider>;
});

Row.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  justify: PropTypes.oneOf(Object.keys(JustifyContentType)),
  align: PropTypes.oneOf(Object.keys(AlignItemsType)),
  gutter: PropTypes.shape({x: PropTypes.number, y: PropTypes.number})
};
export default Row;