import React, {useState} from 'react';
import {Badge, Button, Toggle} from 'react-windy-ui';

export default function Badge8() {
  const [shake, setShake] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={shake} label='Shake'
              onChange={(val) => setShake(val)}/>
    </div>
    <Badge type="tag" color="info" shake={shake}>
      Tag
    </Badge>

    <Badge body="Hot!" shake={shake} style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>

    <Badge type="dot" shake={shake} style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>
  </>;

}