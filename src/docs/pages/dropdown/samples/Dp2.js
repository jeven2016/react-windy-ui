import React from 'react';
import {Button, Dropdown} from 'react-windy-ui';

export default function Dp2() {

  return <>
    <Dropdown title={<Button>Dropdown</Button>} activeBy="hover">
      <Dropdown.Menu>
        <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
        <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
        <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
        <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown title={<Button color="green" circle>W</Button>}
              activeBy="hover">
      <Dropdown.Menu type="primary">
        <Dropdown.Item onClick={() => console.log('click item1')}>
          Menu Item1
        </Dropdown.Item>
        <Dropdown.Item>
          Menu Item2
        </Dropdown.Item>
        <Dropdown.Item onClick={() => console.log('click item3')}>
          Menu Item3
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </>;

}