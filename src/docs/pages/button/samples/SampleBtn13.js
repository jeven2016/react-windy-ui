import React from 'react';
import {
  Button,
  IconArrowLeft,
  IconArrowRight,
  IconList,
  Navbar,
  IconCalendar,
} from 'react-windy-ui';

const SampleBtn13 = () => {
  return <>
    <Button outline type="info" extraClassName="clear-border">OK</Button>
    <Button outline type="success" extraClassName="clear-border">NO</Button>

    <Navbar type="primary" style={{marginTop: '2rem', background: '#000'}}>
      <Navbar.Title>
        My Site
      </Navbar.Title>
      <Navbar.List>
        <Navbar.Item>
          <Button outline circle color="green" extraClassName="clear-border"
                  style={{color: '#fff'}}>
            <IconArrowLeft/>
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Button outline color="blue" extraClassName="clear-border"
                  style={{color: '#fff'}}>
            <IconList/>
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Button outline circle color="red" extraClassName="clear-border"
                  style={{color: '#fff'}}>
            <IconArrowRight/>
          </Button>
        </Navbar.Item>
        <Navbar.Item>
          <Button outline color="blue" extraClassName="clear-border">
            <IconCalendar/>
          </Button>
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  </>;
};

export default SampleBtn13;