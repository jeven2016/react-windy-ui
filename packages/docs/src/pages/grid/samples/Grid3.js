import React from 'react';
import { Row, Col, Tooltip } from 'react-windy-ui';

export default function Grid3() {
  return (
    <>
      <div className="doc sample-grid">
        <div className="doc grid">
          <h5 className="text comment">justify="start"</h5>
          <Tooltip body='justify="start"'>
            <Row justify="start">
              <Col xs={5}>col-5</Col>
              <Col xs={5}>col-5</Col>
            </Row>
          </Tooltip>

          <h5 className="text comment">justify="center"</h5>
          <Tooltip body='justify="center"'>
            <Row justify="center">
              <Col xs={5}>col-5</Col>
              <Col xs={5}>col-5</Col>
            </Row>
          </Tooltip>

          <h5 className="text comment">justify="end"</h5>
          <Tooltip body='justify="end"'>
            <Row justify="end">
              <Col xs={5}>col-5</Col>
              <Col xs={5}>col-5</Col>
            </Row>
          </Tooltip>

          <h5 className="text comment">justify="around"</h5>
          <Tooltip body='justify="around"'>
            <Row justify="around">
              <Col xs={5}>col-5</Col>
              <Col xs={5}>col-5</Col>
            </Row>
          </Tooltip>
          <h5 className="text comment">justify="between"</h5>
          <Tooltip body='justify="between"'>
            <Row justify="between">
              <Col xs={5}>col-5</Col>
              <Col xs={5}>col-5</Col>
            </Row>
          </Tooltip>

          <h5 className="text comment">justify="evenly"</h5>
          <Tooltip body='justify="evenly"'>
            <Row justify="evenly">
              <Col xs={5}>col-5</Col>
              <Col xs={5}>col-5</Col>
            </Row>
          </Tooltip>
        </div>
      </div>
    </>
  );
}
