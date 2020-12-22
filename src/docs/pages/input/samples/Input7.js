import React, {useState} from 'react';
import {Input, Toggle, IconSearch} from 'react-windy-ui';

export default function Input7(props) {
  const [hasBox, enableBox] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={hasBox} onChange={v => enableBox(v)}
              content={{on: 'Box', off: 'Box'}}/>
    </div>
    <div className="doc doc-row space">
      <Input hasBox={hasBox} placeholder="large size" size='large'/>
    </div>
    <div className="doc doc-row space">
      <Input hasBox={hasBox} type="password" placeholder="Password"/>
    </div>
    <div className="doc doc-row space">
      <Input hasBox={hasBox} placeholder="This is a input"
             icon={<IconSearch/>}/>
    </div>
  </>;
}