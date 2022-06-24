import React, { useState } from 'react';
import { Checkbox } from 'react-windy-ui';

export default function Checkbox2() {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Checkbox defaultChecked onChange={(value) => console.log(value)}>
        Default Checked
      </Checkbox>

      <Checkbox checked={checked} onChange={(value) => setChecked(value)}>
        Checked
      </Checkbox>
    </>
  );
}
