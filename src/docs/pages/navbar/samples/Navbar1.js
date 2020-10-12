import React from 'react';
import {Navbar} from 'react-windy-ui';

export default function Navbar1() {
  return <>

    <Navbar>
      <Navbar.Title>
        Navbar
      </Navbar.Title>
      <Navbar.List>
        <Navbar.Item>
          User
        </Navbar.Item>
        <Navbar.Item active={true}>
          Role
        </Navbar.Item>
        <Navbar.Item>
          Privileges
        </Navbar.Item>
        <Navbar.Item>
          Security
        </Navbar.Item>
      </Navbar.List>
    </Navbar>

    <Navbar style={{marginTop: '2rem'}} hasBox={false} hasBorder={true}>
      <Navbar.Title>
        Navbar
      </Navbar.Title>
      <Navbar.List>
        <Navbar.Item hasBackground={true}>
          User
        </Navbar.Item>
        <Navbar.Item hasBackground={true} active={true}>
          Role
        </Navbar.Item>
        <Navbar.Item hasBackground={true}>
          Privileges
        </Navbar.Item>
        <Navbar.Item hasBackground={true}>
          Security
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  </>;
}