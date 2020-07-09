import React from 'react';
import {Button, Notification, Toggle} from 'react-windy-ui';

export default function Notification7() {

  const toggle = (active) => {
    if (active) {
      Notification.config({duration: 5000});
    } else {
      Notification.config({duration: 0});//0 or negative number
    }
  };

  const sendMessage = () => {
    Notification.simple(
        'This is a message. duration=' + Notification.getConfig().duration);
  };

  return <>
    <div className="doc doc-row">
      <Toggle defaultActive={true} onChange={active => toggle(active)}
              content={{
                on: 'Auto close',
                off: 'Auto close',
              }}/>
    </div>
    <Button type="primary" onClick={() => sendMessage()}>Message</Button>
  </>;
}