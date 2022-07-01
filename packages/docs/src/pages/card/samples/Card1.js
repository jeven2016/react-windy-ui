import React, { useState } from 'react';
import { Card, Toggle } from 'react-windy-ui';

export default function Card1() {
  const [hasBorder, enableBorder] = useState(false);
  const [hasBox, enableBox] = useState(true);

  return (
    <>
      <div className="doc doc-row">
        <Toggle active={hasBorder} onChange={(val) => enableBorder(val)} label="Border" />
      </div>
      <div className="doc doc-row">
        <Toggle active={hasBox} onChange={(val) => enableBox(val)} label="Box shadow" />
      </div>

      <Card hasBox={hasBox} hasBorder={hasBorder}>
        <Card.Header>Header</Card.Header>
        <Card.Body>Body</Card.Body>
        <Card.Row>Row</Card.Row>
        <Card.Footer>Footer</Card.Footer>
      </Card>
    </>
  );
}
