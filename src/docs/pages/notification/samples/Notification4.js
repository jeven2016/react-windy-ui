import React, {useEffect, useState} from 'react';
import {
  Button,
  Input,
  Notification,
  Toggle,
  Select,
  Tooltip,
} from 'react-windy-ui';

export default function Notification4() {
  const [duration, setDuration] = useState(5000);
  const [hasCloseIcon, setCloseIcon] = useState(true);
  const [position, setPosition] = useState('topRight');

  useEffect(() => {
    //update the global configuration of Notification
    //while the dependencies updated
    Notification.config({
      hasCloseIcon,
      duration,
      position,
    });
  }, [hasCloseIcon, duration, position]);

  const changeCloseIcon = (val) => {
    setCloseIcon(val);
  };

  const changeDuration = (e) => {
    setDuration(parseInt(e.target.value));
  };

  return <>
    <div className="doc doc-row space">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Duration:</span>
      <Tooltip
          body={<span>{`each message will be closed in ${duration}ms`}</span>}>
        <Input value={duration}
               onChange={val => changeDuration(val)}/>
      </Tooltip>

    </div>
    <div className="doc doc-row">
      <Toggle active={hasCloseIcon} onChange={val => changeCloseIcon(val)}
              content={{on: 'Close icon', off: 'Close icon'}}/>
    </div>
    <div className="doc doc-row space">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Position:</span>
      <Select value={position} onSelect={value => setPosition(value)}>
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

    <Button onClick={() => Notification.mini(
        'This is a message.',
    )}>mini</Button>
  </>;

}