import React from 'react';
import {Radio, RadioGroup} from 'react-windy-ui';

export default function Radio5() {
  return <>
    <div className="doc doc-row">
      <RadioGroup defaultValue="green" onChange={(val) => console.log(val)}>
        <Radio value="purple" checkedColor="purple"
               uncheckedColor="red">
          purple
        </Radio>

        <Radio value="green" checkedColor="green"
               uncheckedColor="brown">
          green
        </Radio>

        <Radio value="blue">
          blue
        </Radio>
      </RadioGroup>
    </div>
  </>;
}