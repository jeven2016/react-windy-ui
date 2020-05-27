import React from 'react';
import {Select, Divider} from 'react-windy-ui';

export default function Select2() {
  return <>
    <Select style={{width: '10rem'}}
            defaultValue="shanghai"
            searchable
            onChange={(next) => console.log(`state changed to : ${next}`)}>
      <Select.Option value="beijing">
        Beijing
      </Select.Option>
      <Divider/>
      <Select.Option value="nanjing">Nanjing</Select.Option>
      <Divider/>
      <Select.Option value="shanghai">Shanghai</Select.Option>
      <Divider/>
      <Select.Option value="xian">XiAn</Select.Option>
      <Divider/>
      <Select.Option value="ny">纽约</Select.Option>
      <Divider/>
      <Select.Option value="hk">香港</Select.Option>
    </Select>
  </>;

}