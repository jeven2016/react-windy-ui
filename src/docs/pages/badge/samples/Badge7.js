import React, {useState} from 'react';
import {Badge, Button, Toggle} from 'react-windy-ui';

export default function Badge7() {
  const [active, setActive] = useState(true);

  return <>
    <div className="doc doc-row">
      <Toggle active={active} label='Active'
              onChange={(val) => setActive(val)}/>
    </div>
    <Badge type="tag" color="info" active={active}>
      Tag
    </Badge>

    <Badge body="Hot!" active={active} style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>

    <Badge type="dot" active={active} style={{marginLeft: '2rem'}}>
      <Button>Home</Button>
    </Badge>
  </>;

}