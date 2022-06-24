import React, { useState } from 'react';
import { Card, Loader, Alert, Toggle } from 'react-windy-ui';

export default function Loader7() {
  const [active, setActive] = useState(true);

  const body =
    'Bread is a staple food prepared from a dough of flour and water,\n' +
    '          usually by baking. Throughout recorded history it has been a prominent\n' +
    '          food in large parts of the world; it is one of the oldest man-made\n' +
    '          foods, having been of significant importance since the …';

  return (
    <>
      <div className="doc doc-row">
        <Toggle active={active} onChange={(val) => setActive(val)} label="Active" />
      </div>

      <Loader type="primary" color="white" text="Loading......" active={active} block>
        <Card block>
          <Card.Header>Header</Card.Header>
          <Card.Body>{body}</Card.Body>
          <Card.Footer>Footer</Card.Footer>
        </Card>
      </Loader>

      <Loader type="third" color="white" style={{ marginTop: '1rem' }} active={active} block>
        <Alert title="Customized" type="ok" body={body} />
      </Loader>
    </>
  );
}
