import React, {useState} from 'react';
import {Avatar, IconAccount, Space, Badge} from 'react-windy-ui';
import img from "../../../style/imgs/girl.jpg";

export default function Avatar4() {
  const [shape] = useState("round");
  return <>
    <Space gutter={{x: 30}} style={{marginTop: '1rem'}}>
      <Badge body="8"><Avatar shape={shape}>B</Avatar></Badge>

      <Badge color="error" body="999+">
        <Avatar shape={shape} src={img}/>
      </Badge>

      <Badge type="dot">
        <Avatar shape={shape}><IconAccount/></Avatar>
      </Badge>
    </Space>
  </>;

}