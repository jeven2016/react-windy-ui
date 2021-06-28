import React from 'react';
import {
  Button, Notification, IconError,
  IconInfo,
  IconOk,
  IconWarning,
} from 'react-windy-ui';

export default function Notification8() {
  Notification.config({
    position: 'topRight',
  });
  return <>
    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a simple message.',
    })}>Simple</Button>

    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a info message.',
      icon: <IconInfo/>,
    })}>Info</Button>

    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a ok message.',
      icon: <IconOk style={{color: '#49b847'}}/>,
    })}>OK</Button>

    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a warning message.',
      icon: <IconWarning style={{color: '#c88f3f'}}/>,
    })}>Warning</Button>

    <Button type="primary" onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a error message.',
      icon: <IconError style={{color: '#d82b3a'}}/>,
    })}>Error</Button>
  </>;

}