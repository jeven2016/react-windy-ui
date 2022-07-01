import React, { useState } from 'react';
import { Button, Toggle } from 'react-windy-ui';

const RippleBoxBtn = () => {
  const [hasRipple, setRipple] = useState(true);
  const [hasBox, setBox] = useState(true);
  return (
    <>
      <div className="doc doc-row">
        <Toggle active={hasRipple} onChange={(val) => setRipple(val)} label="Ripple" />
      </div>
      <div className="doc doc-row">
        <Toggle active={hasBox} onChange={(val) => setBox(val)} label="Box" />
      </div>
      <Button
        hasRipple={hasRipple}
        hasBox={hasBox}
        color="brown"
        outline
        initOutlineColor
        hasMinWidth
      >
        brown
      </Button>

      <Button hasBox={hasBox} hasRipple={hasRipple} color="purple" hasMinWidth>
        purple
      </Button>

      <Button hasBox={hasBox} hasRipple={hasRipple} color="green" outline hasMinWidth>
        green
      </Button>
    </>
  );
};

export default RippleBoxBtn;
