import React, {useState} from 'react';
import {Button, IconHome, IconSearch, Navbar, Toggle} from 'react-windy-ui';
import DocFrame from '../../../utils/DocFrame';

export default function Navbar6() {
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

    <DocFrame width={width} height='150px'>
      <Navbar type="primary" hasBorder={false} autoHide={false}>
        <Navbar.Title style={{width: '100%'}}>
          <span style={{flex: '1 1 auto'}}>Web</span>
        </Navbar.Title>
        <Navbar.List align="right">
          <Navbar.Item>
            <Button circle inverted size="large">
              <IconSearch/>
            </Button>
            <Button circle inverted size="large">
              <IconHome/>
            </Button>
          </Navbar.Item>
        </Navbar.List>
      </Navbar>
    </DocFrame>
  </>;
}