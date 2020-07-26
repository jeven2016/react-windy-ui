import React, {useState} from 'react';
import {Card, Col, Toggle, Loader} from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card13() {
  const [showMask, enableMask] = useState(true);
  const [active, setActive] = useState(true);
  return <>
    <div className="doc doc-row">
      <Toggle active={active} onChange={val => setActive(val)}
              content={{on: 'Active', off: 'Active'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle active={showMask} onChange={val => enableMask(val)}
              content={{on: 'Dark Mask', off: 'Dark Mask'}}/>
    </div>
    <div style={{width: '15rem'}}>
      <Loader type="primary" color="blue"
              darkMask={showMask}
              active={active}
              block>
        <Card block>
          <Card.CardImage autoScale>
            <Card.Image src={pic}>
            </Card.Image>
            <Card.OverlayTitle>
              <h2>A Picture</h2>
              <h6>The description for this picture</h6>
              <h6>The description for this picture</h6>
            </Card.OverlayTitle>
          </Card.CardImage>
        </Card>
      </Loader>
    </div>
  </>;
}