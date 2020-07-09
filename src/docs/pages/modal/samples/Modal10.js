import React, {useRef} from 'react';
import {Button, Modal} from 'react-windy-ui';

export default function Modal10() {
  const timerRef = useRef(null);
  const open = () => {
    const modal = Modal.info({
      header: 'Info',
      type: 'primary',
      body: 'Body',
      okText: 'OK',
      onOk: () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
      },
    });

    let i = 0;
    const seconds = 5;
    timerRef.current = setInterval(() => {
      if (i++ > seconds) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }

      //update the modal
      modal.update({
        header: `Waiting for ${seconds} seconds`,
        title: 'A timer is running',
        body: `There are ${seconds - i} second(s) left.`,
        okText: `Waiting`,
      });
    }, 1000);

  };

  return <>
    <Button type="primary" onClick={open}>Open</Button>

  </>;
}