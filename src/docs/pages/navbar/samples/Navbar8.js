import React, {useState} from 'react';
import {Navbar, Toggle} from 'react-windy-ui';

export default function Navbar8() {
  const [bg, setBg] = useState(false);
  const [bottomBar, setBottomBar] = useState(false);
  const [box, setBox] = useState(true);

  const colorClassNames = [
    'bg-color-green', 'bg-color-brown', 'bg-color-black',
    'bg-color-red', 'bg-color-teal'];
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
      <div className="doc doc-row">
        <Toggle active={box}
                content={{on: 'Box Shadow', off: 'Box Shadow'}}
                onChange={(val) => setBox(val)}/>
      </div>
    </div>

    {
      colorClassNames.map((item, i) =>
          <Navbar key={i} type="primary" hasBorder={false} hasBox={box}
                  extraClassName={item} style={{marginBottom: '1rem'}}>
            <Navbar.Title>
              Navbar
            </Navbar.Title>
            <Navbar.List>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                User
              </Navbar.Item>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                Role
              </Navbar.Item>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                Privileges
              </Navbar.Item>
              <Navbar.Item hasBackground={bg} hasBar={bottomBar}>
                Security
              </Navbar.Item>
            </Navbar.List>
          </Navbar>,
      )
    }

  </>;
}