import React, {useRef, useState} from 'react';
import {Select, Divider} from 'react-windy-ui';

export default function Select4() {
  const [active, setActive] = useState(true);
  const currentValue = useRef(1);

  const change = (next) => {
    console.log('changed to: ' + next);
    if (!next && currentValue.current !== 1) {
      return;
    }
    setActive(next);
  };

  const select = (value) => {
    currentValue.current = value;
  };

  return <>
    <Select style={{width: '10rem'}}
            activeBy="hover"
            defaultValue={currentValue.current}
            active={active}
            onChange={change}
            onSelect={select}>
      <Select.Option value={0}>Won't close1</Select.Option>
      <Divider/>
      <Select.Option value={1}>Close</Select.Option>
      <Divider/>
      <Select.Option value={2}>Won't close2</Select.Option>
      <Divider/>
      <Select.Option value={3}>Won't close3</Select.Option>
      <Divider/>
      <Select.Option value={4}>Won't close4</Select.Option>
    </Select>
  </>;

}