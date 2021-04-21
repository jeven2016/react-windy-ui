import React from "react";
import {TextField, Space} from "react-windy-ui";

export default function TextField1() {


  return <>
    <Space>
      <TextField label="Name" placeholder="Enter Name" required={true}/>
      <TextField type="outline" label="Password" nativeType="password"  required={true}/>
      <TextField label="Address" labelFixed={true} placeholder="Your Address"/>
    </Space>
  </>
}