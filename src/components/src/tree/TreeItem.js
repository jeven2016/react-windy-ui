import React, {useCallback, useContext, useMemo} from 'react';
import clsx from 'clsx';
import {IconArrowRightBlack} from '../Icons';
import Checkbox from '../Checkbox';
import {TreeContext} from '../common/Context';
import CollapsePanel from '../collapse/CollapsePanel';
import {isNil} from '../Utils';
import {CheckedStatus} from './TreeCommon';
import {preventEvent} from '../event';

const TreeItem = React.forwardRef((props, ref) => {
  const {
    id,
    className,
    extraClassName,
    iconPosition,
    selectable,
    label,
    children,
    ...otherProps
  } = props;
  const treeContext = useContext(TreeContext);
  const statusMap = treeContext.statusMap;

  //check whether to asynchronously load  the children nodes
  const treeNodeMap = treeContext.treeData.treeNodeMap;
  const isAsyncLoadItem = treeNodeMap.get(id).isAsyncLoad();

  //check the status of the checkbox
  var status = statusMap.get(id);
  const showIndeterminateState = !isNil(status) && status ===
      CheckedStatus.indeterminate;
  const checked = !isNil(status) && status === CheckedStatus.checked;

  const clsName = clsx(className, extraClassName);

  const isSelected = treeContext.selectedItems.find(elem => elem === id);
  const isExpanded = treeContext.expandedItems.find(
      elem => 'all' === elem || elem === id);
  const isLeaf = useMemo(() => {
    if (isAsyncLoadItem) {
      return false;
    }
    return isNil(children) || React.Children.count(children) === 0;
  }, [isAsyncLoadItem, children]);

  const innerClsName = clsx('inner', `${iconPosition}-icon-column`, {
    'whole-line': treeContext.highlightLine,
  });

  const expandItem = useCallback((evt) => {
    treeContext.expandItem && treeContext.expandItem(id, !isExpanded, evt);
  },[id, isExpanded, treeContext]);

  //check if the node is in loading
  const isAsyncLoading = useMemo(() =>
      treeContext.showLoading && isAsyncLoadItem &&
      treeContext.loadingIds.includes(id)
      , [treeContext.showLoading, treeContext.loadingIds, isAsyncLoadItem, id]);

  const iconNode = useMemo(() => {
    let iconSpan;
    if (!isLeaf) {
      iconSpan = isAsyncLoading ? <div
              className="icon-column">{treeContext.loader}</div>
          : <span onClick={expandItem}
                  className={`icon-column ${isExpanded
                      ? 'expand'
                      : ''
                  }`}>{
            <IconArrowRightBlack/>}</span>;
    } else {
      iconSpan = <span className={`icon-column empty`}>&nbsp;</span>;
    }

    return iconSpan;
  }, [isLeaf, isAsyncLoading, treeContext.loader, expandItem, isExpanded]);

  const getCheckbox = () => {
    if (treeContext.checkable) {
      return <div className="icon-extra-column">
        <Checkbox checked={checked}
                  showIndeterminateState={showIndeterminateState}
                  iconIndeterminateStyle={{color: '#0ca0ff'}}
                  onChange={(isChecked, e) => {
                    treeContext.checkItem &&
                    treeContext.checkItem(id, isChecked, e);
                    preventEvent(e);
                  }}/>
      </div>;
    }
    return null;
  };

  const clickItem = (evt) => {
    treeContext.selectItem && treeContext.selectItem(id, evt);
  };

  const getTitle = () => {
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

    return <div className="title-info" onClick={divClick}>
      <span className={`label-info ${!treeContext.highlightLine && isSelected
          ? 'active'
          : ''}`} onClick={spanClick}>{label}</span>
    </div>;
  };

  return <div className={clsName} {...otherProps}>
    <div className="tree-title">
      {
        treeContext.highlightLine && isSelected ?
            <div className="item-bg">&nbsp;</div> : null
      }

      <div className="title-row">
        <div className={innerClsName}>
          {iconNode}
          {getCheckbox()}
          {getTitle()}
        </div>
      </div>
    </div>

    {
      !isNil(children) ? <div className="tree-panel">
            <CollapsePanel collapse={!isExpanded}>
              {children}
            </CollapsePanel>
          </div>
          : null
    }
  </div>;
});

TreeItem.defaultProps = {
  className: 'tree-item',
  iconPosition: 'left',
  selectable: true,
};

export default TreeItem;