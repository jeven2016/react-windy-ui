import React from 'react';
import {Checkbox, Tree} from 'react-windy-ui';

export default function Checkbox5() {
  return <>
    <div className="doc doc-row">
      <Checkbox showIndeterminateState={true}
                iconIndeterminateStyle={{color: '#9935c8'}}>
        Indeterminate State
      </Checkbox>
    </div>

    <div className="doc doc-row">
      <Tree defaultExpandedItems={['Tree', 'Child-1-5']}
            highlightLine
            checkable>
        <Tree.TreeItem id="Tree" label="Tree">
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
    </div>
  </>;
}