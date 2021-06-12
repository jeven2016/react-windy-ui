import React from 'react';
import {Badge} from 'react-windy-ui';

export default function Badge6() {

  return <>

    <Badge type="tag" color="info"
           style={{marginRight: '1rem'}}>
      55
    </Badge>
    <Badge type="tag" color="ok"
           style={{marginRight: '1rem'}}>
      66
    </Badge>
    <Badge type="tag" color="warning"
           style={{marginRight: '1rem'}}>
      77
    </Badge>
    <Badge type="tag" color="error"
           style={{marginRight: '1rem'}}>
      88
    </Badge>
    <Badge type="tag" color="dark">
      99+
    </Badge>
  </>;

}