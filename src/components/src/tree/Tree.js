import React, {useRef, useState, useMemo} from 'react';
import PropTypes from 'prop-types';
import TreeItem from './TreeItem';
import clsx from 'clsx';
import {TreeContext} from '../common/Context';
import {convertToArray, isNil} from '../Utils';
import {
  CheckedStatus,
  getNode, mapCheckedStatus,
  mergeChildren,
  parseChildren,
  RootId,
  updateChildrenStatus,
  updateParentsStatus,
} from './TreeCommon';
import Loader from '../Loader';
import useInternalState from "../common/useInternalState";
import useEventCallback from "../common/useEventCallback";
import {initStore} from "../common/Store";

const Tree = React.forwardRef((props, ref) => {
  const {
    showLoading = true,
    loadJsonData,
    loader = <Loader type="primary" size="small" active/>,
    jsonData,
    autoCheckLeafs = true,
    multiSelect = false,
    onlySelectLeaf = true,
    className = 'tree',
    extraClassName,
    checkable,
    defaultExpandedItems = [],
    expandedItems,
    defaultSelectedItems = [],
    selectedItems,
    defaultCheckedItems = [],
    checkedItems,
    highlightLine = false,
    children,
    onSelect,
    onCheck,
    onExpand,
    ...otherProps
  } = props;
  const customData = props.hasOwnProperty('jsonData');
  const [loadingIds, setLoadingIds] = useState([]);

  const clsName = clsx(className, extraClassName);

  const {
    state: currentSelectedItems,
    setState: setSelectedItems,
    customized: isExternalControl,
  } = useInternalState({
    props,
    stateName: 'selectedItems',
    defaultState: convertToArray(defaultSelectedItems),
    state: convertToArray(selectedItems),
  });

  const {
    state: currentExpandedItems,
    setState: setExpendedItems,
    customized: isExpendControl,
  } = useInternalState({
    props,
    stateName: 'expandedItems',
    defaultState: convertToArray(defaultExpandedItems),
    state: convertToArray(expandedItems),
  });

  const {
    state: currentCheckedItems,
    customized: customCheck,
  } = useInternalState({
    props,
    stateName: 'checkedItems',
    defaultState: convertToArray(defaultCheckedItems),
    state: convertToArray(checkedItems),
  });

  const initTreeData = useMemo(() => parseChildren(customData,
    children, jsonData), [children, jsonData, customData]);

  //init a map to record the items should be marked as checked for customized items
  const initCustomChkMap = useMemo(() => {
    if (!checkable || currentCheckedItems.length <= 0) {
      return new Map();
    }

    const map = new Map();
    //update the map by checkedItems
    mapCheckedStatus({
      ids: currentCheckedItems,
      treeData: initTreeData,
      autoCheckLeafs,
      map,
      checked: CheckedStatus.checked
    });
    return map;
  }, [autoCheckLeafs, checkable, currentCheckedItems, initTreeData]);

  //init a internal store
  const [store] = useState(() => initStore({
    // treeData: initTreeData,
    statusMap: initCustomChkMap
  }));

  /*
   * select handler
   */
  const selectHandler = useEventCallback((id, e, selected) => {
    let selectedIds;

    if (selected) {
      selectedIds = multiSelect ? [
        ...currentSelectedItems.filter(i => i !== id), id] : [id];
    } else {
      selectedIds = [...currentSelectedItems.filter(i => i !== id)];
    }

    if (!isExternalControl) {
      setSelectedItems(selectedIds);
    }
    onSelect && onSelect(multiSelect ? selectedIds : selectedIds[0], e);
  });

  const isChecked = useEventCallback((id) => {
    const checkedStatus = store.getState().statusMap.get(id);
    if (!isNil(checkedStatus)) {
      return checkedStatus === CheckedStatus.checked;
    }
    return false;
  });

  const expandHandler = async (id, expand, evt) => {
    if (isExpendControl) {
      onExpand && onExpand(id, expand, evt);
      return;
    }
    let expandedIds;
    if (expand) {
      let parentNode = initTreeData.treeNodeMap.get(id);
      if (parentNode.isAsyncLoad() && loadJsonData) {
        //Asynchronous loading the data and merge it with the existing json data
        const newIds = [...loadingIds, id];
        setLoadingIds(newIds);

        const data = await loadJsonData(id, evt);
        setLoadingIds(prevState => [...prevState.filter(val => val !== id)]);//clear loading status
        const newJsonData = {...jsonData};

        mergeChildren(newJsonData, data, id);
        const newTreeData = parseChildren(true, children, newJsonData);
        store.setState({treeData: newTreeData});
        // setTreeData(newTreeData);

        if (isChecked(id)) {
          //if parent node is checked all children should be checked as well
          let itemStatusMap = new Map(store.getState().statusMap);
          parentNode = newTreeData.treeNodeMap.get(id);
          updateChildrenStatus(itemStatusMap, parentNode,
            CheckedStatus.checked);
          store.setState({statusMap: itemStatusMap});
        }
      }

      expandedIds = [...currentExpandedItems, id];
    } else {
      expandedIds = [...currentExpandedItems.filter(elem => elem !== id)];
    }
    onExpand && onExpand(expandedIds);

    if (!isExpendControl) {
      setExpendedItems(expandedIds);
    }
  };

  const checkHandler = useEventCallback((id, checked, e) => {
    const map = new Map(customCheck ? initCustomChkMap : store.getState().statusMap);
    mapCheckedStatus({
      ids: id,
      treeData: initTreeData,
      autoCheckLeafs,
      map,
      checked: checked ? CheckedStatus.checked : CheckedStatus.unchecked
    });

    if (!customCheck) {
      //update the store and refresh the tree
      store.setState({statusMap: map});
    }

    const checkedIds = [];
    for (let [key, value] of map.entries()) {
      if (key !== RootId && value === CheckedStatus.checked) {
        checkedIds.push(key);
      }
    }
    onCheck && onCheck(checkedIds);
  });

  const ctx = {
    store,
    multiSelect,
    showLoading,
    loadJsonData,
    loader,
    loadingIds,
    onlySelectLeaf,
    checkable,
    selectedItems: currentSelectedItems,
    expandedItems: currentExpandedItems,
    checkedItems: currentCheckedItems,
    selectItem: selectHandler,
    expandItem: expandHandler,
    checkItem: checkHandler,
    statusMap: initCustomChkMap,
    treeData: initTreeData,
    highlightLine,
  };

  return <TreeContext.Provider value={ctx}>
    <div className={clsName} {...otherProps} ref={ref}>
      {customData ? getNode(initTreeData) : children}
    </div>
  </TreeContext.Provider>;
});

Tree.propTypes = {
  showLoading: PropTypes.bool,
  loadJsonData: PropTypes.func,
  loader: PropTypes.node,
  jsonData: PropTypes.object,
  autoCheckLeafs: PropTypes.bool,
  multiSelect: PropTypes.bool,
  onlySelectLeaf: PropTypes.bool,
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  checkable: PropTypes.bool,
  defaultExpandedItems: PropTypes.any,
  expandedItems: PropTypes.any,
  defaultSelectedItems: PropTypes.any,
  selectedItems: PropTypes.any,
  defaultCheckedItems: PropTypes.any,
  checkedItems: PropTypes.any,
  highlightLine: PropTypes.bool,
  onSelect: PropTypes.func,
  onCheck: PropTypes.func,
  onExpand: PropTypes.func,
};

Tree.TreeItem = TreeItem;

export default Tree;