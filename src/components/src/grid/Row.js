import React from 'react';
import {AlignItemsType, JustifyContentType} from '../common/Constants';
import useElement from '../common/useElement';

const Row = React.forwardRef((props, ref) => {
  const {
    justify = JustifyContentType.start
    , align = AlignItemsType.start,
    ...otherProps
  } = props;
  let justifyCls = JustifyContentType[justify];
  let alignCls = AlignItemsType[align];
  return useElement({...otherProps}, ref, 'row', {
    [justifyCls]: justifyCls,
    [alignCls]: alignCls,
  });
});

export default Row;