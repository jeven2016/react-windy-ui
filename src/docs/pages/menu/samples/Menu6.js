import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu6() {
  return <>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            direction="horizontal">
        <Menu.Item id="item1" align="left">
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2">
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3">
          Menu Item3
        </Menu.Item>
      </Menu>
    </div>

    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            direction="horizontal">
        <Menu.Item id="item1">
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2">
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3" align="right">
          Menu Item3
        </Menu.Item>
      </Menu>
    </div>

    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            direction="horizontal">
        <Menu.Item id="item1">
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2">
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3" align="right">
          Menu Item3
        </Menu.Item>
      </Menu>
    </div>
  </>;

}