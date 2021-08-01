import React from "react";
import {Skeleton} from "react-windy-ui";


export default function Skeleton1() {
  return <>
    <Skeleton style={{maxWidth: '80%'}}>
      <Skeleton.Item width='40%' height={14}/>
      <Skeleton.Item/>
      <Skeleton.Item/>
      <Skeleton.Item/>
      <Skeleton.Item width='60%'/>
    </Skeleton>
  </>;
};