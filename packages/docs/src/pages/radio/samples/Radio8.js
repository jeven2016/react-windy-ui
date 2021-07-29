import React from 'react';
import {Radio, RadioGroup} from 'react-windy-ui';

export default function Radio8() {
  return <>
    <div className="doc doc-row space">
      {/*you can add more ButtonGroup props for RadioGroup*/}
      <RadioGroup block={true} direction="vertical" defaultValue="green" button={true} onChange={(val) => console.log(val)}>
        {/*you can add more Button props for Radio*/}
        <Radio value="purple" color="purple">
          purple
        </Radio>

        <Radio value="green" color="green">
          green
        </Radio>

        <Radio value="blue" color="blue">
          blue
        </Radio>
      </RadioGroup>
    </div>
  </>;
}