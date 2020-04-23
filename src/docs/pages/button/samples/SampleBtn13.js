import React from 'react';
import {
  Button,
  IconArrowLeft,
  IconArrowRight,
  IconList,
  NavBar,
  IconCalendar,
} from 'react-windy-ui';

const SampleBtn13 = () => {
  return <>
    <Button outline type="info" extraClassName="clear-border">OK</Button>
    <Button outline type="success" extraClassName="clear-border">NO</Button>

    <NavBar type="primary" style={{marginTop: '2rem', background: '#000'}}>
      <NavBar.Title>
        My Site
      </NavBar.Title>
      <NavBar.List>
        <NavBar.Item>
          <Button outline circle color="green" extraClassName="clear-border"
                  style={{color: '#fff'}}>
            <IconArrowLeft/>
          </Button>
        </NavBar.Item>
        <NavBar.Item>
          <Button outline color="blue" extraClassName="clear-border"
                  style={{color: '#fff'}}>
            <IconList/>
          </Button>
        </NavBar.Item>
        <NavBar.Item>
          <Button outline circle color="red" extraClassName="clear-border"
                  style={{color: '#fff'}}>
            <IconArrowRight/>
          </Button>
        </NavBar.Item>
        <NavBar.Item>
          <Button outline color="blue" extraClassName="clear-border">
            <IconCalendar/>
          </Button>
        </NavBar.Item>
      </NavBar.List>
    </NavBar>
  </>;
};

export default SampleBtn13;