import React from 'react';
import {
  Badge,
  Button,
  Dropdown,
  IconAccount,
  IconSearch,
  Input,
  Navbar,
  Select,
} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

export default function Navbar7() {
  return <>
    <div className="doc doc-row">
      <Navbar hasBorder={false} type="primary">
        <Navbar.Title>
          Navbar
        </Navbar.Title>
        <Navbar.List justify="end">
          <Navbar.Item active={true}>
            <Input placeholder="Search...." hasBox={false}/>
          </Navbar.Item>
          <Navbar.Item>
            <Dropdown title={<Button color="purple">Dropdown</Button>}>
              <Dropdown.Menu>
                <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
                <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
                <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
                <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Item>
          <Navbar.Item compact={true}>
            <Button circle size="large">
              <Badge type="dot" color="#ff350e">
                <FontAwesomeIcon icon={faPhone}/>
              </Badge>
            </Button>
          </Navbar.Item>
          <Navbar.Item compact={true}>
            <Button circle size="large" rippleColor='rgba(255,0,0)'>
              <Badge body="20" color="#ff350e">
                <IconAccount/>
              </Badge>
            </Button>
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    </div>

    <div className="doc doc-row">
      <Navbar hasBorder={false} type="primary" extraClassName='bg-color-black'>
        <Navbar.Title>
          Navbar
        </Navbar.Title>
        <Navbar.List>
          <Navbar.Item>
            <Button color="green">Button</Button>
          </Navbar.Item>
          <Navbar.Item active={true}>
            <Input placeholder="Message..." icon={<IconSearch/>} leftIcon={true}
                   rightIcons={[<IconAccount/>]} hasBox={false}/>
          </Navbar.Item>
          <Navbar.Item compact={true}>
            <Select defaultValue="nj"
                    inputProps={{hasBox: false}}
                    onSelect={(value) => console.log(value)}>
              <Select.Option value="bj">
                Beijing
              </Select.Option>
              <Select.Option value="nj">Nanjing</Select.Option>
              <Select.Option value="sh">Shanghai</Select.Option>
              <Select.Option value="sz">Suzhou</Select.Option>
            </Select>
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    </div>
  </>;
}