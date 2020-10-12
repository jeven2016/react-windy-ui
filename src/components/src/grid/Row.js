import React from 'react';
import {AlignItemsType, JustifyContentType} from '../common/Constants';
import useElement from '../common/useElement';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Row = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'row',
    justify = JustifyContentType.start,
    align = AlignItemsType.start,
    ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className);
  let justifyCls = JustifyContentType[justify];
  let alignCls = AlignItemsType[align];
  return useElement({...otherProps}, ref, clsName, {
    [justifyCls]: justifyCls,
    [alignCls]: alignCls,
  });
});

Row.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  justify: PropTypes.oneOf(Object.keys(JustifyContentType)),
  alignCls: PropTypes.oneOf(Object.keys(AlignItemsType)),
};
export default Row;