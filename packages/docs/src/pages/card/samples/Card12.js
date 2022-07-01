import React from 'react';
import { Card } from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card12() {
  return (
    <>
      <Card block autoScale style={{ width: '15rem' }}>
        <Card.CardImage autoScale>
          <Card.Image src={pic} onClick="return false"></Card.Image>
          <Card.OverlayTitle>
            <h2>A Picture</h2>
            <h6>The description for this picture</h6>
          </Card.OverlayTitle>
        </Card.CardImage>
      </Card>
    </>
  );
}
