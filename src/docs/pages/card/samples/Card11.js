import React from 'react';
import {Card, Col, Row} from 'react-windy-ui';
import pic from './girl1.jpg';

const ColStyle = {
  minWidth: '10rem',
  maxWidth: '10rem',
  margin: ' .5rem',
};

const MyCard = function() {
  return <>
    <Card block autoScale={true}>
      <Card.CardImage autoScale>
        <Card.Image src={pic} style={{pointerEvents: 'none'}}>
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
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
      <Col style={ColStyle}><MyCard/></Col>
    </Row>
  </>;
}