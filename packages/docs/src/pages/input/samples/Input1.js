import React, {useState} from 'react';
import {Input} from 'react-windy-ui';

export default function Input1(props) {
  const [value, setValue] = useState('');

  return <>
    <div className="doc doc-row space">
      <Input placeholder="default" value={value}
             onChange={(e) => setValue(e.target.value)}/>
    </div>
    <div className="doc doc-row space">
      <Input placeholder="large size" size='large'/>
    </div>
    <div className="doc doc-row space">
      <Input placeholder="medium size" size='medium'/>
    </div>
    <div className="doc doc-row space">
      <Input placeholder="small size" size='small'/>
    </div>
  </>;
}