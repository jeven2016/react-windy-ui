import React from 'react';
import {Button, Notification} from 'react-windy-ui';

export default function Notification1() {
  return <>
    <Button onClick={() =>
      Notification.info('Hello, this is a message.')}>
      info
    </Button>

    <Button onClick={() =>
      Notification.warning({
        body: 'Hello, this is a message.',
      })}>
      warning
    </Button>

    <Button onClick={() =>
      Notification.ok({
        title: 'Message',
        body: 'Hello, this is a message.',
        filled: true,
      })}>
      error
    </Button>
  </>;

}