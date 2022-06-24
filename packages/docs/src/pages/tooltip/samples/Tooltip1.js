import React from 'react';
import { Tooltip, Button } from 'react-windy-ui';

export default function Tooltip1() {
  return (
    <>
      <Tooltip body="This is a tooltip">
        <Button outline={true} color="blue" style={{ marginRight: '2rem' }}>
          Top
        </Button>
      </Tooltip>

      <Tooltip header="Header" body="This is a tooltip">
        <span style={{ textDecoration: 'underline' }} style={{ marginRight: '2rem' }}>
          Info
        </span>
      </Tooltip>

      <Tooltip
        body={
          <span>
            The link :{' '}
            <span
              style={{
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#ff350e'
              }}
            >
              Web Site
            </span>
          </span>
        }
      >
        <Button outline={true} color="blue">
          Web Site
        </Button>
      </Tooltip>
    </>
  );
}
