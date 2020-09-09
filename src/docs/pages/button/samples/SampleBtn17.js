import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn17 = () => {
  return <>
    <div style={{padding: '1rem', background: 'black', color: 'white'}}>
      <Button hasOutlineBackground={false} outline invertedOutline
              color="purple"
              hasMinWidth>purple</Button>

      <Button hasOutlineBackground={true} outline invertedOutline color="purple"
              hasMinWidth>purple</Button>
    </div>
  </>;
};

export default SampleBtn17;