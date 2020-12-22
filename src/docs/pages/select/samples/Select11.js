import React, {useState} from 'react';
import {Radio, RadioGroup, Select} from 'react-windy-ui';

export default function Select11() {
  const [size, setSize] = useState('medium');
  return <div>
    <div className="doc doc-row">
      <RadioGroup value={size} onChange={(val) => setSize(val)}>
        <Radio value="large">
          Larget
        </Radio>

        <Radio value="medium">
          Medium
        </Radio>

        <Radio value="small">
          Small
        </Radio>
      </RadioGroup>
    </div>
    <div className="doc doc-row">
      <Select defaultValue="a"
              size={size}
              onSelect={(value) => console.log(value)}>
        <Select.Option value="a">Option A</Select.Option>
        <Select.Option value="b">Option B</Select.Option>
        <Select.Option value="c">Option C</Select.Option>
      </Select>
    </div>
    <div className="doc doc-row">
      <Select defaultValue={["a", "b"]}
              size={size}
              multiSelect
              placeholder="select items"
              onSelect={(value) => console.log(value)}>
        <Select.Option value="a">Option A</Select.Option>
        <Select.Option value="b">Option B</Select.Option>
        <Select.Option value="c">Option C</Select.Option>
      </Select>
    </div>
  </div>;

}