import React, {useMemo, useState} from 'react';
import PropTypes from 'prop-types';
import TreeItem from './TreeItem';
import clsx from 'clsx';
import {TreeContext} from '../common/Context';
import {convertToArray, isNil} from '../Utils';
import {
  CheckedStatus,
  getNode,
  mapCheckedStatus,
  mergeChildren,
  parseChildren,
  RootId,
  updateChildrenStatus,
} from './TreeCommon';
import Loader from '../Loader';
import useInternalState from "../common/useInternalState";
import useEventCallback from "../common/useEventCallback";

const Tree = React.forwardRef((props, ref) => {
  const {
    showLoading = true,
    loadJsonData,
    loader = <Loader type="primary" size="small" active/>,
    jsonData,
    autoCheckLeaves = true,
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

  const [currentSelectedItems, setSelectedItems] = useInternalState({
    props,
    stateName: 'selectedItems',
    defaultState: convertToArray(defaultSelectedItems),
    state: convertToArray(selectedItems),
  });

  const [currentExpandedItems, setExpendedItems, isExpendControl] = useInternalState({
    props,
    stateName: 'expandedItems',
    defaultState: convertToArray(defaultExpandedItems),
    state: convertToArray(expandedItems),
  });

  const [currentCheckedItems, set, customCheck] = useInternalState({
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
      autoCheckLeaves,
      map,
      checked: CheckedStatus.checked
    });
    return map;
  }, [autoCheckLeaves, checkable, currentCheckedItems, initTreeData]);


  const [treeConfig, setTreeConfig] = useState(initTreeData);
  const [treeStatus, setTreeStatus] = useState(initCustomChkMap);


  //init a internal store
  // const [store] = useState(() => initStore({
  //   treeData: initTreeData, //It represents a full tree
  //   statusMap: initCustomChkMap
  // }));

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

    setSelectedItems(selectedIds);
    onSelect && onSelect(multiSelect ? selectedIds : selectedIds[0], e);
  });

  const isChecked = useEventCallback((id) => {
    const checkedStatus = treeStatus.get(id);
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
        setTreeConfig(newTreeData);

        if (isChecked(id)) {
          //if parent node is checked all children should be checked as well
          let itemStatusMap = new Map(treeStatus);
          parentNode = newTreeData.treeNodeMap.get(id);
          updateChildrenStatus(itemStatusMap, parentNode,
            CheckedStatus.checked);
          setTreeStatus(itemStatusMap);
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
    const map = new Map(treeStatus);
    mapCheckedStatus({
      ids: id,
      treeData: treeConfig,
      autoCheckLeaves,
      map,
      checked: checked ? CheckedStatus.checked : CheckedStatus.unchecked
    });

    if (!customCheck) {
      //update the store and refresh the tree
      setTreeStatus(map)
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
    multiSelect,
    showLoading,
    loadJsonData,
    loader,
    loadingIds,
    onlySelectLeaf,
    checkable,
    customCheck,
    selectedItems: currentSelectedItems,
    expandedItems: currentExpandedItems,
    checkedItems: currentCheckedItems,
    selectItem: selectHandler,
    expandItem: expandHandler,
    checkItem: checkHandler,
    treeStatus,
    treeData: treeConfig,
    highlightLine,
  };

  console.log(treeStatus)
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
  autoCheckLeaves: PropTypes.bool,
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