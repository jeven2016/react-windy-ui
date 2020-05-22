import React from 'react';
import {ButtonGroup, Button, Dropdown, IconArrowDown} from 'react-windy-ui';

export default function Dp3() {

  return <>
    <ButtonGroup>
      <Button color="green" outline>Button</Button>
      <Dropdown
          position="bottomRight"
          title={<Button color="green"
                         hasMinWidth={false}><IconArrowDown/></Button>}
          activeBy="click"
          onSelect={(id, e) => console.log(`${id} is selected`)}>
        <Dropdown.Menu type="primary">
          <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
          <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
          <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
          <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>

    <ButtonGroup style={{marginLeft: '2rem'}}>
      <Button color="green">Button</Button>
      <Dropdown
          position="bottomRight"
          title={<Button color="green"
                         hasMinWidth={false}><IconArrowDown/></Button>}
          activeBy="click"
          onSelect={(id, e) => console.log(`${id} is selected`)}>
        <Dropdown.Menu type="primary">
          <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
          <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
          <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
          <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonGroup>
  </>;

}