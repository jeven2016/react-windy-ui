import React from 'react';
import {Select, Divider} from 'react-windy-ui';

export default function Select3() {
  return <>
    <Select defaultValue="sh"
            showLoader={true}
            onSelect={(value) => console.log(`${value}`)}>
      <Select.Option value="bj">
        Beijing
      </Select.Option>
      <Divider/>
      <Select.Option value="nj">Nanjing</Select.Option>
      <Divider/>
      <Select.Option value="sh">Shanghai</Select.Option>
      <Divider/>
      <Select.Option value="xa">XiAn</Select.Option>
      <Divider/>
      <Select.Option value="ny">纽约</Select.Option>
      <Divider/>
      <Select.Option value="hk">香港</Select.Option>
    </Select>
  </>;

}