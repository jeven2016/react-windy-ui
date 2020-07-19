import React, {useState} from 'react';
import {IconList, Navbar, Toggle, Badge} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';
import {IconWarning} from '../../../../components/src';

export default function Navbar4() {
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

    <DocFrame width={width} height='270px'>
      <Navbar type="primary" hasBorder={false}>
        <Navbar.Title>
          <Navbar.Switch>
            <IconList/>
          </Navbar.Switch>
          <span>Web</span>
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