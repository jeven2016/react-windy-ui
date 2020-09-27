import React from 'react';
import {Input, IconSearch} from 'react-windy-ui';

//todo  update the document
export default function SampleInput2(props) {
  return <>
    <div className="doc doc-row">
      <Input.IconInput size="small" placeholder="This is a input" icon={<IconSearch/>}/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput placeholder="This is a input" icon={<IconSearch/>}/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="large" placeholder="This is a input" icon={<IconSearch/>}/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="small" leftIcon placeholder="This is a input" icon={<IconSearch/>}/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput size="medium" leftIcon placeholder="This is a input"
                       icon={<IconSearch/>}/>
    </div>

    <div className="doc doc-row">
      <Input.IconInput size="large" leftIcon placeholder="This is a input"
                       icon={<IconSearch/>}/>
    </div>
  </>;
}