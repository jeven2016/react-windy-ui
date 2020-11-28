import React from 'react';
import {Checkbox, Input, InputGroup, Loader} from 'react-windy-ui';

export default function Input6(props) {
  return <>
    <div className="doc doc-row">
      <Input disabled placeholder="Username"/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput block disabled placeholder="Searching"
                       icon={<Loader size="small" active={true}/>}/>
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