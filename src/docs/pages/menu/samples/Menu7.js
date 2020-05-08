import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu7() {
  return <>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            block
            direction="horizontal">
        <Menu.Item id="item1" hasBackground hasBottomBar>
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2" hasBackground hasBottomBar>
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3" hasBackground hasBottomBar>
          Menu Item3
        </Menu.Item>
        <Menu.Item id="item4" hasBackground hasBottomBar>
          Menu Item4
        </Menu.Item>
      </Menu>
    </div>

    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            type="dark"
            block
            direction="horizontal">
        <Menu.Item id="item1">
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2">
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3">
          Menu Item3
        </Menu.Item>
        <Menu.Item id="item4">
          Menu Item4
        </Menu.Item>
      </Menu>
    </div>
  </>;

}