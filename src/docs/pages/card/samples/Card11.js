import React from 'react';
import {Card, Col, Row} from 'react-windy-ui';
import pic from './girl1.jpg';

const MyCard = function() {
  return <>
    <Card block autoScale={true}>
      <Card.CardImage autoScale>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h2>A Picture</h2>
          <h6>The description for this picture</h6>
        </Card.OverlayTitle>
      </Card.CardImage>
    </Card>
  </>;
};

export default function Card11() {
  return <>
    <Row>
      <Col style={{
        minWidth: '15rem',
        maxWidth: '15rem',
        margin: ' 1rem',
      }}><MyCard/></Col>
      <Col style={{
        minWidth: '15rem',
        maxWidth: '15rem',
        margin: '1rem',
      }}><MyCard/></Col>
      <Col style={{
        minWidth: '15rem',
        maxWidth: '15rem',
        margin: '1rem',
      }}><MyCard/></Col>
    </Row>
  </>;
}