import React, {useState} from 'react';
import {Select, Toggle} from 'react-windy-ui';

export default function Select10() {
  const [disabled, setDisabled] = useState(true);
  return <>
    <div className="doc doc-row">
      <Toggle active={disabled} onChange={active => setDisabled(active)}
              label='Disabled'/>
    </div>
    <div className="doc doc-row space">
      <Select defaultValue="a"
              disabled={disabled}
              onSelect={(value) => console.log(value)}>
        <Select.Option value="a">Option A</Select.Option>
        <Select.Option value="b">Option B</Select.Option>
        <Select.Option value="c">Option C</Select.Option>
      </Select>
    </div>
    <div className="doc doc-row space">
      <Select defaultValue={["a", "b"]}
              multiSelect
              placeholder="select items"
              disabled={disabled}
              onSelect={(value) => console.log(value)}>
        <Select.Option value="a">Option A</Select.Option>
        <Select.Option value="b">Option B</Select.Option>
        <Select.Option value="c">Option C</Select.Option>
      </Select>
    </div>
  </>;

}