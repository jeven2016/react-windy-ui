import React from 'react';
import useFixedComponent from './useFixedComponent';
import clsx from 'clsx';
import * as PropTypes from 'prop-types';
import Element from '../common/Element';

export const BodyCell = React.forwardRef((props, ref) => {
  const { store, cell, content, tdKey, scrollHeadRef } = props;

  const { getFixedCellCls, style, multiRef, showBox } = useFixedComponent({
    ref,
    cell,
    store,
    scrollHeadRef
  });

  const clsName = clsx(getFixedCellCls(cell.fixed, showBox), {
    ellipsis: cell.autoEllipsis
  });

  const title = cell.autoEllipsis ? content : null;
  return (
    <>
      <td className={clsName} ref={multiRef} title={title} style={style} key={tdKey}>
        {content}
      </td>
    </>
  );
});

BodyCell.propTypes = {
  store: PropTypes.object,
  cell: PropTypes.object,
  content: PropTypes.node,
  tdKey: PropTypes.any,
  scrollHeadRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ])
};

export default BodyCell;
