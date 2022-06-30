import React from 'react';
import { Button } from 'react-windy-ui';

const SampleBtn5 = () => {
  return (
    <>
      <div className="doc doc-row">
        <Button size="large">large</Button>
        <Button size="medium">medium</Button>
        <Button size="small">small</Button>
      </div>
      <div className="doc doc-row">
        <Button>default</Button>
        <Button style={{ lineHeight: '1rem', padding: '0.3rem' }}>Custom</Button>
      </div>
    </>
  );
};

export default SampleBtn5;
