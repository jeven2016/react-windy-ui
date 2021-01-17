import React from 'react';
import {Col, Row} from 'react-windy-ui';

const Content = () => {
  return <div style={{
    background: '#0ca0ff',
    height: '8rem',
    lineHeight: '8rem',
    textAlign: 'center',
    color: '#fff',
    borderRadius: '.25rem',
    fontWeight: '500'
  }}>
    Col
  </div>
};

export default function Grid8() {
  return <>
    <div className="doc doc-row" style={{background: 'rgba(86, 61, 124, 0.15)'}}>
      <Row gutter={{x: 16, y: 16}}>
        <Col><Content/></Col>
        <Col><Content/></Col>
        <Col><Content/></Col>
      </Row>
      <Row gutter={{x: 16, y: 16}}>
        <Col><Content/></Col>
        <Col><Content/></Col>
        <Col><Content/></Col>
      </Row>
    </div>
  </>;
}