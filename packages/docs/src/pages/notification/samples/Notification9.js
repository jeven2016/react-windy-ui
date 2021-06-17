import React, {useEffect} from 'react';
import {Button, Notification,} from 'react-windy-ui';

export default function Notification9() {
  useEffect(() => {
    Notification.config({
      onClose: (itemConfig) => {
        console.log('closed a message: global onClose '+ itemConfig.key);
      },
    });
  }, []);

  const closeHandler = (itemConfig) => {
    console.log('closed a message: individual  onClose '+ itemConfig.key);
  };

  return <>
    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a simple message.',
    })}>Global onClose</Button>

    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a info message.',
      onClose: (config) => {
        closeHandler(config);
      },
    })}>Individual onClose</Button>
  </>;

}