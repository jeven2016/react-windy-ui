import React from 'react';
import {Button, IconList} from 'react-windy-ui';

const SampleBtn6 = () => {
  return <>
    <div className="doc doc-row">
      <Button circle>G</Button>
      <Button type="info" shape='circle'>OK</Button>
      <Button type="success" shape='round' id='down'>Download</Button>
      <Button type="purple" shape='round' id='down'>Send</Button>
    </div>
    <div className="doc doc-row">
      <Button type="primary" size="large" circle>
        <IconList size="large"/>
      </Button>
      <Button type="primary" size="medium" circle>
        <IconList size="medium"/>
      </Button>
      <Button type="primary" size="small" circle>
        <IconList size="small"/>
      </Button>
    </div>
  </>;
};

export default SampleBtn6;