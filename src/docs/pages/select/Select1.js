import React from 'react';
import {Select} from 'react-windy-ui';

export default function Select1() {
  return <>
    <Select defaultValue="nj"
            onSelect={(value) => console.log(value)}>
      <Select.Option value="bj">
        Beijing
      </Select.Option>
      <Select.Option value="nj">Nanjing</Select.Option>
      <Select.Option value="sh">Shanghai</Select.Option>
      <Select.Option value="sz">Suzhou</Select.Option>
    </Select>

  </>;

}