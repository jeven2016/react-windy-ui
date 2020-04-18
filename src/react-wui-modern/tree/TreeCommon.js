import React from 'react';
import {convertToArray, invoke, isArray, isNil} from '../Utils';
import TreeItem from './TreeItem';

export const RootId = '$$root$$';

export const CheckedStatus = {
  indeterminate: 0,
  checked: 1,
  unchecked: 2,
};

export const updateParentsStatus = (map, parent, status) => {
  if (!parent) {
    return;
  }

  //update the parent nodes' status
  let allChd = parent.getChildren();
  if (status === CheckedStatus.checked) {
    //1. if all sibling nodes checked the parent node should be checked
    //2. if any sibling nodes unchecked the parent node should be indeterminate
    const otherChdChecked = allChd.every(chd => {
      let checkedNode = map.get(chd.getId());
      if (isNil(checkedNode)) {
        return false; // none checked
      }
      return checkedNode === CheckedStatus.checked;

    });

    map.set(parent.getId(),
        otherChdChecked ? status : CheckedStatus.indeterminate);
  } else {
    //1. if any sibling nodes checked the parent node should be indeterminate
    //2. if all sibling nodes unchecked the parent node should be unchecked
    const otherChdUnChecked = allChd.filter(chd => chd.getId()).
        every(chd => {
          let checkedNode = map.get(chd.getId());
          if (isNil(checkedNode)) {
            return true; // none checked
          }
          return checkedNode === CheckedStatus.unchecked;
        });

    map.set(parent.getId(),
        otherChdUnChecked ? status : CheckedStatus.indeterminate);
  }

  updateParentsStatus(map, parent.getParent(), status);
};

export const updateChildrenStatus = (map, node, status) => {
  const chdNodes = node.getChildren();
  chdNodes.forEach(n => {
    map.set(n.getId(), status);
    updateChildrenStatus(map, n, status);
  });
};

function parseChild(child, nodes, chdNode, providedJsonData) {
  let id = providedJsonData ? child.id : child.props['id'];
  if (isNil(id)) {
    throw new Error('The tree items should have \'id\' set.');
    return;
  }

  let isLeaf;
  if (providedJsonData) {
    isLeaf = child.hasOwnProperty('isLeaf') ? child.isLeaf : convertToArray(
        child.children).length === 0;
  } else {
    isLeaf = React.Children.count(child.props.children) === 0;
  }

  nodes.push({
    id: id,
    isLeaf: isLeaf,
    label: providedJsonData ? child.label : child.props['label'],
    parentNode: chdNode,
    children: providedJsonData ? child.children : child.props.children,
    isRoot: false,
  });
}

export const mergeChildren = (jsonData, partialData, id) => {
  const nodeId = jsonData.id;
  if (!id) {
    return;
  }
  if (id === nodeId) {
    jsonData.children = convertToArray(partialData);
    return;
  }

  const chdren = jsonData.children;
  if (chdren && isArray(chdren) && chdren.length > 0) {
    chdren.forEach(child => {
      mergeChildren(child, partialData, id);
    });
  }
};

export const parseChildren = (providedJsonData, children, jsonData) => {
  var newChildren = providedJsonData ? jsonData : children;
  let root = {
    id: RootId,
    label: null,
    isLeaf: false,
    children: [newChildren], //react children
    parentNode: null, //TreeNode
    isRoot: true,
  };
  root.rootNode = new TreeNode(root.id, root.parentNode);
  var treeNodeMap = new Map(); //key: id, value: TreeNode

  let nodes = [root];
  let i = 0;
  while (nodes.length > 0) {
    if (i++ > 10000) {
      throw new Error('too many loops take to parse the whole tree.');
    }
    let node = nodes.shift();
    if (isNil(node)) {
      continue;
    }

    let chdNode = node.isRoot ? node.rootNode :
        new TreeNode(node.id, node.parentNode);
    treeNodeMap.set(node.id, chdNode);

    if (!isNil(node.parentNode)) {
      node.parentNode.addChild(chdNode);
    }

    if (isNil(node.children) || node.children.length === 0) {
      //if no children set and mark it as non-leaf node
      const isAsyncLoad = !node.isLeaf;
      chdNode.setParam(
          {isLeaf: !isAsyncLoad, asyncLoad: isAsyncLoad, label: node.label});
    } else {
      chdNode.setParam({isLeaf: false, label: node.label});
      if (providedJsonData) {
        node.children.forEach(
            (child) => parseChild(child, nodes, chdNode, providedJsonData));
      } else {
        React.Children.forEach(node.children,
            (child) => parseChild(child, nodes, chdNode, providedJsonData));
      }
    }
  }

  return {
    rootNode: root.rootNode,
    treeNodeMap,
  };

};

export const getNode = (data) => {
  if (!data) {
    return null;
  }
  const root = data.rootNode;
  const children = root.children;
  return children.map(chd => {
    return chd.toComponent();
  });

};

export class TreeNode {

  constructor(
      id, parent, children,
      param = {isLeaf: false, label: null, asyncLoad: false}) {
    let validChildren = !isNil(children);
    if (validChildren && !Array.isArray(children)) {
      throw new Error('the children should be a valid array.');
    }
    this.parent = parent;
    this.children = validChildren ? children : [];
    this.id = id;
    this.param = param;
  }

  getId() {
    return this.id;
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    return this.children;
  }

  addChild(chd) {
    this.children.push(chd);
  }

  hasParent() {
    return this.getParent() == null;
  }

  hasChildren() {
    return this.getChildren() !== null && this.getChildren().length > 0;
  }

  setParam(param) {
    this.param = param;
  }

  getParam() {
    if (isNil(this.param)) {
      return {};
    }
    return this.param;
  }

  isAsyncLoad() {
    return this.getParam()['asyncLoad'] && this.getChildren().length === 0;
  }

  handleChildren(children) {
    const fun = (function(chd) {
      return <TreeItem id={chd.getId()} label={chd.getParam()['label']}
                       key={chd.getId()}>
        {this.handleChildren(chd.getChildren())}
      </TreeItem>;
    }).bind(this);

    return children.map(fun);
  }

  toComponent() {
    return <TreeItem id={this.id} label={this.getParam()['label']}
                     key={this.id}>
      {this.handleChildren(this.getChildren())}
    </TreeItem>;
  }
}