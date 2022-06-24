import React from 'react';
import { Row, Col } from 'react-windy-ui';

export default function Grid1() {
  return (
    <>
      <div className="doc sample-grid">
        <Row>
          <Col col={12}>col-12</Col>
        </Row>
        <Row>
          <Col col={6}>col-6</Col>
          <Col col={6}>col-6</Col>
        </Row>
        <Row>
          <Col col={4}>col-4</Col>
          <Col col={4}>col-4</Col>
          <Col col={4}>col-4</Col>
        </Row>
        <Row>
          <Col col={3}>col-3</Col>
          <Col col={3}>col-3</Col>
          <Col col={3}>col-3</Col>
          <Col col={3}>col-3</Col>
        </Row>
      </div>
    </>
  );
}
