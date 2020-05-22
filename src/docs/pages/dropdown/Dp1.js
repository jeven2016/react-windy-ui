import React from 'react';
import Dropdown from '../../../components/src/dropdown';
import {Button} from '../../../components/src';
import Menu from '../../../components/src/menu';

export default function Dp1() {

  return <>
    <Dropdown title="dropdown" activeBy="hover"
              hasBox={false} hasBorder={false}
              popupStyle={{background: 'transparent'}}>
      <Menu hasBox={false} type="dark" popupSubMenu>
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
      </Menu>
    </Dropdown>

    <Dropdown activeBy="click" title={<Button color="primary">Button</Button>}>
      <Menu>
        <Menu.Item id="item1">Menu Item1</Menu.Item>
        <Menu.Item id="item2">Menu Item2</Menu.Item>
        <Menu.Item id="item3">Menu Item3</Menu.Item>
        <Menu.Item id="item4">Menu Item4</Menu.Item>
      </Menu>
    </Dropdown>
  </>;

}