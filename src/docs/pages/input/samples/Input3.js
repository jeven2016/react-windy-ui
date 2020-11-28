import React from 'react';
import {Input} from 'react-windy-ui';

export default function Input3(props) {
  return <>
    <div>
      <Input type="textarea" rows="3" cols="20" placeholder="type=textarea"/>
      <Input type="textarea" rows="3" block placeholder="type=textarea"/>
      <br/>
      <Input type="number" placeholder="type=number"/>
    </div>
  </>;
}