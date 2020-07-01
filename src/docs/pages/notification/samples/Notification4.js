import React, {useEffect, useState} from 'react';
import {Button, Input, Notification, Toggle} from 'react-windy-ui';

export default function Notification4() {
  const [duration, setDuration] = useState(3000);
  const [hasCloseIcon, setCloseIcon] = useState(true);

  useEffect(() => {
    Notification.config({
      hasCloseIcon,
      duration,
    });
  }, [hasCloseIcon, duration]);

  const changeCloseIcon = (val) => {
    setCloseIcon(val);
  };

  const changeDuration = (e) => {
    setDuration(parseInt(e.target.value));
  };

  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Duration:</span>
      <Input value={duration}
             onChange={val => changeDuration(val)}/> &nbsp;ms
    </div>
    <div className="doc doc-row">
      <Toggle active={hasCloseIcon} onChange={val => changeCloseIcon(val)}
              content={{on: 'Close icon', off: 'Close icon'}}/>
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