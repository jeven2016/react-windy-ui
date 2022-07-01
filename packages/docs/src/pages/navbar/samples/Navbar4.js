import React, { useState } from 'react';
import { IconList, Toggle, Navbar } from 'react-windy-ui';
import DocFrame, { FrameContextConsumer } from '../../../utils/DocFrame';

export default function Navbar4() {
  const [smallWindow, setSmallWindow] = useState(false);

  const width = smallWindow ? '500px' : '100%';
  return (
    <>
      <div className="doc doc-row">
        <Toggle active={smallWindow} label="Small Window" onChange={(val) => setSmallWindow(val)} />
      </div>

      {/*the doc frame is an iframe for demo*/}
      <DocFrame width={width} height="270px">
        <FrameContextConsumer>
          {({ document, window: iframeWindow }) => (
            // detecting the change of the iframe since we demonstrate via an embedded iframe.
            // Please ignore the mediaQueryWindow if your project is a single page application
            <Navbar type="primary" hasBorder={false} id="nav4" mediaQueryWindow={iframeWindow}>
              <Navbar.Title>
                <Navbar.Switch>
                  <IconList size="small" />
                </Navbar.Switch>
                <span>Navbar</span>
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
