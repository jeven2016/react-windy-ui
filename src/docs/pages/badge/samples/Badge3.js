import React, {useState} from 'react';
import {Badge, Button, Input} from 'react-windy-ui';

export default function Badge3() {
  const [color, setColor] = useState('#ff350e');

  return <>
    <div className="doc doc-row space">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Color:</span>
      <Input value={color} onChange={(e) => setColor(e.target.value)}/>
    </div>
    <Badge body="8" color={color}>
      <Button>Comments</Button>
    </Badge>
  </>;

}