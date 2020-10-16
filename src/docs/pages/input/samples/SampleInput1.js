import React from 'react';
import {Input} from 'react-windy-ui';
import {IconUnChecked} from "../../../../components/src";

export default function SampleInput1(props) {
  const fun=(elem)=>{
    console.log("==",elem)
  }
  return <>
    <Input placeholder="default" ref={fun}/>
    <br/> <br/>
    <Input placeholder="large input" size='large'/>
    <br/> <br/>
    <Input placeholder="medium input" size='medium'/>
    <br/> <br/>
    <Input placeholder="small input" size='small'/>
  </>;
}