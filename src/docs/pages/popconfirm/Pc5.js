import React, {useState} from "react";
import {Button, PopConfirm, Select} from 'react-windy-ui';

export default function Pc5() {
  const [position, setPosition] = useState("topRight");

  return <>
    <div className="doc doc-row">
      <span style={{
        marginRight: '1rem',
        fontWeight: '600'
      }}>Position:</span>

      <Select defaultValue="topRight"
              onSelect={(value) => setPosition(value)}>
        <Select.Option value="topRight">TopRight</Select.Option>
        <Select.Option value="topLeft">TopLeft</Select.Option>
        <Select.Option value="top">Top</Select.Option>
        <Select.Option value="right">Right</Select.Option>
      </Select>
    </div>

    <PopConfirm body="Are you sure to delete?" position={position}>
      <Button color="red">Delete</Button>
    </PopConfirm>
  </>;
}