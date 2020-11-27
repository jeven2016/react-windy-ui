import React from "react";
import {Button, IconCalendar, Notification, PopConfirm} from 'react-windy-ui';

export default function Pc3() {
  const onOk = () => {
    Notification.mini({body: "You clicked 'OK' button.", position: 'topCenter'})
  }

  const onCancel = () => {
    Notification.mini({body: "You clicked 'No' button.", position: 'topCenter'})
  }

  return <PopConfirm body="Are you sure to delete?" onOk={onOk}
                     icon={<IconCalendar style={{color: 'red'}}/>}
                     onCancel={onCancel} okText="确 定" cancelText="取 消">
    <Button color="red">Delete</Button>
  </PopConfirm>
}