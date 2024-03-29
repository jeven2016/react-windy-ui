import React, { useCallback, useContext, useMemo } from 'react';
import clsx from 'clsx';
import { IconArrowRightBlack, IconHome } from '../icon';
import Checkbox from '../checkbox';
import { TreeContext } from '../common/Context';
import CollapsePanel from '../collapse/CollapsePanel';
import { convertToArray, isNil, preventEvent } from '../Utils';
import { CheckedStatus } from './TreeCommon';
import PropTypes from 'prop-types';

const TreeItem = React.forwardRef((props, ref) => {
  const {
    id,
    className = 'tree-item',
    extraClassName,
    label,
    children,
    icon,
    moreElements,
    ...otherProps
  } = props;
  const treeContext = useContext(TreeContext);

  //check the status of the checkbox
  const realStatus = treeContext.treeStatus.get(id);
  const showIndeterminateState = realStatus === CheckedStatus.indeterminate;
  const checked = realStatus === CheckedStatus.checked;

  // const treeStatus = treeContext.treeStatus;
  const treeData = treeContext.treeData;

  //check whether to asynchronously load  the children nodes
  const treeNodeMap = treeData.treeNodeMap;
  const isAsyncLoadItem = treeNodeMap.get(id).isAsyncLoad();

  const elems = useMemo(() => {
    return convertToArray(moreElements);
  }, [moreElements]);

  const clsName = clsx(className, extraClassName);

  const isSelected = treeContext.selectedItems.find((elem) => elem === id);
  const isExpanded = treeContext.expandedItems.find((elem) => 'all' === elem || elem === id);

  const isLeaf = useMemo(() => {
    if (isAsyncLoadItem) {
      return false;
    }
    return isNil(children) || React.Children.count(children) === 0;
  }, [isAsyncLoadItem, children]);

  const innerClsName = clsx('inner', {
    'whole-line': treeContext.highlightLine
  });

  const expandItem = useCallback(
    (evt) => {
      treeContext.expandItem && treeContext.expandItem(id, !isExpanded, evt);
    },
    [id, isExpanded, treeContext]
  );

  //check if the node is in loading
  const isAsyncLoading = useMemo(
    () => treeContext.showLoading && isAsyncLoadItem && treeContext.loadingIds.includes(id),
    [treeContext.showLoading, treeContext.loadingIds, isAsyncLoadItem, id]
  );

  const iconNode = useMemo(() => {
    let iconSpan;
    if (!isLeaf) {
      iconSpan = isAsyncLoading ? (
        <div className="icon-column">{treeContext.loader}</div>
      ) : (
        <span onClick={expandItem} className={`icon-column ${isExpanded ? 'expand' : ''}`}>
          {<IconArrowRightBlack />}
        </span>
      );
    } else {
      iconSpan = <span className={`icon-column empty`}>&nbsp;</span>;
    }

    return iconSpan;
  }, [isLeaf, isAsyncLoading, treeContext.loader, expandItem, isExpanded]);

  const getCheckbox = useCallback(() => {
    if (treeContext.checkable) {
      return (
        <div className="icon-extra-column">
          <Checkbox
            checked={checked}
            showIndeterminateState={showIndeterminateState}
            iconIndeterminateStyle={{ color: '#0ca0ff' }}
            onChange={(isChecked, e) => {
              preventEvent(e);
              treeContext.checkItem && treeContext.checkItem(id, isChecked, e);
            }}
          />
        </div>
      );
    }
    return null;
  }, [checked, id, showIndeterminateState, treeContext]);

  const clickItem = useCallback(
    (evt) => {
      //unselect this item if clicking again while it has been selected for multi select scenario
      const selected = !(treeContext.multiSelect && isSelected);
      treeContext.selectItem && treeContext.selectItem(id, evt, selected);
    },
    [id, isSelected, treeContext]
  );

  const getClickHandler = useCallback(() => {
    let spanClick = null;
    let divClick = null;
    if (treeContext.onlySelectLeaf && !isLeaf) {
      //if only the leaf node is selectable, to expand or collapse the non-leaf node
      spanClick = expandItem;
    } else if (treeContext.highlightLine) {
      divClick = clickItem;
    } else {
      spanClick = clickItem;
    }
    return { spanClick, divClick };
  }, [clickItem, expandItem, isLeaf, treeContext.highlightLine, treeContext.onlySelectLeaf]);

  const getTitle = () => {
    let { spanClick, divClick } = getClickHandler();

    return (
      <div className="title-info" onClick={divClick}>
        <span className={`label-info ${isSelected ? 'active' : ''}`} onClick={spanClick}>
          {label}
        </span>
      </div>
    );
  };

  return (
    <div className={clsName} {...otherProps} ref={ref}>
      <div className="tree-title">
        {treeContext.highlightLine && isSelected ? <div className="item-bg">&nbsp;</div> : null}

        <div className="title-row">
          <div className={innerClsName}>
            {iconNode}
            {getCheckbox()}
            {icon && (
              <span className="icon-column" onClick={getClickHandler().spanClick}>
                <IconHome />
              </span>
            )}
            {getTitle()}
            {elems.map((item, index) => (
              <div key={`more-${index}`} className="icon-column">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {!isNil(children) ? (
        <div className="tree-panel">
          <CollapsePanel collapse={!isExpanded}>{children}</CollapsePanel>
        </div>
      ) : null}
    </div>
  );
});

TreeItem.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  label: PropTypes.node,
  icon: PropTypes.node,
  moreElements: PropTypes.arrayOf(PropTypes.node)
};

export default TreeItem;
