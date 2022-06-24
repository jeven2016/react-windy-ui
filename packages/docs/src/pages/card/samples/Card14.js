import React, { useState } from 'react';
import { Button, Card, Space, Toggle } from 'react-windy-ui';
import pic from './girl1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default function Card14() {
  const [darkMask, setDarkMask] = useState(true);
  return (
    <>
      <div className="doc doc-row">
        <Toggle active={darkMask} onChange={(val) => setDarkMask(val)} label="Dark Mask" />
      </div>

      <div style={{ width: '15rem' }}>
        <Card block>
          <Card.Curtain
            darkMask={darkMask}
            closeContent={
              <div
                className="flex-adjust align-center "
                style={{ height: '100%', padding: '0 1rem' }}
              >
                <Space direction="vertical">
                  <Button
                    color="white"
                    hasOutlineBackground={false}
                    outline
                    invertedOutline
                    hasMinWidth
                    leftIcon={<FontAwesomeIcon icon={faPlus} />}
                  >
                    Add
                  </Button>
                  <div className="text color-white">This is the description of this picture.</div>
                </Space>
              </div>
            }
          >
            <Card.CardImage>
              <Card.Image src={pic} onClick="return false"></Card.Image>
              <Card.OverlayTitle>
                <h3>A Picture</h3>
                <h6>The description for this picture</h6>
              </Card.OverlayTitle>
            </Card.CardImage>
          </Card.Curtain>

          <Card.Row>A Movie Star</Card.Row>
        </Card>
      </div>
    </>
  );
}
