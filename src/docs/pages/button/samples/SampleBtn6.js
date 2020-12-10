import React from 'react';
import {Button, IconList} from 'react-windy-ui';
import {IconChecked, IconSearch} from '../../../../components/src';

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
  </>;
};

export default SampleBtn6;