import React, { useState } from 'react';
import { Avatar, IconAccount, Space, TextField } from 'react-windy-ui';
import img from '../../../style/imgs/girl.jpg';

export default function Avatar2() {
  const [size, setSize] = useState('medium');
  return (
    <>
      <div className="doc doc-row">
        <TextField
          select={true}
          size="small"
          defaultValue="medium"
          onChange={(value) => setSize(value)}
          label="Size"
          style={{ width: '15rem' }}
        >
          <option value="large">large</option>
          <option value="medium">medium</option>
          <option value="small">small</option>
        </TextField>
      </div>
      <Space>
        <Avatar size={size}>B</Avatar>
        <Avatar size={size} extraClassName="bg-color-primary">
          B
        </Avatar>
        <Avatar size={size} style={{ background: '#49b847' }}>
          B
        </Avatar>
        <Avatar size={size} src={img} />
        <Avatar size={size}>
          <IconAccount />
        </Avatar>
      </Space>
    </>
  );
}
