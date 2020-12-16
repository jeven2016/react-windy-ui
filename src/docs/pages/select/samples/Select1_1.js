import React from 'react';
import {Select} from 'react-windy-ui';

export default function Select1() {
  return <>
    <div className="doc doc-row">
      <Select defaultValue="nj"
              style={{width: '8rem'}} //todo
              onSelect={(value) => console.log(value)}>
        <Select.Option value="bj">
          Beijing
        </Select.Option>
        <Select.Option value="nj">Nanjing</Select.Option>
        <Select.Option value="sh">Shanghai</Select.Option>
        <Select.Option value="sz">Suzhou</Select.Option>
      </Select>
    </div>
    <div className="doc doc-row">
      <Select defaultValue="nj"
              block
              onSelect={(value) => console.log(value)}>
        <Select.Option value="bj">
          Beijing
        </Select.Option>
        <Select.Option value="nj">Nanjing</Select.Option>
        <Select.Option value="sh">Shanghai</Select.Option>
        <Select.Option value="sz">Suzhou</Select.Option>
      </Select>
    </div>
  </>;

}