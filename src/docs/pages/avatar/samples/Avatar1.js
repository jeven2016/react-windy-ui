import React from 'react';
import {Avatar, IconAccount, Space} from 'react-windy-ui';
import img from "../../../style/imgs/girl.jpg";

export default function Avatar1() {
  return <Space>
    <Avatar>B</Avatar>
    <Avatar extraClassName="bg-color-primary">B</Avatar>
    <Avatar style={{background: '#49b847'}}>B</Avatar>
    <Avatar src={img}/>
    <Avatar><IconAccount/></Avatar>
  </Space>;

}