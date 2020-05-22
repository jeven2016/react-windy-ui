import React from 'react';
import {Button, Dropdown} from 'react-windy-ui';

export default function Dp4() {

  return <>
    <Dropdown title={<Button color="purple" circle>NJ</Button>}
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