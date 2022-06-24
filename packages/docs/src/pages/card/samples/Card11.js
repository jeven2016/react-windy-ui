import React, { useState } from 'react';
import { Card, Col, Row, Space, Select } from 'react-windy-ui';
import pic from './girl1.jpg';

const MyCard = function ({ animation }) {
  return (
    <>
      <Card block autoScale={animation === 'scale'} rise={animation === 'rise'}>
        <Card.CardImage autoScale={false}>
          <Card.Image src={pic} style={{ pointerEvents: 'none' }}></Card.Image>
          <Card.OverlayTitle>
            <h2>A Picture</h2>
            <h6>The description for this picture</h6>
          </Card.OverlayTitle>
        </Card.CardImage>
      </Card>
    </>
  );
};

export default function Card11() {
  const [animation, setAnimation] = useState('scale');
  return (
    <>
      <div className="doc doc-row space">
        <Space>
          <span>Animation:</span>
          <Select
            value={animation}
            onSelect={(value) => setAnimation(value)}
            style={{ width: '10rem' }}
          >
            <Select.Option value="scale">scale</Select.Option>
            <Select.Option value="rise">rise</Select.Option>
          </Select>
        </Space>
      </div>
      <Row gutter={{ x: 16, y: 16 }}>
        <Col xs={12} sm={6} md={3}>
          <MyCard animation={animation} />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <MyCard animation={animation} />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <MyCard animation={animation} />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <MyCard animation={animation} />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <MyCard animation={animation} />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <MyCard animation={animation} />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <MyCard animation={animation} />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <MyCard animation={animation} />
        </Col>
      </Row>
    </>
  );
}
