import React from 'react';
import {Alert} from 'react-windy-ui';

export default function Alert1() {
  return <>
    <Alert type="info" body="A info alert"/>
    <Alert type="ok" body="ok alert"/>
    <Alert type="warning" body="A warning alert"/>
    <Alert type="error" body="A error alert"/>
    <Alert type="mini" body="A mini alert"/>
    <Alert type="simple" title="Simple Title" body="A simple alert"/>
  </>;
}