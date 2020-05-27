import React from 'react';
import {Input} from 'react-windy-ui';
import {IconSearch, InputGroup, Checkbox,Button, Loader} from 'react-windy-ui';

export default function SampleInput5(props) {
  return <>
    <div className="doc doc-row">
      <Input block placeholder="Username"/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput block>
        <Input placeholder="Searching"/>
        <div className="icon-column">
          <Loader size="small" active={true}/>
        </div>

      </Input.IconInput>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
        <InputGroup.Label>
          <Checkbox/>
        </InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <Button color="green">Search</Button>
        <Input placeholder="place......"/>
        <Input placeholder="next......"/>
        <Button color="blue">Go</Button>
        <InputGroup.Label>
          ---
        </InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <Input.IconInput leftIcon>
          <Input placeholder="This is a input"/>
          <IconSearch/>
        </Input.IconInput>
        <Button color="green">Search</Button>
        <Input placeholder="next......"/>
      </InputGroup>
    </div>
  </>;
}