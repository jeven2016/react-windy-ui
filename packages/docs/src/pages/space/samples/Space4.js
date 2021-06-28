import React, {useState} from "react";
import {Button, Space, Select} from 'react-windy-ui';
import {Divider} from "react-windy-ui";

export default function Space4() {
  const [align, setAlign] = useState('center');
  return <>
    <div className="doc doc-row space">
      <span style={{fontWeight: '600'}}>Align:</span>
      <Select value={align} onSelect={value => setAlign(value)}>
        <Select.Option value="start">start</Select.Option>
        <Select.Option value="center">center</Select.Option>
        <Select.Option value="end">end</Select.Option>
      </Select>
    </div>
    <Space
      align={align}
      gutter={{x: 8}}
      style={{background: 'black', padding: '8px', height: '10rem'}}
      wrap={true}>
      <Button color="purple" hasOutlineBackground={false} outline
              invertedOutline
              hasMinWidth>purple</Button>
      <Button color="green" hasOutlineBackground={false} outline
              invertedOutline
              hasMinWidth>green</Button>
    </Space>

  </>;
}