import React from 'react';
import {
  Button,
  IconArrowLeft,
  IconArrowRight,
  IconCalendar,
  IconList,
  Navbar,
} from 'react-windy-ui';

const SampleBtn13 = () => {
  return <>
    <div style={{color: '#0ca0ff'}}>
      <Button inverted>Default</Button>
      <Button inverted type="info">OK</Button>
      <Button inverted type="success">NO</Button>
    </div>

    <Navbar type="primary"
            style={{marginTop: '2rem', background: '#000', color: '#fff'}}>
      <Navbar.Title>
        My Site
      </Navbar.Title>
      <Navbar.List>
        <Navbar.Item>
          <Button inverted circle color="green">
            <IconArrowLeft/>
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Button inverted color="blue">
            <IconList/>
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Button inverted circle color="red">
            <IconArrowRight/>
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Button inverted color="blue">
            <IconCalendar/>
          </Button>
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  </>;
};

export default SampleBtn13;