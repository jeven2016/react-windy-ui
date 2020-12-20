import React from 'react';
import {Select} from 'react-windy-ui';

export default function Select7() {
  return <>
    <Select style={{width: '20rem'}}
            activeBy='click'
            defaultValue="sh"
            multiSelect={true}
            searchable={true}
            onSelect={(val) => console.log(val)}
            onActiveChange={(next) => console.log(
                `state changed to : ${next}`)}>
      <Select.Option value="bj">Beijing</Select.Option>
      <Select.Option value="nj">Nanjing</Select.Option>
      <Select.Option value="sh">Shanghai</Select.Option>
      <Select.Option value="xian">XiAn</Select.Option>
      <Select.Option value="ny">纽约</Select.Option>
      <Select.Option value="hk">香港</Select.Option>
    </Select>
  </>;

}