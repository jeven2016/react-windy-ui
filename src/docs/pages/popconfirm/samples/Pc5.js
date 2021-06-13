import React, {useState} from "react";
import {Button, PopConfirm, TextField} from 'react-windy-ui';

export default function Pc5() {
  const [position, setPosition] = useState("topLeft");

  return <>
    <div className="doc doc-row">
      <TextField select={true}
                 size="small"
                 defaultValue="start"
                 onChange={(value) => setPosition(value)}
                 label="Position"
                 style={{width: '15rem'}}
                 required={true}>
        <option value="topRight">topRight</option>
        <option value="topLeft">topLeft</option>
        <option value="top">top</option>
        <option value="right">right</option>
        <option value="bottom">bottom</option>
      </TextField>
    </div>

    <PopConfirm body="Are you sure to delete?" position={position}>
      <Button color="red">Delete</Button>
    </PopConfirm>
  </>;
}