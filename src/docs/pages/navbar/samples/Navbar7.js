import React from 'react';
import {Button, Dropdown, IconSearch, Input, Navbar} from 'react-windy-ui';

export default function Navbar7() {
  return <>

    <Navbar hasBorder={false} type="primary">
      <Navbar.Title>
        Navbar
      </Navbar.Title>
      <Navbar.List>
        <Navbar.Item>
          <Button color="green">Button</Button>
        </Navbar.Item>
        <Navbar.Item active={true}>
          <Input.IconInput>
            <Input placeholder="Message..."/>
            <IconSearch/>
          </Input.IconInput>
        </Navbar.Item>
        <Navbar.Item>
          <Dropdown title={<Button style={{marginLeft: '2rem'}}
                                   color="purple">Dropdown</Button>}>
            <Dropdown.Menu>
              <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
              <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
              <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
              <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  </>;
}