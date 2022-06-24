import React from 'react';
import { Button } from 'react-windy-ui';

const SampleBtn5 = () => {
  return (
    <>
      <Button size="large">large</Button>
      <Button size="medium">medium</Button>
      <Button size="small">small</Button>
      <br />
      <Button>default</Button>
      <Button style={{ lineHeight: '1rem', padding: '0.3rem' }}>Custom</Button>
    </>
  );
};

export default SampleBtn5;
