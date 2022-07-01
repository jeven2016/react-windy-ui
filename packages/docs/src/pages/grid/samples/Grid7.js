import React from 'react';
import { Col, Row } from 'react-windy-ui';

export default function Grid7() {
  return (
    <>
      <div className="doc sample-grid">
        <div className="doc grid">
          <Row>
            <Col>col</Col>
            <Col>col</Col>
            <Col>col</Col>
          </Row>

          <Row>
            <Col>col</Col>
            <Col col={5}>col-5</Col>
            <Col>col</Col>
          </Row>
          <Row>
            <Col>col</Col>
            <Col col={10}>col-10</Col>
            <Col>col</Col>
          </Row>
        </div>
      </div>
    </>
  );
}
