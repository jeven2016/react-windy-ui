import React from 'react';
import {IconSearch, Input} from 'react-windy-ui';

//todo  update the document
export default function SampleInput2(props) {
  return <>
    <div className="doc doc-row">
      <Input size="small" placeholder="This is a input" icon={<IconSearch/>}/>
    </div>
    <div className="doc doc-row">
      <Input placeholder="This is a input" icon={<IconSearch/>}/>
    </div>
    <div className="doc doc-row">
      <Input size="large" placeholder="This is a input" icon={<IconSearch/>}/>
    </div>
    <div className="doc doc-row">
      <Input size="small" leftIcon placeholder="This is a input" icon={<IconSearch/>}/>
    </div>
    <div className="doc doc-row">
      <Input size="medium" leftIcon placeholder="This is a input"
                       icon={<IconSearch/>}/>
    </div>

    <div className="doc doc-row">
      <Input size="large" leftIcon placeholder="This is a input"
                       icon={<IconSearch/>}/>
    </div>
  </>;
}