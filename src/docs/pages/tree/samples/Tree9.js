import React, {useState} from 'react';
import {Tree} from 'react-windy-ui';

export default function Tree9() {
  const [expandedItems, setItems] = useState(['Parent-1', 'Child-1-5']);

  const expand = (id, isExpend, e) => {
    if (isExpend) {
      setItems(pre => [...pre, id]);
    } else {
      setItems(pre => pre.filter(itemId => id !== itemId));
    }
  };

  return <>
    <Tree expandedItems={expandedItems}
          onExpand={expand}>
      <Tree.TreeItem id="Parent-1" label="Parent-1">
        <Tree.TreeItem id="Child-1-1" label="Child-1-1"/>
        <Tree.TreeItem id="Child-1-2" label="Child-1-2"/>
        <Tree.TreeItem id="Child-1-3" label="Child-1-3"/>
        <Tree.TreeItem id="Child-1-4" label="Child-1-4"/>
        <Tree.TreeItem id="Child-1-5" label="Child-1-5">
          <Tree.TreeItem id="Child-1-5-1" label="Child-1-5-1"/>
          <Tree.TreeItem id="Child-1-5-2" label="Child-1-5-2"/>
          <Tree.TreeItem id="Child-1-5-3" label="Child-1-5-3"/>
          <Tree.TreeItem id="Child-1-5-4" label="Child-1-5-4"/>
        </Tree.TreeItem>
      </Tree.TreeItem>
    </Tree>
  </>;
}