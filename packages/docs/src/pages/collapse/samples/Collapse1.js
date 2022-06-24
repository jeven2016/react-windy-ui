import React, { useState } from 'react';
import { Button, Collapse } from 'react-windy-ui';

export default function Collapse1() {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setCollapse((col) => !col)}>
        Toggle
      </Button>
      <Collapse.Panel collapse={collapse}>
        Content...
        <br />
        Content...
        <br />
        Content...
        <br />
        Content...
        <br />
        Content...
        <br />
      </Collapse.Panel>
    </>
  );
}
