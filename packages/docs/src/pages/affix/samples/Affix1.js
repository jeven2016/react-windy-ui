import React, { useState } from 'react';
import { Affix, Button } from 'react-windy-ui';

export default function Affix1() {
  const [disabled, setDisabled] = useState(true);
  return (
    <div>
      <Affix top={80} disabled={disabled}>
        {/*<div style={{background: 'blue'}} onClick={() => setDisabled(!disabled)}>Hello</div>*/}
        <Button color="green" onClick={() => setDisabled(!disabled)}>
          {disabled ? 'Disabled:' : 'Enabled: '}Top 140px
        </Button>
      </Affix>
    </div>
  );
}
