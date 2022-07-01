import React, { useState } from 'react';
import { IconList, Navbar, Toggle, RadioGroup, Radio } from 'react-windy-ui';
import DocFrame, { FrameContextConsumer } from '../../../utils/DocFrame';

export default function Navbar9() {
  const [smallWindow, setSmallWindow] = useState(false);
  const [position, setPosition] = useState('top');

  const width = smallWindow ? '500px' : '100%';
  return (
    <>
      <div className="doc doc-row">
        <div className="doc doc-row">
          <Toggle
            active={smallWindow}
            label="Small Window"
            onChange={(val) => setSmallWindow(val)}
          />
        </div>
      </div>
      <div className="doc doc-row">
        <RadioGroup value={position} onChange={(val) => setPosition(val)}>
          <Radio value="top" checkedColor="purple">
            Top
          </Radio>
          <Radio value="bottom" checkedColor="green">
            Bottom
          </Radio>
        </RadioGroup>
      </div>

      {/*the doc frame is an iframe for demo*/}
      <DocFrame width={width} height="270px">
        <FrameContextConsumer>
          {({ document, window: iframeWindow }) => (
            <>
              {/*detecting the change of the iframe since we demonstrate via an embedded iframe.*/}
              {/*Please ignore the targetWindow & mediaQueryWindow properties if your navbar isn't running in a iframe*/}

              <Navbar
                type="primary"
                hasBorder={false}
                fixed={position}
                mediaQueryWindow={iframeWindow}
              >
                <Navbar.Title style={{ width: '100%' }}>
                  <span style={{ flex: '1 1 auto' }}>Web</span>
                  <Navbar.Switch>
                    <IconList />
                  </Navbar.Switch>
                </Navbar.Title>
                <Navbar.List justify="end">
                  <Navbar.Item hasBackground={true}>User</Navbar.Item>
                  <Navbar.Item active={true} hasBackground={true}>
                    Role
                  </Navbar.Item>
                  <Navbar.Item hasBackground={true}>Security</Navbar.Item>
                </Navbar.List>
              </Navbar>
              <div style={{ height: '400px' }}></div>
            </>
          )}
        </FrameContextConsumer>
      </DocFrame>
    </>
  );
}
