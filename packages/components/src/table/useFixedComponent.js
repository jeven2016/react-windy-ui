import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import useMultipleRefs from '../common/UseMultipleRefs';
import { isNil } from '../Utils';
import {
  CellFixedType,
  checkScrollBar,
  getFixedCellCls,
  updateBoxShadow,
  updateStickPosition
} from './TableUtils';

const useFixedComponent = ({ ref, cell, store, scrollHeadRef }) => {
  const cellRef = useRef(null);
  const multiRef = useMultipleRefs(cellRef, ref);

  const [style, setStyle] = useState(null);
  const [showBox, setBox] = useState(false);
  const hasSiblingFixedRef = useRef(false);
  const hasPreSiblingFixedRef = useRef(false);

  const isLeftFixed = useMemo(
    () => !isNil(cell.fixed) && cell.fixed === CellFixedType.left,
    [cell.fixed]
  );

  const isRightFixed = useMemo(
    () => !isNil(cell.fixed) && cell.fixed === CellFixedType.right,
    [cell.fixed]
  );

  const updateBox = useCallback(
    (isStartPostion, isEndPostion) => {
      updateBoxShadow(
        showBox,
        isLeftFixed,
        hasSiblingFixedRef,
        isRightFixed,
        hasPreSiblingFixedRef,
        setBox,
        isStartPostion,
        isEndPostion
      );
    },
    [isLeftFixed, isRightFixed, showBox]
  );

  useEffect(() => {
    if (isNil(style)) {
      updateStickPosition(
        cellRef,
        hasSiblingFixedRef,
        hasPreSiblingFixedRef,
        isLeftFixed,
        isRightFixed,
        setStyle
      );
    }

    let listener;
    if (isLeftFixed || isRightFixed) {
      //update the box shadow for fixed cells
      const result = checkScrollBar(scrollHeadRef);
      updateBox(result.isStartPostion, result.isEndPostion);

      listener = ({ isStartPostion, isEndPostion }) => {
        updateBox(isStartPostion, isEndPostion);
      };
      store.attach(listener);
    }
    return () => store.detach(listener);
  }, [
    cell,
    cell.fixed,
    isLeftFixed,
    isRightFixed,
    scrollHeadRef,
    showBox,
    store,
    style,
    updateBox
  ]);

  return {
    getFixedCellCls,
    multiRef,
    style,
    showBox
  };
};

export default useFixedComponent;
