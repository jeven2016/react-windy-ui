import React, {useContext} from 'react';
import {AlignItemsType, JustifyContentType} from '../common/Constants';
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
    justify = JustifyContentType.start,
    align = AlignItemsType.start,
    style,
    children,
    ...otherProps
  } = props;
  const ctx = useContext(RowContext);

  const gutterX = gutter?.x;
  const gutterY = gutter?.y;
  const validGutter = {
    x: nonNil(gutterX) && isNumber(gutterX) ? gutterX : DefaultGutter.x,
    y: nonNil(gutterY) && isNumber(gutterY) ? gutterY : DefaultGutter.y
  }
  let justifyCls = JustifyContentType[justify];
  let alignCls = AlignItemsType[align];
  const clsName = clsx(extraClassName, className, {
    [justifyCls]: justifyCls,
    [alignCls]: alignCls,
  });

  const rowStyle = gutterX === 0 && gutterY === 0 ? null : {
    margin: `-${gutterY / 2}px -${gutterX / 2}px ${gutterY / 2}px`
  };

  return <div ref={ref} style={{...style, ...rowStyle}}
              className={clsName} {...otherProps}>
    {
      React.Children.map(children, chd => {
        if (chd && chd?.type === Col) {
          return React.cloneElement(chd, {gutter: validGutter});
        }
        return chd;
      })
    }
  </div>;
});

Row.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  justify: PropTypes.oneOf(Object.keys(JustifyContentType)),
  alignCls: PropTypes.oneOf(Object.keys(AlignItemsType)),
  gutter: PropTypes.shape({x: PropTypes.number, y: PropTypes.number})
};
export default Row;