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
  return <>
    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
    })}>info</Button>

    <Button onClick={() => Notification.ok({
      title: 'Simple Message',
      body: 'This is a info message.'
    })}>ok</Button>

    <Button onClick={() => Notification.warning({
      title: 'Simple Message',
      body: 'This is a ok message.'
    })}>warning</Button>

    <Button onClick={() => Notification.error({
      title: 'Simple Message',
      body: 'This is a warning message.'
    })}>error</Button>

    <Button onClick={() => Notification.simple({
      title: 'Simple Message',
      body: 'This is a error message.',
      icon: <IconError style={{color: '#d82b3a'}}/>,
    })}>simple</Button>
  </>;

}