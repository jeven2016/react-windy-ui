import React, {useState} from "react";
import {Radio, RadioGroup, Space, TextField} from "react-windy-ui";

export default function TextField8() {
  const [size, setSize] = useState('medium');
  return <>
    <div className="doc doc-row">
      <span style={{marginRight: '1rem', fontWeight: '600'}}>Error Type:</span>
      <RadioGroup defaultValue={size}
                  onChange={(val) => setSize(val)}>
        <Radio value="small">small</Radio>
        <Radio value="medium">medium</Radio>
        <Radio value="large">large </Radio>
      </RadioGroup>
    </div>

    <Space wrap gutter={{y: 16}} direction="vertical" justifyItem="start">
      <TextField label="Name" placeholder="Enter Name"
                 size={size}
                 block={true}
                 required={true}/>

      <TextField label="Name" shape="underline"
                 size={size}
                 block={true}
                 placeholder="Enter Name" required={true}/>

      <TextField select={true}
                 size={size}
                 placeholder="Select a city"
                 defaultValue="Shanghai"
                 label="City"
                 block={true}
                 required={true}>
        <option value="Beijing">Beijing</option>
        <option value="Shanghai">Shanghai</option>
        <option value="New York">New York</option>
      </TextField>

    </Space>
  </>
}