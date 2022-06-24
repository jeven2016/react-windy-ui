import React from 'react';
import { Checkbox } from 'react-windy-ui';

export default function Checkbox1() {
  return (
    <>
      <Checkbox label="Label" />
      <Checkbox onChange={(val) => console.log(val)}>Bus</Checkbox>
      <Checkbox defaultChecked onChange={(val) => console.log(val)}>
        Car
      </Checkbox>
    </>
  );
}
