import React, {useState} from 'react';
import {Navbar, Toggle} from 'react-windy-ui';

export default function Navbar3() {
  const [bg, setBg] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);

  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={bg} content={{on: 'Background', off: 'Background'}}
                onChange={(val) => setBg(val)}/>
      </div>
      <div className="doc doc-row">
        <Toggle active={bottomBar}
                content={{on: 'Bottom Bar', off: 'Bottom Bar'}}
                onChange={(val) => setBottomBar(val)}/>
      </div>
    </div>

    <Navbar type="primary" hasBorder={false}>
      <Navbar.Title>
        <span>Web</span>
      </Navbar.Title>
      <Navbar.List align="right">
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          User
        </Navbar.Item>
        <Navbar.Item active={true} hasBackground={bg} hasBar={bottomBar}>
          Role
        </Navbar.Item>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          Security
        </Navbar.Item>
      </Navbar.List>

    </Navbar>
  </>;
}