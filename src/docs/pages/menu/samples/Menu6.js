import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu6() {
  return <>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']} type="normal"
            style={{marginBottom: '1rem'}}
            direction="horizontal">
        <Menu.Item id="item1" hasBottomBar>
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2" hasBottomBar>
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3" hasBottomBar>
          Menu Item3
        </Menu.Item>
      </Menu>
    </div>
    <div className="doc doc-row">
      <Menu defaultActiveItems={['item1']}
            direction="horizontal">
        <Menu.Item id="item1" hasBackground>
          Menu Item1
        </Menu.Item>
        <Menu.Item id="item2" hasBackground>
          Menu Item2
        </Menu.Item>
        <Menu.Item id="item3" hasBackground>
          Menu Item3
        </Menu.Item>
      </Menu>
    </div>
  </>;

}