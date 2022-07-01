import React from 'react';
import { TextField, Space, IconPwdVisible, IconAccount } from 'react-windy-ui';

export default function TextField3() {
  return (
    <>
      <Space wrap gutter={{ x: 8, y: 8 }}>
        <TextField label="Name" required={true} leftItems={[<IconAccount />]} labelFixed={true} />
        <TextField
          label="Password"
          nativeType="password"
          required={true}
          rightItems={<IconPwdVisible />}
        />
        <TextField
          label="Weight"
          labelFixed={false}
          placeholder="Your Weight"
          rightItems={<span>KG</span>}
        />
      </Space>
    </>
  );
}
