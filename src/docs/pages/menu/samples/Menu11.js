import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu11() {

  return <div style={{width: '50%'}}>
    <div className="doc doc-row">
      <div>
        <Menu type="primary">
          <Menu.Group header="Group1">
            <Menu.Item id="item1">
              Item1
            </Menu.Item>
            <Menu.Item id="item2">
              Item2
            </Menu.Item>
          </Menu.Group>
          <Menu.Group header="Group2">
            <Menu.Item id="item3">
              Item3
            </Menu.Item>
            <Menu.Item id="item4">
              Item4
            </Menu.Item>
          </Menu.Group>
        </Menu>
      </div>
    </div>
  </div>;
}