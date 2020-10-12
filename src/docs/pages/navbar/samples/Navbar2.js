import React, {useState} from 'react';
import {Dropdown, Navbar, Toggle} from 'react-windy-ui';

export default function Navbar2() {
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
        Navbar
      </Navbar.Title>
      <Navbar.List>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          User
        </Navbar.Item>
        <Navbar.Item active={true} hasBackground={bg} hasBar={bottomBar}>
          Role
        </Navbar.Item>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
          Security
        </Navbar.Item>
        <Navbar.Item hasBackground={bg} hasBar={bottomBar} alignRight={true}>
          <Dropdown activeBy="hover" title={<span>Dropdown</span>}>
            <Dropdown.Menu>
              <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
              <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
              <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
              <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Item>
      </Navbar.List>
    </Navbar>
  </>;
}