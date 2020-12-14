import React, {useState} from 'react';
import {
  Drawer,
  IconList,
  Menu,
  Navbar,
  Radio,
  RadioGroup,
  Toggle,
} from 'react-windy-ui';
import DocFrame, {FrameContextConsumer} from '../../../utils/DocFrame';

export default function Navbar12() {
  const [smallWindow, setSmallWindow] = useState(true);
  const [position, setPosition] = useState('top');
  const [activeDrawer, setActiveDrawer] = useState(false);

  const width = smallWindow ? '500px' : '100%';
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <Toggle active={smallWindow}
                label='Small Window'
                onChange={(val) => setSmallWindow(val)}/>
      </div>
    </div>
    <div className="doc doc-row">
      <RadioGroup value={position} onChange={(val) => setPosition(val)}>
        <Radio value="top" checkedColor="purple">Top</Radio>
        <Radio value="bottom" checkedColor="green">Bottom</Radio>
      </RadioGroup>
    </div>


    {/*the doc frame is an iframe for demo*/}
    <DocFrame width={width} height='270px' frameBorder="1px solid #333">
      <FrameContextConsumer>

        {
          ({document, window: iframeWindow}) => <>
            {/*detecting the change of the iframe since we demonstrate via an embedded iframe.*/}
            {/*Please ignore the targetWindow & mediaQueryWindow if your navbar isn't running in a iframe*/}

            <Navbar mediaQueryWindow={iframeWindow} type="primary"
                    fixed={position}>
              <Navbar.Title>
                <Navbar.Switch autoSwitch={false} onClick={(e) => {
                  setActiveDrawer(true);
                }}>
                  <IconList/>
                </Navbar.Switch>
                <span style={{flex: '1 1 auto'}}>Web</span>
              </Navbar.Title>
              <Navbar.List justify="end">
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

            <Drawer active={activeDrawer}
                    style={{width: '50%'}}
                    onChange={(e, show) => setActiveDrawer(show)}>
              <Menu hasBox={false} onSelect={() => setActiveDrawer(false)}>
                <Menu.Item id="user">User</Menu.Item>
                <Menu.Item id="role">Role</Menu.Item>
                <Menu.Item id={'security'}>Security</Menu.Item>
              </Menu>
            </Drawer>

            <div style={{height: '400px'}}>

            </div>

          </>
        }

      </FrameContextConsumer>
    </DocFrame>
  </>;
}