import React, { useState } from 'react';
import { Divider, Select } from 'react-windy-ui';

export default function Select6() {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState(0);

  const change = (next, e) => {
    setActive(next);
  };

  const select = (val, e) => {
    if (val === 1) {
      setActive(false);
    } else {
      setActive(true);
    }
    setValue(val);
  };

  return (
    <>
      <div className="doc doc-row space">
        <Select
          activeBy="click"
          value={value}
          active={active}
          onActiveChange={change}
          onSelect={select}
        >
          <Select.Option value={0}>Won't close1</Select.Option>
          <Divider />
          <Select.Option value={1}>Close</Select.Option>
          <Divider />
          <Select.Option value={2}>Won't close2</Select.Option>
          <Divider />
          <Select.Option value={3}>Won't close3</Select.Option>
          <Divider />
          <Select.Option value={4}>Won't close4</Select.Option>
        </Select>
      </div>
    </>
  );
}
