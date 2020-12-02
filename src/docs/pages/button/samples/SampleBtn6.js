import React from 'react';
import {Button, IconList} from 'react-windy-ui';

const SampleBtn6 = () => {
  return <>
    <div className="doc doc-row">
      <Button circle>G</Button>
      <Button type="info" shape='circle'>OK</Button>
    </div>
    <div className="doc doc-row">
      <Button type="success" shape='round' id='down'>Download</Button>
      <Button type="purple" shape='round' id='down'>Round</Button>
    </div>
    <div className="doc doc-row">
      <Button type="primary" size="large" circle
              leftIcon={<IconList size="large"/>}/>

      <Button type="primary" size="medium" circle
              leftIcon={<IconList size="medium"/>}/>

      <Button type="primary" size="small" circle
              leftIcon={<IconList size="medium"/>}/>
    </div>
  </>;
};

export default SampleBtn6;