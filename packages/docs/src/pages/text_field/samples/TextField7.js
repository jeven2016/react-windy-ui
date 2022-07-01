import React, { useState } from 'react';
import { Space, TextField, RadioGroup, Radio } from 'react-windy-ui';

export default function TextField7() {
  const [errorType, setType] = useState(null);
  return (
    <>
      <div className="doc doc-row">
        <span style={{ marginRight: '1rem', fontWeight: '600' }}>Error Type:</span>
        <RadioGroup defaultValue={errorType} onChange={(val) => setType(val)}>
          <Radio value="ok"> ok</Radio>
          <Radio value="warning">warning </Radio>
          <Radio value="error">error </Radio>
        </RadioGroup>
      </div>

      <Space wrap gutter={{ y: 16 }}>
        <TextField label="Name" placeholder="Enter Name" errorType={errorType} required={true} />

        <TextField
          label="Name"
          shape="underline"
          errorType={errorType}
          placeholder="Enter Name"
          required={true}
        />

        <TextField
          select={true}
          errorType={errorType}
          placeholder="Select a city"
          defaultValue="Shanghai"
          label="City"
          style={{ width: '15rem' }}
          required={true}
        >
          <option value="Beijing">Beijing</option>
          <option value="Shanghai">Shanghai</option>
          <option value="New York">New York</option>
        </TextField>
      </Space>
    </>
  );
}
