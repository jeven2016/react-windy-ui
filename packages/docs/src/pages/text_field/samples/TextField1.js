import React from "react";
import {TextField, Space} from "react-windy-ui";

export default function TextField1() {


  return <>
    <Space wrap gutter={{x: 8, y: 16}}>
      <TextField label="Name" placeholder="Enter Name" required={true}/>
      <TextField shape="outline" label="Password" nativeType="password"  required={true}/>
      <TextField label="Address" labelFixed={true} placeholder="Your Address"/>
    </Space>
  </>
}