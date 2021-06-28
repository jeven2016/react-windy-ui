import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu5() {
  return <>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            direction="horizontal">
        <Menu.Item id="item1" align="left" style={{background: '#e8f0f6'}}>
          Left Menu
        </Menu.Item>
        <Menu.Item id="item2">
          Menu Item2
        </Menu.Item>
      </Menu>
    </div>

    <div className="doc doc-row">
      <Menu defaultActiveItems={['item3']}
            direction="horizontal">
        <Menu.Item id="item2">
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3" align="right" style={{background: '#e8f0f6'}}>
          Right Menu
        </Menu.Item>
      </Menu>
    </div>
  </>;

}