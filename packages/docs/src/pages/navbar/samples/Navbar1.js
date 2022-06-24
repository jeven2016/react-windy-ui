import React, { useState } from 'react';
import { Navbar, Toggle } from 'react-windy-ui';

export default function Navbar1() {
  const [border, setBorder] = useState(false);
  const [box, setBox] = useState(true);

  return (
    <>
      <div className="doc doc-row">
        <div className="doc doc-row">
          <Toggle active={border} label="Border" onChange={(val) => setBorder(val)} />
        </div>
        <div className="doc doc-row">
          <Toggle active={box} label="Box Shadow" onChange={(val) => setBox(val)} />
        </div>
      </div>

      <div className="doc doc-row">
        <Navbar hasBox={box} hasBorder={border}>
          <Navbar.Title>Navbar</Navbar.Title>
          <Navbar.List>
            <Navbar.Item onClick={(e) => console.log('you just clicked the User item')}>
              User
            </Navbar.Item>
            <Navbar.Item active={true}>Role</Navbar.Item>
            <Navbar.Item>Security</Navbar.Item>
          </Navbar.List>
        </Navbar>
      </div>

      <div className="doc doc-row">
        <Navbar hasBox={box} hasBorder={border} type="primary">
          <Navbar.Title>Navbar</Navbar.Title>
          <Navbar.List justify="end">
            <Navbar.Item hasBackground={true}>User</Navbar.Item>
            <Navbar.Item hasBackground={true} active>
              Role
            </Navbar.Item>
            <Navbar.Item hasBackground={true}>Security</Navbar.Item>
          </Navbar.List>
        </Navbar>
      </div>
    </>
  );
}
