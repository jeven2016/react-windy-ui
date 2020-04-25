import React from 'react';
import {Input, IconSearch} from 'react-windy-ui';

export default function SampleInput2(props) {
  return <>
    <div>
      <Input.IconInput>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
    <div style={{marginTop: '1rem'}}>
      <Input.IconInput size="medium" leftIcon>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>

    <div style={{marginTop: '1rem'}}>
      <Input.IconInput size="large" leftIcon>
        <Input placeholder="This is a input"/>
        <IconSearch/>
      </Input.IconInput>
    </div>
  </>;
}