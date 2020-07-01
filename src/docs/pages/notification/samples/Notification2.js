import React from 'react';
import {
  Button,
  IconError,
  IconInfo,
  IconOk,
  IconWarning,
  Notification,
} from 'react-windy-ui';

export default function Notification2() {
  Notification.config({
    position: 'topRight',
  });
  return <>
    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
    })}>info</Button>

    <Button onClick={() => Notification.ok({
      title: 'Simple Message',
      body: 'This is a info message.',
      icon: <IconInfo/>,
    })}>ok</Button>

    <Button onClick={() => Notification.warning({
      title: 'Simple Message',
      body: 'This is a ok message.',
      icon: <IconOk style={{color: '#49b847'}}/>,
    })}>warning</Button>

    <Button onClick={() => Notification.error({
      title: 'Simple Message',
      body: 'This is a warning message.',
      icon: <IconWarning style={{color: '#c88f3f'}}/>,
    })}>error</Button>

    <Button onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a error message.',
      icon: <IconError style={{color: '#d82b3a'}}/>,
    })}>simple</Button>
  </>;

}