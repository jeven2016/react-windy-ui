import React, {useState} from 'react';
import {IconList, Navbar, Toggle, RadioGroup, Radio} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

export default function Navbar9() {
  const [smallWindow, setSmallWindow] = useState(false);
  const [position, setPosition] = useState('top');

  const width = smallWindow ? '500px' : '100%';
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={smallWindow}
                content={{on: 'Small Window', off: 'Small Window'}}
                onChange={(val) => setSmallWindow(val)}/>
      </div>
    </div>
    <div className="doc doc-row">
      <RadioGroup value={position} onChange={(val) => setPosition(val)}>
        <Radio value="top" checkedColor="purple">Top</Radio>
        <Radio value="bottom" checkedColor="green">Bottom</Radio>
      </RadioGroup>
    </div>

    <DocFrame width={width} height='270px' frameBorder="1px solid #333">
      <Navbar type="primary" hasBorder={false} fixed={position}>
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
      <div style={{height: '400px'}}>
        .......<br/>
        .......<br/>
        .......<br/>
        .......<br/>
      </div>
    </DocFrame>
  </>;
}