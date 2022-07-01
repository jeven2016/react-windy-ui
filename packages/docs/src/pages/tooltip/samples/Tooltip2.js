import React from 'react';
import { Button, Tooltip } from 'react-windy-ui';

const createTooltip = (text, position) => {
  const body = (
    <div style={{ display: 'flex', width: '250px' }}>
      I wanna show you what the tooltip component looks like
    </div>
  );
  return (
    <Tooltip body={body} position={position}>
      <Button
        hasMinWidth={false}
        color="primary"
        outline
        style={{
          margin: '.5rem',
          fontSize: '.8rem',
          width: '2rem',
          height: '2rem'
        }}
      >
        {text}
      </Button>
    </Tooltip>
  );
};

export default function Tooltip2() {
  return (
    <>
      {createTooltip('T', 'top')}
      {createTooltip('B', 'bottom')}
      {createTooltip('L', 'left')}
      {createTooltip('R', 'right')}
    </>
  );
}
