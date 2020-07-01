import React from 'react';
import {Alert, IconHome} from 'react-windy-ui';

export default function Alert2() {
  return <>
    <Alert title="OK" type="ok" body="ok alert"/>
    <Alert title="INFO" type="info" body="A info alert"/>
    <Alert title="WARNING" type="warning" body="A warning alert"/>
    <Alert title="ERROR" type="error" body="A error alert"/>
    <Alert title="Customized" type="ok" body="This is my home."
           icon={<IconHome/>}/>
  </>;
}