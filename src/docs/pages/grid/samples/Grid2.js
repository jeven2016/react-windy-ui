import React from 'react';
import {Row, Col} from 'react-windy-ui';

export default function Grid2() {
  return <>
    <div className="doc sample-grid">
      <Row>
        <Col xs={4}>col-4</Col>
        <Col xs={4} xsOffset={4}>col-4</Col>
      </Row>
      <Row>
        <Col xs={3} xsOffset={3}>col-3</Col>
        <Col xs={3} xsOffset={3}>col-3</Col>
      </Row>
      <Row>
        <Col xs={4} xsOffset={4}>col-4</Col>
      </Row>
    </div>
  </>;
}