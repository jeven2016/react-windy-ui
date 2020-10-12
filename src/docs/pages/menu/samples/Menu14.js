import React from 'react';
import {IconList, Menu} from 'react-windy-ui';

export default function Menu14() {
 
  return <>
    <div className="doc doc-row" style={{width: '50%'}}>
      <Menu>
        <Menu.SubMenu header="SubMenu 1" id="sub1" icon={<IconList/>}>
          <Menu.Item id="item3" >
            Menu item3
          </Menu.Item>
          <Menu.Item id="item4" >
            Menu item4
          </Menu.Item>
          <Menu.Item id="item5" >
            Menu item5
          </Menu.Item>
          <Menu.Item id="item6" >
            Menu item6
          </Menu.Item>
          <Menu.Item id="item7" >
            Menu item7
          </Menu.Item>
          <Menu.Item id="item8" >
            Menu item8
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu header="SubMenu 2" id="sub2" >
          <Menu.Item id="item9" >
            Menu item9
          </Menu.Item>
          <Menu.Item id="item10" >
            Menu item10
          </Menu.Item>
          <Menu.Item id="item11" >
            Menu item11
          </Menu.Item>
          <Menu.Item id="item12" >
            Menu item12
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </div>

    <div className="doc doc-row">

    </div>
  </>;

}