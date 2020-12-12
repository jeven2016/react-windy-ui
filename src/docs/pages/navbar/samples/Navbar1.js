import React from 'react';
import {Navbar} from 'react-windy-ui';

export default function Navbar1() {
  return <>
    <div className="doc doc-row">
      <Navbar>
        <Navbar.Title>
          Navbar
        </Navbar.Title>
        <Navbar.List>
          <Navbar.Item
              onClick={(e) => console.log('you just clicked the User item')}>
            User
          </Navbar.Item>
          <Navbar.Item active={true}>
            Role
          </Navbar.Item>
          <Navbar.Item>
            Security
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    </div>

    <div className="doc doc-row">
      <Navbar style={{marginTop: '2rem'}} hasBox={false} hasBorder={true}>
        <Navbar.Title>
          Navbar
        </Navbar.Title>
        <Navbar.List>
          <Navbar.Item hasBackground={true}>
            User
          </Navbar.Item>
          <Navbar.Item hasBackground={true} active>
            Role
          </Navbar.Item>
          <Navbar.Item hasBackground={true}>
            Security
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    </div>
  </>;
}