import React from 'react';
import { TextField, Space } from 'react-windy-ui';

export default function TextField2() {
  return (
    <>
      <Space wrap gutter={{ x: 8, y: 8 }}>
        <TextField shape="underline" label="Name" placeholder="Enter Name" required={true} />
        <TextField shape="underline" label="Password" nativeType="password" required={true} />
        <TextField shape="underline" label="Address" labelFixed={true} placeholder="Your Address" />
      </Space>
    </>
  );
}
