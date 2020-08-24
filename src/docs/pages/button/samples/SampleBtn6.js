import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn6 = () => {
  return <>
    <Button circle>G</Button>
    <Button type="info" circle>OK</Button>
    <Button type="success" circle>NO</Button>
    <span style={{color: 'red'}}>
      <Button inverted type="success" circle>B</Button>
    </span>
  </>;
};

export default SampleBtn6;