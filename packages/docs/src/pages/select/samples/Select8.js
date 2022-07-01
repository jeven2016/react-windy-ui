import React, { useState } from 'react';
import { Select } from 'react-windy-ui';

export default function Select8() {
  const [values, setValues] = useState(['bj', 'nj']);

  return (
    <>
      <Select
        style={{ width: '25rem' }}
        multiSelect={true}
        searchable={false}
        value={values}
        onRemove={(v) => setValues(values.filter((val) => val !== v))}
        onSelect={(valueArray) => setValues(valueArray)}
      >
        <Select.Option value="bj">Beijing</Select.Option>
        <Select.Option value="nj">Nanjing</Select.Option>
        <Select.Option value="sh">Shanghai</Select.Option>
        <Select.Option value="xian">XiAn</Select.Option>
        <Select.Option value="ny">纽约</Select.Option>
        <Select.Option value="hk">香港</Select.Option>
      </Select>
    </>
  );
}
