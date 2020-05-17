import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu5() {
  return <>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            type="primary"
            direction="horizontal">
        <Menu.Item id="item1" equitable>Menu Item1</Menu.Item>
        <Menu.Item id="item2" equitable>Menu Item2</Menu.Item>
      </Menu>
    </div>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            type="primary"
            direction="horizontal">
        <Menu.Item id="item1" equitable style={{justifyContent: 'center'}}>
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2" equitable style={{justifyContent: 'center'}}>
          Menu Item2
        </Menu.Item>
      </Menu>
    </div>
  </>;

}