import React from 'react';
import {Radio, RadioGroup} from 'react-windy-ui';

export default function Radio7() {
  return <>
    <div className="doc doc-row">
      <div className="doc doc-row">
        <RadioGroup defaultValue="one" disabled
                    onChange={(val) => console.log(val)}>
          <Radio value="one">
            one
          </Radio>

          <Radio value="two">
            two
          </Radio>

          <Radio value="three">
            three
          </Radio>
        </RadioGroup>
      </div>
    </div>
  </>;
}