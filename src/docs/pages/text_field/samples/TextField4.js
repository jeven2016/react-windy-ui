import React from "react";
import {IconAccount, Space, TextField, IconPwdVisible} from "react-windy-ui";

export default function TextField3() {

  return <>
    <Space wrap gutter={{x: 8, y: 16}}>
      <TextField disabled={true} value="My Name" label="Name" required={true} leftItems={[<IconAccount/>]}
                 labelFixed={true}/>
      <TextField disabled={true} value="pwd" label="Password" nativeType="password" required={true}
                 rightItems={<IconPwdVisible/>}/>
      <TextField disabled={true} value="50" label="Weight" labelFixed={false} placeholder="Your Weight"
                 rightItems={<span>KG</span>}/>

      <TextField disabled={true} value="My Name" label="Name" shape="underline" placeholder="Enter Name" required={true}
                 leftItems={[<IconAccount/>]}/>
      <TextField disabled={true} value="pwd" shape="underline" label="Password" nativeType="password" required={true}
                 rightItems={<span>PWD</span>}/>
    </Space>
  </>
}