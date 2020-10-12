import React from 'react';
import {Input} from 'react-windy-ui';

export default function SampleInput1(props) {
  return <>
    <Input placeholder="default"/>
    <br/> <br/>
    <Input placeholder="large input" size='large'/>
    <br/> <br/>
    <Input placeholder="medium input" size='medium'/>
    <br/> <br/>
    <Input placeholder="small input" size='small'/>
  </>;
}