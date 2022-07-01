import React, { useState } from 'react';
import { Radio, RadioGroup } from 'react-windy-ui';

export default function Radio6() {
  const [value, setValue] = useState('one');
  return (
    <>
      <div className="doc doc-row">
        <div className="doc doc-row">
          <RadioGroup value={value} onChange={(val) => setValue(val)}>
            <Radio value="one">one</Radio>

            <Radio value="two">two</Radio>

            <Radio value="three">three</Radio>
          </RadioGroup>
        </div>
      </div>
    </>
  );
}
