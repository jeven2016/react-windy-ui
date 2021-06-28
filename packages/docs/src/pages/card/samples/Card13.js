import React, {useState} from 'react';
import {Card, Loader, Toggle} from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card13() {
  const [showMask, enableMask] = useState(true);
  const [active, setActive] = useState(true);
  return <>
    <div className="doc doc-row">
      <Toggle active={active} onChange={val => setActive(val)}
              label='Active'/>
    </div>
    <div className="doc doc-row">
      <Toggle active={showMask} onChange={val => enableMask(val)}
              label='Dark Mask'/>
    </div>
    <div style={{width: '15rem'}}>
      <Loader darkMask={showMask}
              active={active}>
        <Card block>
          <Card.CardImage autoScale>
            <Card.Image src={pic} onClick="return false">
            </Card.Image>
            <Card.OverlayTitle>
              <h3>A Picture</h3>
              <h6>The description for this picture</h6>
            </Card.OverlayTitle>
          </Card.CardImage>
        </Card>
      </Loader>
    </div>
  </>;
}