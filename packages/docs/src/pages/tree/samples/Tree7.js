import React from 'react';
import { IconHome, IconOk, IconSearch, Tree } from 'react-windy-ui';

export default function Tree7() {
  return (
    <div style={{ width: '300px' }}>
      <Tree onSelect={(ids, e) => console.log(ids)} highlightLine>
        <Tree.TreeItem id="Parent-1" label="Parent-1" icon={<IconHome />}>
          <Tree.TreeItem
            id="Child-1-1"
            label="Child-1-1"
            icon={<IconHome />}
            moreElements={[<IconSearch onClick={() => console.log('clicked')} />, <IconOk />]}
          />
          <Tree.TreeItem
            id="Child-1-2"
            label="Child-1-2"
            icon={<IconHome />}
            moreElements={[<IconSearch onClick={() => console.log('clicked')} />, <IconOk />]}
          />
          <Tree.TreeItem
            id="Child-1-3"
            label="Child-1-3"
            icon={<IconHome />}
            moreElements={[<IconSearch onClick={() => console.log('clicked')} />, <IconOk />]}
          />
          <Tree.TreeItem
            id="Child-1-4"
            label="Child-1-4"
            icon={<IconHome />}
            moreElements={[<IconSearch onClick={() => console.log('clicked')} />, <IconOk />]}
          />
          <Tree.TreeItem
            id="Child-1-5"
            label="Child-1-5"
            icon={<IconHome />}
            moreElements={[<IconSearch onClick={() => console.log('clicked')} />, <IconOk />]}
          ></Tree.TreeItem>
        </Tree.TreeItem>
      </Tree>
    </div>
  );
}
