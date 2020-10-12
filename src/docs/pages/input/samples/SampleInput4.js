import React from 'react';
import {Input, InputGroup} from 'react-windy-ui';

export default function SampleInput4(props) {
  return <>
    <div className="doc doc-row">
      <InputGroup size="small">
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup size="medium">
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup size="large">
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
      </InputGroup>
    </div>
  </>;
}