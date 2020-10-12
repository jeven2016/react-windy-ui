import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn5 = () => {
  return <>
    <Button>default</Button>
    <Button style={{lineHeight: '1rem', padding: '0.3rem'}}>
      Custom
    </Button>
    <br/>
      <Button size="large">large</Button>
      <Button size="medium">medium</Button>
      <Button size="small">small</Button>

  </>;
};

export default SampleBtn5;