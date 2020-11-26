import React, {useState} from 'react';
import {Button, Badge, RadioGroup, Radio} from 'react-windy-ui';

export default function Badge2() {
  const [color, setColor] = useState('info');

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Color:</span>
      <RadioGroup defaultValue="info"
                  onChange={(val) => setColor(val)}>
        <Radio value="info">
          info
        </Radio>
        <Radio value="ok">
          ok
        </Radio>
        <Radio value="gray">
          gray
        </Radio>
        <Radio value="warning">
          warning
        </Radio>
        <Radio value="error">
          error
        </Radio>
        <Radio value="dark">
          dark
        </Radio>
      </RadioGroup>
    </div>
    <Badge body="8" color={color}>
      <Button>Comments</Button>
    </Badge>
  </>;

}