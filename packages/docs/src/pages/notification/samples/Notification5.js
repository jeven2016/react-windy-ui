import React from 'react';
import {Button, Notification} from 'react-windy-ui';

export default function Notification5() {

  const sendMessage = () => {
    Notification.info({
      title: 'Simple Message',
      body: 'Will close in 2 seconds.',

      duration: 3000,
      position: 'topRight',

      alertProps: {
        filled: true,
        style: {
          background: 'black',
        },
      },
    });
  };

  return <>
    <Button color="black" onClick={() => sendMessage()}>Message</Button>
  </>;
}