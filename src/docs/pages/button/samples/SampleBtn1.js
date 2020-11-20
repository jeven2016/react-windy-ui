import React from 'react';
import {Button} from 'react-windy-ui';
import SandboxButton from '../../../utils/SandboxButton';

const SampleBtn1 = () => {
  return <>
    <SandboxButton/>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
  </>;
};

export default SampleBtn1;