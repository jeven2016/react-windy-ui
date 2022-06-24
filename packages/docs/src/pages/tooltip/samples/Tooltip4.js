import React from 'react';
import { Button, Tooltip } from 'react-windy-ui';

export default function Tooltip4() {
  return (
    <>
      <Tooltip body="This is a tooltip" background="purple">
        <Button outline={true} color="blue" style={{ marginRight: '2rem' }}>
          Top
        </Button>
      </Tooltip>

      <Tooltip
        header="Header"
        body="This is a tooltip"
        tooltipStyle={{ fontSize: '1rem', background: '#f2791a' }}
      >
        <span style={{ textDecoration: 'underline', marginRight: '2rem' }}>Info</span>
      </Tooltip>

      <Tooltip background="#0d806d" body="This is a tooltip">
        <Button outline={true} color="blue">
          Web Site
        </Button>
      </Tooltip>
    </>
  );
}
