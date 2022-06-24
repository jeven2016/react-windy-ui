import React, { useState } from 'react';
import { Button, Toggle } from 'react-windy-ui';

const SampleBtn10 = () => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <Toggle onChange={(value) => setDisabled(value)} />
      <br />
      <Button color="purple" disabled={disabled} onClick={() => {}}>
        Button
      </Button>

      <Button color="blue" loading={disabled} disabled={disabled} onClick={() => {}}>
        Save
      </Button>
    </>
  );
};

export default SampleBtn10;
