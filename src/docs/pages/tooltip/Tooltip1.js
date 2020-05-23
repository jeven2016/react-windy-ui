import React from 'react';
import {Tooltip, Button} from 'react-windy-ui';

export default function Tooltip1() {

  return <><Tooltip position="top" header="Header"
                    body={<span>This is a tooltip</span>}>
    <Button outline={true} color="blue"
            style={{marginLeft: '1rem'}}>Top</Button>
  </Tooltip>

    <Tooltip position="top" header="Header"
             body={<span>A tooltip</span>}>
      <span style={{textDecoration: 'underline'}}>Info</span>
    </Tooltip>
  </>;
}