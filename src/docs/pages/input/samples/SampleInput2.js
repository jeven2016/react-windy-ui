import React from 'react';
import {Input, IconSearch} from 'react-windy-ui';

export default function SampleInput2(props) {
  return <>
    <div>
      <Input.IconInput placeholder="This is a input" icon={<IconSearch/>}/>
    </div>
    <div style={{marginTop: '1rem'}}>
      <Input.IconInput size="medium" leftIcon placeholder="This is a input"
                       icon={<IconSearch/>}/>
    </div>

    <div style={{marginTop: '1rem'}}>
      <Input.IconInput size="large" leftIcon placeholder="This is a input"
                       icon={<IconSearch/>}/>
    </div>
  </>;
}