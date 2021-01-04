import React, {useState} from 'react';
import {Tree, Toggle} from 'react-windy-ui';

export default function Tree3() {
  const [checkable, setCheckable] = useState(true);
  const [selectedIds, set] = useState(null);
  const [checkedIds, setCheckedIds] = useState([]);

  const checkHandler = (ids) => {
    const currentCheckedId = ids[0];
    if (checkedIds.includes(currentCheckedId)) {
      //unchecked
      setCheckedIds(checkedIds.filter(id => id !== currentCheckedId));
    } else {
      //checked
      setCheckedIds([...checkedIds, currentCheckedId]);
    }
  }

  console.log(checkedIds);
  return <>
    <div className="doc doc-row">
      <Toggle active={checkable}
              content={{on: 'Checkable', off: 'Checkable'}}
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
      </Tree.TreeItem>
    </Tree>
  </>;
}