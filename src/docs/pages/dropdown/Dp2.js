import React from 'react';
import {Button, Dropdown} from 'react-windy-ui';

export default function Dp2() {

  return <>
    <Dropdown title={<Button>Dropdown1</Button>} activeBy="hover">
      <Dropdown.Menu type="primary" popupSubMenu>
        <Dropdown.Item onClick={() => console.log('click item1')}>
          Menu Item1
        </Dropdown.Item>
        <Dropdown.Item onClick={(e) => {
          console.log('click item2');
          e.stopPropagation();
        }}>
          Menu Item2
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('click item3')}>
          Menu Item3
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown title={<Button>Dropdown2</Button>} activeBy="hover"
              onSelect={(id, e) => console.log(`${id} is selected`)}>
      <Dropdown.Menu type="primary" popupSubMenu>
        <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
        <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
        <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
        <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
        <Dropdown.SubMenu id="sub1" header="Sub 1">
          <Dropdown.Item id="item12">Menu Item12</Dropdown.Item>
          <Dropdown.Item id="item22">Menu Item22</Dropdown.Item>
          <Dropdown.Item id="item32">Menu Item32</Dropdown.Item>
          <Dropdown.Item id="item42">Menu Item42</Dropdown.Item>
        </Dropdown.SubMenu>
      </Dropdown.Menu>
    </Dropdown>
  </>;

}