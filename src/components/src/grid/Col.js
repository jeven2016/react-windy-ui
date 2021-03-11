import React, {useCallback, useContext, useMemo} from 'react';
import {inRange, isBlank, isInteger, isNil, nonNil} from '../Utils';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {RowContext} from "../common/Context";

const Col = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'col-base',
    col,
    gutter,
    xs, sm, md, lg, xl,
    xsOffset, smOffset, mdOffset, lgOffset, xlOffset,
    order,
    style,
    ...otherProps
  } = props;
  const {rowGutter} = useContext(RowContext);
  const realGutter = nonNil(gutter) ? gutter : rowGutter;

  [
    col,
    xs, sm, md, lg, xl, xsOffset,
    smOffset, mdOffset, lgOffset,
    xlOffset].forEach(value => {
    if (nonNil(value) && !inRange(value, 1, 13)) {
      throw new Error(
        'The value of col/xs/sm/md/lg/xl/xsOffset/smOffset/mdOffset'
        + '/lgOffset/xlOffset, should be in a integer range [1,12].');
    }
  });
  if (nonNil(order) && !isInteger(order)) {
    throw new Error('the order is invalid: ' + order);
  }

  const getClsName = useCallback((prefix, value) => {
    if (!isNil(value)) {
      return `${prefix}${value} `;
    }
    return '';
  }, []);

  let cls = getClsName('col-xs-', xs)
    + getClsName('col-sm-', sm)
    + getClsName('col-md-', md)
    + getClsName('col-lg-', lg)
    + getClsName('col-xl-', xl)
    + getClsName('offset-xs-', xsOffset)
    + getClsName('offset-sm-', smOffset)
    + getClsName('offset-md-', mdOffset)
    + getClsName('offset-lg-', lgOffset)
    + getClsName('offset-xl-', xlOffset)
    + getClsName('order-', order);

  const isBlankCls = isBlank(cls);
  if (!isNil(col)) {
    cls += isBlankCls ? `col-${col}` : `${cls} col-${col}`;
  }

  if (isBlank(cls)) {
    cls = 'col';
  }

  let clsName = clsx(extraClassName, className, {
    [cls]: cls,
  });

  const newSty = useMemo(() => {
    if (isNil(realGutter) || (realGutter.x === 0 && realGutter.y === 0)) {
      return style;
    }

    const paddingX = realGutter.x / 2;
    const paddingY = realGutter.y / 2;

    return {
      ...style,
      padding: `${paddingY}px ${paddingX}px`,
    };
  }, [realGutter, style]);

  return <div ref={ref} className={clsName}
              style={newSty} {...otherProps}/>;
});

Col.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  col: PropTypes.number,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  xsOffset: PropTypes.number,
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number,
  xlOffset: PropTypes.number,
  order: PropTypes.number,
  gutter: PropTypes.shape({x: PropTypes.number, y: PropTypes.number}),
};

export default Col;