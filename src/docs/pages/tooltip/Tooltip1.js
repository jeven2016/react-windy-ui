import React from 'react';
import {Tooltip, Button} from 'react-windy-ui';

export default function Tooltip1() {

  return <Tooltip position="top" header="Header"
                  body={<span>This is a sample</span>}>
    <Button outline={true} color="blue"
            style={{marginLeft: '1rem'}}>Top</Button>
  </Tooltip>;
}