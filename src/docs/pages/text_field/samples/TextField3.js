import React from "react";
import {TextField, Space} from "react-windy-ui";
import {IconAccount} from "../../../../components/src";
import {IconPwdVisible} from "../../../../components/src/Icons";

export default function TextField3() {


  return <>
    <Space wrap gutter={{x: 8, y: 8}}>
      <TextField label="Name" required={true} leftElements={[<IconAccount/>]} labelFixed={true}/>
      <TextField label="Password" nativeType="password" required={true} rightElements={<IconPwdVisible/>}/>
      <TextField label="Weight" labelFixed={false} placeholder="Your Weight" rightElements={<span>KG</span>}/>
    </Space>
  </>
}