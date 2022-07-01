import React from 'react';
import { Button } from 'react-windy-ui';

const Basic_button = () => {
  return (
    <>
      <Button>Default</Button>
      <Button type="primary" onClick={() => console.log('button.......')}>
        Primary
      </Button>
      <Button type="secondary">Secondary</Button>
    </>
  );
};

export default Basic_button;
