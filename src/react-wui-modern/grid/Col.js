import React from 'react';
import {inRange, isInteger, isNil} from '../Utils';
import Element from '../common/Element';
import clsx from 'clsx';

const Col = React.forwardRef((props, ref) => {
  const {
    className,
    xs, sm, md, lg, xl,
    xsOffset, smOffset, mdOffset, lgOffset, xlOffset,
    order,
    ...otherProps
  } = props;

  [
    xs, sm, md, lg, xl, xsOffset,
    smOffset, mdOffset, lgOffset,
    xlOffset].forEach(value => {
    if (!isNil(value) && !inRange(value, 1, 13)) {
      throw new Error(
          'The value of xs/sm/md/lg/xl/xsOffset/smOffset/mdOffset'
          + '/lgOffset/xlOffset, should be in a integer range [1,12].');
    }
  });
  if (!isNil(order) && !isInteger(order)) {
    throw new Error('the order is invalid: ' + order);
  }

  const getClsName = (prefix, value) => {
    if (!isNil(value)) {
      return `${prefix}${value} `;
    }
    return '';
  };

  let cls = getClsName('col-', xs)
      + getClsName('col-sm-', sm)
      + getClsName('col-md-', md)
      + getClsName('col-lg-', lg)
      + getClsName('col-xl-', xl)
      + getClsName('offset-', xsOffset)
      + getClsName('offset-sm-', smOffset)
      + getClsName('offset-md-', mdOffset)
      + getClsName('offset-lg-', lgOffset)
      + getClsName('offset-xl-', xlOffset)
      + getClsName('order-', order);

  let clsName = clsx(className, {[cls]: cls});

  return <Element ref={ref} className={clsName} {...otherProps}/>;
});
export default Col;