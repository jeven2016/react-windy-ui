import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn3 = () => {
  return <>
    <Button nativeType='a' href="#">link</Button>
    <Button nativeType='reset' type="primary">reset</Button>
    <Button nativeType='submit' type="secondary">submit</Button>
  </>;
};

export default SampleBtn3;