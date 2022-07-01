import React from 'react';
import { Button, Dropdown } from 'react-windy-ui';

export default function Dp1() {
  const title = <span style={{ color: '#0ca0ff', cursor: 'pointer' }}>Text</span>;

  return (
    <>
      <Dropdown title={title}>
        <Dropdown.Menu>
          <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
          <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
          <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
          <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        title={
          <Button style={{ marginLeft: '2rem' }} color="primary">
            Button
          </Button>
        }
      >
        <Dropdown.Menu>
          <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
          <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
          <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
          <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
