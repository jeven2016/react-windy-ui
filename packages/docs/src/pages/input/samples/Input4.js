import React from 'react';
import { Input, InputGroup, Button, IconCalendar, Dropdown } from 'react-windy-ui';

export default function Input4(props) {
  return (
    <>
      <div className="doc doc-row">
        <InputGroup block={false} size="small">
          <InputGroup.Label>$</InputGroup.Label>
          <Input placeholder="money......" />
        </InputGroup>
      </div>

      <div className="doc doc-row">
        <InputGroup size="small">
          <InputGroup.Label>$</InputGroup.Label>

          <Input placeholder="money......" />

          <InputGroup.Item autoScale={false}>
            <Button color="blue">GO</Button>
          </InputGroup.Item>

          <InputGroup.Item autoScale={false}>
            <Dropdown title={<Button color="green">Action</Button>}>
              <Dropdown.Menu>
                <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
                <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
                <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
                <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </InputGroup.Item>

          <InputGroup.Label>
            <IconCalendar />
          </InputGroup.Label>
        </InputGroup>
      </div>
    </>
  );
}
