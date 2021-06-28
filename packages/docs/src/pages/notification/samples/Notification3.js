import React from 'react';
import {Button, Notification} from 'react-windy-ui';

export default function Notification3() {
  return <>
    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'topLeft',
    })}>topLeft</Button>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'topRight',
    })}>topRight</Button>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'topCenter',
    })}>topCenter</Button>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'bottomLeft',
    })}>bottomLeft</Button>

    <Button onClick={() => Notification.info({
      title: 'Simple Message',
      body: 'This is a simple message.',
      position: 'bottomRight',
    })}>bottomRight</Button>
  </>;

}