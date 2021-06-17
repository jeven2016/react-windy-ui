import React, {useState} from 'react';
import {Avatar, IconAccount, Space, TextField} from 'react-windy-ui';
import img from "../../../style/imgs/girl.jpg";

export default function Avatar3() {
  const [shape, setShape] = useState("circle");
  return <>
    <div className="doc doc-row">
      <TextField select={true}
                 size="small"
                 defaultValue="circle"
                 onChange={(value) => setShape(value)}
                 label="Shape"
                 style={{width: '15rem'}}>
        <option value="circle">circle</option>
        <option value="square">square</option>
        <option value="round">round</option>
      </TextField>
    </div>
    <Space>
      <Avatar shape={shape}>B</Avatar>
      <Avatar shape={shape} extraClassName="bg-color-primary">B</Avatar>
      <Avatar shape={shape} style={{background: '#49b847'}}>B</Avatar>
      <Avatar shape={shape} src={img}/>
      <Avatar shape={shape}><IconAccount/></Avatar>
    </Space>
  </>;

}