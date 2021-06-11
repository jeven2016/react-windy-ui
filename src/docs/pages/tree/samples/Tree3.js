import React, {useState} from 'react';
import {Toggle, Tree} from 'react-windy-ui';

export default function Tree3() {
  const [checkable, setCheckable] = useState(true);
  const [selectedIds, set] = useState(null);
  const [checkedIds, setCheckedIds] = useState(["Child-1-1"]);

  //maintain the checked items by yourself
  const checkHandler = (ids) => {
    setCheckedIds(ids);
    console.log(ids)
  }

  return <>
    <div className="doc doc-row">
      <Toggle active={checkable}
              label='Checkable'
              onChange={(val) => setCheckable(val)}/>
    </div>

    <Tree checkable={checkable}
          checkedItems={checkedIds}
          onCheck={checkHandler}
          selectedItems={selectedIds}
          onSelect={(ids, e) => set(ids)}>
      <Tree.TreeItem id="Parent-1" label="Parent-1">
        <Tree.TreeItem id="Child-1-1" label="Child-1-1"/>
        <Tree.TreeItem id="Child-1-2" label="Child-1-2"/>
        <Tree.TreeItem id="Child-1-3" label="Child-1-3"/>
        <Tree.TreeItem id="Child-1-4" label="Child-1-4"/>
        <Tree.TreeItem id="Child-1-5" label="Child-1-5">
          <Tree.TreeItem id="Child-1-5-1" label="Child-1-5-1"/>
          <Tree.TreeItem id="Child-1-5-2" label="Child-1-5-2"/>
        </Tree.TreeItem>
      </Tree.TreeItem>
    </Tree>
  </>;
}