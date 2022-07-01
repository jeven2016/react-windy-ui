import React, { useState } from 'react';
import { Navbar, Toggle } from 'react-windy-ui';

export default function Navbar3() {
  const [left, setLeft] = useState(false);

  return (
    <>
      <div className="doc doc-row">
        <div className="doc doc-row">
          <Toggle active={left} label="Justify" onChange={(val) => setLeft(val)} />
        </div>
      </div>

      <Navbar type="primary" hasBorder={false} hasBox={true} hasItemBackground={true}>
        <Navbar.Title>
          <span>Navbar</span>
        </Navbar.Title>
        <Navbar.List justify={left ? 'start' : 'end'}>
          <Navbar.Item>User</Navbar.Item>
          <Navbar.Item>Role</Navbar.Item>
          <Navbar.Item>Security</Navbar.Item>
        </Navbar.List>
      </Navbar>
    </>
  );
}
