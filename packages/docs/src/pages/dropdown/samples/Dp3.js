import React from 'react';
import {
  Button,
  ButtonGroup,
  Dropdown,
  IconList,
  Input,
  InputGroup,
  IconSearch,
} from 'react-windy-ui';

export default function Dp3() {

  return <>
    <div className="doc doc-row">
      <ButtonGroup>
        <Button color="blue" outline>Action</Button>
        <Dropdown
            position="bottomRight"
            title={<Button color="blue" size="small"><IconList
                size="small"/></Button>}
            activeBy="click">
          <Dropdown.Menu type="primary">
            <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
            <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
            <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
            <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ButtonGroup>

      <ButtonGroup style={{marginLeft: '1rem'}}>
        <Dropdown
            position="bottomLeft"
            title={<Button color="purple"><IconList size="small"/></Button>}
            activeBy="click">
          <Dropdown.Menu type="primary">
            <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
            <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
            <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
            <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button color="purple" outline>Action</Button>
      </ButtonGroup>
    </div>

    <div className="doc doc-row">
      <InputGroup block={false}>
        <InputGroup.Item autoScale={false}>
          <Dropdown
              position="bottomLeft"
              title={<Button><IconList size="small"/></Button>}
              activeBy="click">
            <Dropdown.Menu type="primary">
              <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
              <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
              <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
              <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </InputGroup.Item>
        <Input placeholder="Searching" icon={<IconSearch/>}/>
      </InputGroup>
    </div>
  </>;

}