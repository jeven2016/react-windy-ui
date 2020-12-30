import React, {useState} from 'react';
import {Button, Drawer, RadioGroup, Radio} from 'react-windy-ui';

export default function Drawer2() {
  const [active, setActive] = useState(false);
  const [position, setPosition] = useState('left');

  //for left & right, you need to specify a width, on the contrary the height is needed
  //for top & bottom
  const style = position === 'left' || position === 'right'
      ? {width: '40%'}
      : {height: '40%'};

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Position:</span>
      <RadioGroup defaultValue={position} onChange={(val) => setPosition(val)}>
        <Radio value="left">left</Radio>
        <Radio value="top">top</Radio>
        <Radio value="right">right</Radio>
        <Radio value="bottom">bottom</Radio>
      </RadioGroup>
    </div>
    <Button type="primary" onClick={() => setActive(true)}>Active</Button>
    <Drawer active={active}
            position={position}
            style={style}
            onChange={(show) => setActive(show)}>
    </Drawer>
  </>;
}