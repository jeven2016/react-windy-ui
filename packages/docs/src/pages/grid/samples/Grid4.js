import React from 'react';
import {Row, Col, Tooltip} from 'react-windy-ui';

export default function Grid4() {
  return <>
    <div className="doc sample-grid">
      <div className="doc grid">

        <Tooltip body="justify='around' align='start'">
          <Row justify="around" align="start" style={{height: '100px'}}>
            <Col xs={3} style={{height: '80px'}}/>
            <Col xs={3} style={{height: '40px'}}/>
            <Col xs={3} style={{height: '60px'}}/>
          </Row>
        </Tooltip>

        <Tooltip body="justify='around' align='center'">
          <Row justify="around" align="center" style={{height: '100px'}}>
            <Col xs={3} style={{height: '80px'}}/>
            <Col xs={3} style={{height: '40px'}}/>
            <Col xs={3} style={{height: '60px'}}/>
          </Row>
        </Tooltip>
        <Tooltip body="justify='around' align='end'">
          <Row justify="around" align="end" style={{height: '100px'}}>
            <Col xs={3} style={{height: '80px'}}/>
            <Col xs={3} style={{height: '40px'}}/>
            <Col xs={3} style={{height: '60px'}}/>
          </Row>
        </Tooltip>

      </div>
    </div>
  </>;
}