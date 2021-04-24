import React from "react";
import {Space, TextField} from "react-windy-ui";

export default function TextField6() {

  return <>
    <Space wrap gutter={{y: 16}}>
      <TextField select={true}
                 placeholder="Select a city"
                 defaultValue="Shanghai"
                 label="City"
                 style={{width: '15rem'}}
                 required={true}>
        <option value="Beijing">Beijing</option>
        <option value="Shanghai">Shanghai</option>
        <option value="New York">New York</option>
      </TextField>

      <TextField select={true}
                 placeholder="Select a city"
                 label="City"
                 style={{width: '15rem'}}
                 disabled={true}
                 required={true}>
      </TextField>
    </Space>
  </>
}