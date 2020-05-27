import React from 'react';
import {Dropdown, Button, IconArrowDown, Menu} from 'react-windy-ui';

export default function Dp1() {

  const title = <span
      style={{color: '#0ca0ff', display: 'inline-flex', alignItems: 'center'}}>
    Dropdown <IconArrowDown/>
  </span>;

  return <>
    <Dropdown title={title} activeBy="hover"
              hasBox={false} hasBorder={false}
              popupStyle={{background: 'transparent'}}>
      <Dropdown.Menu hasBox={false} type="dark" popupSubMenu>
        <Menu.Item id="item1">Menu Item1</Menu.Item>
        <Menu.Item id="item2">Menu Item2</Menu.Item>
        <Menu.Item id="item3">Menu Item3</Menu.Item>
        <Menu.Item id="item4">Menu Item4</Menu.Item>
        <Menu.SubMenu id="sub1" header="Sub 1">
          <Menu.Item id="item12">Menu Item12</Menu.Item>
          <Menu.Item id="item22">Menu Item22</Menu.Item>
          <Menu.Item id="item32">Menu Item32</Menu.Item>
          <Menu.Item id="item42">Menu Item42</Menu.Item>
        </Menu.SubMenu>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown activeBy="click" title={<Button style={{marginLeft: '2rem'}}
                                              color="primary">Button</Button>}>
      <Dropdown.Menu>
        <Menu.Item id="item1">Menu Item1</Menu.Item>
        <Menu.Item id="item2">Menu Item2</Menu.Item>
        <Menu.Item id="item3">Menu Item3</Menu.Item>
        <Menu.Item id="item4">Menu Item4</Menu.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>;

}