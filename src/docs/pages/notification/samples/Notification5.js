import React, {useEffect, useState} from 'react';
import {Button, Input, Notification, Select} from 'react-windy-ui';

export default function Notification5() {
  const [top, setTop] = useState('5rem');
  const [position, setPosition] = useState('topRight');

  useEffect(() => {
    Notification.config({top, position});
  }, [top, position]);

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Top:</span>
      <Input value={top} onChange={e => setTop(e.target.value)}/>
    </div>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Position:</span>
      <Select value={position}
              onSelect={value => setPosition(value)}>
        <Select.Option value="topLeft">topLeft</Select.Option>
        <Select.Option value="topCenter">topCenter</Select.Option>
        <Select.Option value="topRight">topRight</Select.Option>
        <Select.Option value="bottomLeft">bottomLeft</Select.Option>
        <Select.Option value="bottomRight">bottomRight</Select.Option>
      </Select>
    </div>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
    })}>info</Button>

    <Button onClick={() => Notification.mini({
      body: 'This is a message.',
    })}>mini</Button>
  </>;

}