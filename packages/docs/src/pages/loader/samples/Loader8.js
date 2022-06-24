import React, { useState } from 'react';
import { Alert, Loader, Toggle } from 'react-windy-ui';

export default function Loader8() {
  const [active, setActive] = useState(true);

  const body = `Bread is a staple food prepared from a dough of flour and water,
             usually by baking. Throughout recorded history it has been a prominent
             food in large parts of the world; it is one of the oldest man-made
             foods, having been of significant importance since the …`;
  return (
    <>
      <div className="doc doc-row">
        <Toggle active={active} onChange={(val) => setActive(val)} label="Active" />
      </div>

      <Loader type="third" color="blue" darkMask={false} active={active} block>
        <Alert title="Customized" type="ok" body={body} />
      </Loader>
    </>
  );
}
