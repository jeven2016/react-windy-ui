import React from 'react';
import {Select} from 'react-windy-ui';

export default function Select1() {
  return <>
    <Select style={{width: '10rem'}} activeBy="click"
            defaultValue="beijing"
            onChange={(item) => console.log(item)}>
      <Select.Option value="beijing">
        Beijing
      </Select.Option>
      <Select.Option value="nanjing">Nanjing</Select.Option>
      <Select.Option value="shanghai">Shanghai</Select.Option>
      <Select.Option value="xian">Suzhou</Select.Option>
    </Select>

  </>;

}