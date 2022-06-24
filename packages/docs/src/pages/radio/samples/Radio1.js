import React from 'react';
import { Radio } from 'react-windy-ui';

export default function Radio1() {
  return (
    <>
      <Radio onChange={(checked) => console.log(checked)} label="Radio" />
      <Radio value="2" onChange={(value) => console.log('value should be 2 ' + value)}>
        Value2
      </Radio>
    </>
  );
}
