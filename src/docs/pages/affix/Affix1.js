import React from 'react';
import {Affix, Button} from 'react-windy-ui';

export default function Affix1() {

  return <>
    <div>
      <Affix top={140}>
        <Button color="green">Top 140px</Button>
      </Affix>
    </div>
  </>;
}