import React from 'react';
import {Badge, Button} from 'react-windy-ui';

export default function Badge6() {

  return <>

    <Badge type="tag" color="info"
           style={{marginRight: '1rem'}}>
      Info
    </Badge>
    <Badge type="tag" color="ok"
           style={{marginRight: '1rem'}}>
      OK
    </Badge>
    <Badge type="tag" color="warning"
           style={{marginRight: '1rem'}}>
      Warning
    </Badge>
    <Badge type="tag" color="error"
           style={{marginRight: '1rem'}}>
      Danger
    </Badge>
    <Badge type="tag" color="dark">
      Dark
    </Badge>
  </>;

}