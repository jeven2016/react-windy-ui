import React, {useState} from 'react';
import {
  IconList,
  Navbar,
  Toggle,
  RadioGroup,
  Radio,
  Affix,
} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

const fixedNavbarStyle = {
  lineHeight: '5rem',
  background: '#333',
  padding: '0 10%',
};

export default function Navbar10() {
  const [smallWindow, setSmallWindow] = useState(false);
  const [position, setPosition] = useState('top');
  const [affixedStyle, setAffixedStyle] = useState(null);

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
      <Affix block top={0} onChange={affixed => {
        setAffixedStyle(affixed ? fixedNavbarStyle : null);
      }}>
        <Navbar type="primary" style={affixedStyle}>
          <Navbar.Title>
            <Navbar.Switch>
              <IconList/>
            </Navbar.Switch>
            <span style={{flex: '1 1 auto'}}>Web</span>
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
      </Affix>
      <div style={{height: '400px'}}>
        .......<br/>
        .......<br/>
        .......<br/>
        .......<br/>
      </div>
    </DocFrame>
  </>;
}