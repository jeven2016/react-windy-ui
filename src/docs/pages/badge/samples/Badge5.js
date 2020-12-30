import React from 'react';
import {Badge, Button} from 'react-windy-ui';

export default function Badge5() {

  return <>

    <Badge type="dot">
      <Button>Home</Button>
    </Badge>
    <Badge type="dot" style={{marginLeft: '2rem'}} contentStyle={{width: '.75rem', height: '.75rem'}}>
      <Button>Home</Button>
    </Badge>
    <Badge type="dot" style={{marginLeft: '2rem'}} contentStyle={{width: '1rem', height: '1rem'}}>
      <Button>Home</Button>
    </Badge>
  </>;

}