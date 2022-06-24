import React from 'react';
import { Col, Row, Tooltip } from 'react-windy-ui';

export default function Grid6() {
  return (
    <>
      <div className="doc sample-grid">
        <div className="doc grid">
          <Tooltip body="xs=12 sm=4">
            <Row>
              <Col sm={4}>sm-4</Col>
              <Col sm={4}>sm-4</Col>
              <Col sm={4}>sm-4</Col>
            </Row>
          </Tooltip>

          <Row>
            <Col md={4}>md-4</Col>
            <Col md={4} mdOffset={4}>
              md-4
            </Col>
          </Row>

          <Row>
            <Col sm={4} smOffset={4}>
              sm-4
            </Col>
          </Row>

          <Tooltip body="xs={12} sm={4} smOffset={4} md={2} mdOffset={2} lg={3} lgOffset={1}">
            <Row>
              <Col xs={12} sm={4} smOffset={4} md={2} mdOffset={2} lg={6} lgOffset={3}>
                Col
              </Col>
            </Row>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
