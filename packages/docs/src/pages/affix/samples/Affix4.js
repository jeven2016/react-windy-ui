import React, { useState } from 'react';
import { Affix, Navbar, Toggle } from 'react-windy-ui';

export default function Affix4() {
  const [block, setBlock] = useState(true);
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <div className="doc doc-row">
        <Toggle active={block} onChange={(v) => setBlock(v)} label="Block" />
      </div>
      <div className="doc doc-row">
        <Toggle active={disabled} onChange={(v) => setDisabled(v)} label="Disable" />
      </div>
      <Affix bottom={0} block={block} disabled={disabled}>
        <Navbar>
          <Navbar.Title>Scroll Top</Navbar.Title>
          <Navbar.List>
            <Navbar.Item>User</Navbar.Item>
            <Navbar.Item active={true}>Role</Navbar.Item>
            <Navbar.Item>Security</Navbar.Item>
          </Navbar.List>
        </Navbar>
      </Affix>
    </>
  );
}
