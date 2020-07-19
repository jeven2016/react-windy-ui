import React, {useState} from 'react';
import {IconList, Navbar, Toggle} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

export default function Navbar5() {
  const [smallWindow, setSmallWindow] = useState(false);

  const width = smallWindow ? '500px' : '100%';
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={smallWindow}
                content={{on: 'Small Window', off: 'Small Window'}}
                onChange={(val) => setSmallWindow(val)}/>
      </div>
    </div>

    <DocFrame width={width} height='250px'>
      <Navbar type="primary" hasBorder={false}>
        <Navbar.Title style={{width: '100%'}}>
          <span style={{flex: '1 1 auto'}}>Web</span>
          <Navbar.Switch>
            <IconList/>
          </Navbar.Switch>
        </Navbar.Title>
        <Navbar.List align="right">
          <Navbar.Item hasBackground={true}>
            User
          </Navbar.Item>
          <Navbar.Item active={true} hasBackground={true}>
            Role
          </Navbar.Item>
          <Navbar.Item hasBackground={true}>
            Security
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    </DocFrame>
  </>;
}