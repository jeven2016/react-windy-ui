import React from 'react';
import { Select } from 'react-windy-ui';

export default function Select1_1() {
  return (
    <>
      <div className="doc doc-row space">
        <Select
          defaultValue="a"
          style={{ width: '15rem' }}
          onSelect={(value) => console.log(value)}
        >
          <Select.Option value="a">Option A</Select.Option>
          <Select.Option value="b">Option B</Select.Option>
          <Select.Option value="c">Option C</Select.Option>
        </Select>
      </div>
      <div className="doc doc-row space">
        <Select defaultValue="a" block onSelect={(value) => console.log(value)}>
          <Select.Option value="a">Option A</Select.Option>
          <Select.Option value="b">Option B</Select.Option>
          <Select.Option value="c">Option C</Select.Option>
        </Select>
      </div>
    </>
  );
}
