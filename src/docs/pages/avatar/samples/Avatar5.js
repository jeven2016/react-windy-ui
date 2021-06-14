import React, {useState} from 'react';
import {Avatar, IconAccount, Tooltip} from 'react-windy-ui';
import img from "../../../style/imgs/girl.jpg";

export default function Avatar4() {
  const [shape] = useState("circle");
  return <>
    <div className="doc doc-row">
      <Avatar.Group max={3}>
        <Avatar extraClassName="bg-color-red" shape={shape}>B</Avatar>
        <Avatar shape={shape} src={img}/>
        <Avatar extraClassName="bg-color-yellow" shape={shape}><IconAccount/></Avatar>
        <Avatar extraClassName="bg-color-green" shape={shape}>W</Avatar>
      </Avatar.Group>
    </div>

    <div className="doc doc-row">
      <Avatar.Group max={2} extraAvatarStyle={{background: "#fbbe11", color: "#ff350e"}}>
        <Avatar extraClassName="bg-color-red" shape={shape}>B</Avatar>
        <Avatar shape={shape} src={img}/>
        <Tooltip body="Peter" position="top">
          <Avatar extraClassName="bg-color-yellow" shape={shape}><IconAccount/></Avatar>
        </Tooltip>
        <Tooltip body="William" position="top">
          <Avatar extraClassName="bg-color-green" shape={shape}>W</Avatar>
        </Tooltip>
      </Avatar.Group>
    </div>
  </>;

}