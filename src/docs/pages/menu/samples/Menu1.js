import React from 'react';
import {Menu} from 'react-windy-ui';

export default function Menu1() {

  return <Menu defaultActiveItems={"item1"} onSelect={(itemInfo, e)=>{
    console.log(itemInfo);
  }}>
    <Menu.Item id="item1">Menu Item1</Menu.Item>
    <Menu.Item id="item2">Menu Item2</Menu.Item>
    <Menu.Item id="item3">Menu Item3</Menu.Item>
    <Menu.Item id="item4">Menu Item4</Menu.Item>
  </Menu>;

}