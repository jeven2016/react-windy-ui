import React from 'react';
import { Button, Notification, PopConfirm } from 'react-windy-ui';

export default function Pc2() {
  const onOk = () => {
    Notification.mini({
      body: "You clicked 'OK' button.",
      position: 'topCenter',
      hasCloseIcon: false
    });
  };

  const onCancel = () => {
    Notification.mini({ body: "You clicked 'No' button.", position: 'topCenter' });
  };

  return (
    <PopConfirm body="Are you sure to delete?" onOk={onOk} onCancel={onCancel}>
      <Button color="red">Delete</Button>
    </PopConfirm>
  );
}
