import React, { useState } from 'react';
import { IconList, Navbar, Toggle } from 'react-windy-ui';
import DocFrame, { FrameContextConsumer } from '../../../utils/DocFrame';

export default function Navbar5() {
  const [smallWindow, setSmallWindow] = useState(false);

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

      <DocFrame width={width} height="250px">
        <FrameContextConsumer>
          {({ document, window: iframeWindow }) => (
            <Navbar type="primary" hasBorder={false} mediaQueryWindow={iframeWindow}>
              <Navbar.Title>
                <span>Navbar</span>
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
          )}
        </FrameContextConsumer>
      </DocFrame>
    </>
  );
}
