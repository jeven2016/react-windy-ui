import React from 'react';
import { Col, Row, Tooltip } from 'react-windy-ui';

export default function Grid5() {
  return (
    <>
      <div className="doc sample-grid">
        <div className="doc grid">
          <Row justify="around">
            <Tooltip body="order=3">
              <Col xs={3} order={3}>
                First
              </Col>
            </Tooltip>
            <Tooltip body="order=1">
              <Col xs={3} order={1}>
                Second
              </Col>
            </Tooltip>
            <Tooltip body="order=2">
              <Col xs={3} order={2}>
                Last
              </Col>
            </Tooltip>
          </Row>
        </div>
      </div>
    </>
  );
}
