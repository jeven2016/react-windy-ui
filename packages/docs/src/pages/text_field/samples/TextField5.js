import React from 'react';
import { IconAccount, Space, TextField, IconPwdVisible } from 'react-windy-ui';

export default function TextField5() {
  return (
    <>
      <Space wrap gutter={{ y: 16 }} direction="vertical" block>
        <TextField
          block={true}
          label="Name"
          required={true}
          leftItems={[<IconAccount />]}
          labelFixed={true}
        />
        <TextField
          block={true}
          label="Password"
          nativeType="password"
          required={true}
          rightItems={<IconPwdVisible />}
        />
        <TextField
          block={true}
          label="Weight"
          labelFixed={false}
          placeholder="Your Weight"
          rightItems={<span>KG</span>}
        />

        <TextField
          block={true}
          label="Name"
          shape="underline"
          placeholder="Enter Name"
          required={true}
        />
        <TextField
          block={true}
          shape="underline"
          label="Password"
          nativeType="password"
          required={true}
          rightItems={<span>PWD</span>}
        />
      </Space>
    </>
  );
}
