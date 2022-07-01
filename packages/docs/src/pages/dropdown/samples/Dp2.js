import React, { useState } from 'react';
import { Button, Dropdown, Toggle } from 'react-windy-ui';

export default function Dp2() {
  const [activeBy, setActiveBy] = useState('click');

  return (
    <>
      <div className="doc doc-row">
        <Toggle
          active={activeBy === 'click'}
          label={{ on: 'Click', off: 'Hover' }}
          onChange={(selected) => setActiveBy(selected ? 'click' : 'hover')}
        />
      </div>

      <Dropdown title={<Button>Dropdown</Button>} activeBy={activeBy}>
        <Dropdown.Menu>
          <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
          <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
          <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
          <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown
        title={
          <Button color="blue" circle>
            W
          </Button>
        }
        activeBy={activeBy}
      >
        <Dropdown.Menu type="primary">
          <Dropdown.Item onClick={() => console.log('click item1')}>Menu Item1</Dropdown.Item>
          <Dropdown.Item onClick={() => console.log('click item2')}>Menu Item2</Dropdown.Item>
          <Dropdown.Item onClick={() => console.log('click item3')}>Menu Item3</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
