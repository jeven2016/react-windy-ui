import React from 'react';
import {Checkbox, Input, InputGroup, Loader} from 'react-windy-ui';

export default function SampleInput6(props) {
  return <>
    <div className="doc doc-row">
      <Input disabled placeholder="Username"/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput block disabled>
        <Input placeholder="Searching"/>
        <i className="svg icon">
          <Loader size="small" active={true}/>
        </i>

      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <InputGroup.Label>$</InputGroup.Label>
        <Input disabled placeholder="money......"/>
        <InputGroup.Label>
          <Checkbox disabled value={true}/>
        </InputGroup.Label>
      </InputGroup>
    </div>
  </>;
}