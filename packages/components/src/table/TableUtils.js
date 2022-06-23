import { isNil } from '../Utils';
import { useCallback } from 'react';
import clsx from 'clsx';

export const CellFixedType = {
  right: 'right',
  left: 'left'
};

export const updatePosition = (th, siblingFunc, setPostion) => {
  let position = 0;
  let preTh = siblingFunc(th);
  const tagName = th.tagName;
  while (!isNil(preTh)) {
    //for thd the scrollbar is native, the position cannot be calculated width scroll-th
    if (preTh.className.includes('fixed-cell') || preTh.className.includes('scroll-th')) {
      position += preTh.offsetWidth;
    }
    preTh = siblingFunc(preTh);
  }
  setPostion(position);
};

export const updateStickPosition = (
  cellRef,
  hasSiblingFixedRef,
  hasPreSiblingFixedRef,
  isLeftFixed,
  isRightFixed,
  setStyle
) => {
  const th = cellRef.current;
  hasSiblingFixedRef.current =
    !isNil(th.nextElementSibling) && th.nextElementSibling.className.includes('fixed-cell');

  hasPreSiblingFixedRef.current =
    !isNil(th.previousElementSibling) && th.previousElementSibling.className.includes('fixed-cell');

  if (isLeftFixed) {
    updatePosition(
      th,
      (thDomNode) => thDomNode.previousElementSibling,
      (position) => setStyle({ left: position })
    );
  }

  if (isRightFixed) {
    updatePosition(
      th,
      (thDomNode) => thDomNode.nextElementSibling,
      (position) => setStyle({ right: position })
    );
  }
};

export const updateBoxShadow = (
  showBox,
  isLeftFixed,
  hasSiblingFixedRef,
  isRightFixed,
  hasPreSiblingFixedRef,
  setBox,
  isStartPostion,
  isEndPostion
) => {
  if (!showBox) {
    const hasLeftBox = isLeftFixed && !isStartPostion && !hasSiblingFixedRef.current;

    const hasRightBox = isRightFixed && !isEndPostion && !hasPreSiblingFixedRef.current;

    setBox(hasLeftBox || hasRightBox);
  } else {
    const noLeftBox = isLeftFixed && isStartPostion;
    const noRightBox = isRightFixed && isEndPostion;

    if (noLeftBox || noRightBox) {
      setBox(false);
    }
  }
};

export const checkScrollBar = (scrollHeadRef) => {
  const scrollWidth = scrollHeadRef.current?.scrollWidth;
  const offsetWidth = scrollHeadRef.current?.offsetWidth;
  const scrollLeft = scrollHeadRef.current?.scrollLeft;

  //fix bug: the above variables may be undefined while some cells are need to be 'fixed'
  if (isNil(scrollWidth) || isNil(offsetWidth) || isNil(scrollLeft)) {
    return {
      isStartPostion: true,
      isEndPostion: false
    };
  }
  const isStartPostion = scrollLeft <= 0;
  const isEndPostion = scrollWidth <= offsetWidth + scrollLeft;

  return {
    isStartPostion,
    isEndPostion
  };
};

export const getFixedCellCls = (cellFixed, showBox) => {
  return clsx({
    'fixed-cell': !isNil(cellFixed),
    right: !isNil(cellFixed) && cellFixed === CellFixedType.right,
    left: !isNil(cellFixed) && cellFixed === CellFixedType.left,
    'with-cell-box': showBox
  });
};

export const SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

export const getNdoeDepth = (initDepth, cell) => {
  if (isNil(cell.children)) {
    return initDepth;
  }
  let maxDepth = initDepth;
  cell.children.forEach((chd) => {
    const chdDepth = getNdoeDepth(initDepth + 1, chd);
    maxDepth = maxDepth > chdDepth ? maxDepth : chdDepth;
  });
  return maxDepth;
};

export const getLeavesCount = (cell) => {
  if (isNil(cell.children)) {
    return 1;
  }

  let leavesCount = 0;
  cell.children.forEach((chd) => {
    leavesCount += getLeavesCount(chd);
  });

  return leavesCount;
};

export const filterLeaves = (cellsArray, leaves) => {
  if (!leaves) {
    leaves = [];
  }

  cellsArray.forEach((cell) => {
    if (isNil(cell.children)) {
      leaves.push(cell);
    } else {
      filterLeaves(cell.children, leaves);
    }
  });

  return leaves;
};

/*
 * level: {
 *    nodes: [ {head: headText, setSpanType: row/col} ]
 *    maxDepth: 2
 * }
 */
export const traverse = (cellsArray, map, index) => {
  let level = map.get(index);
  if (isNil(level)) {
    level = { nodes: [], maxDepth: 1 };
    map.set(index, level);
  }

  for (let cell of cellsArray) {
    let cellInfo = { ...cell, head: cell.head };
    level.nodes.push(cellInfo);
    const chd = cell.children;
    if (isNil(chd)) {
      cellInfo.isTitle = false;
      cellInfo.setSpanType = 'row';
    } else {
      cellInfo.isTitle = true;
      cellInfo.setSpanType = 'col';
      cellInfo.leavesCount = getLeavesCount(cell);
      const depth = getNdoeDepth(1, cell);
      level.maxDepth = depth > level.maxDepth ? depth : level.maxDepth;
      traverse(chd, map, ++index);
    }
  }
};
