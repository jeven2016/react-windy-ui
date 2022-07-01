import React, { useState } from 'react';
import { Affix, IconList, Navbar, Toggle } from 'react-windy-ui';
import DocFrame, { FrameContextConsumer } from '../../../utils/DocFrame';

const fixedNavbarStyle = {
  background: '#333'
};

export default function Navbar11() {
  const [smallWindow, setSmallWindow] = useState(false);
  const [affixedStyle, setAffixedStyle] = useState(null);

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

      {/*the doc frame is an iframe for demo*/}
      <DocFrame width={width} height="270px" frameBorder="1px solid #333">
        <FrameContextConsumer>
          {({ document, window: iframeWindow }) => (
            <>
              {/*detecting the change of the iframe since we demonstrate via an embedded iframe.*/}
              {/*Please ignore the targetWindow & mediaQueryWindow if your navbar isn't running in a iframe*/}

              <Affix
                targetWindow={iframeWindow}
                block
                top={0}
                onChange={(affixed) => {
                  setAffixedStyle(affixed ? fixedNavbarStyle : null);
                }}
              >
                <Navbar
                  mediaQueryWindow={iframeWindow}
                  type="primary"
                  hideOnScroll={true}
                  style={{ borderRadius: '0', ...affixedStyle }}
                >
                  <Navbar.Title>
                    <Navbar.Switch>
                      <IconList />
                    </Navbar.Switch>
                    <span style={{ flex: '1 1 auto' }}>Web</span>
                  </Navbar.Title>
                  <Navbar.List justify="end">
                    <Navbar.Item hasBackground={true}>User</Navbar.Item>
                    <Navbar.Item active={true} hasBackground={true}>
                      Role
                    </Navbar.Item>
                    <Navbar.Item hasBackground={true}>Security</Navbar.Item>
                  </Navbar.List>
                </Navbar>
              </Affix>
              <div style={{ height: '700px' }}></div>
            </>
          )}
        </FrameContextConsumer>
      </DocFrame>
    </>
  );
}
