import React from 'react';
import {Card} from 'react-windy-ui';
import pic from './girl1.jpg';

export default function Card7() {
  return <>
    <Card style={{width: "15rem"}}>
      <Card.CardImage autoScale>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h4>A Picture</h4>
          <h5>The description for this picture</h5>
        </Card.OverlayTitle>
      </Card.CardImage>
    </Card>
  </>;
}