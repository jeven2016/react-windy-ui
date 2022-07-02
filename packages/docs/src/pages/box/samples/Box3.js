import React from 'react';
import { Box, Button, Input } from 'react-windy-ui';

const boxStyle = {
  background: '#eee'
};
export default function Box3() {
  return (
    <>
      <div>
        <Box
          style={boxStyle}
          block
          left={<Button>Left</Button>}
          justifyLeft="end"
          right={<Button>Right</Button>}
          justifyRight="start"
        />

        <Box
          block
          style={boxStyle}
          left={<Button>Left</Button>}
          justifyLeft="end"
          right={<Button>Right</Button>}
          justifyRight="start"
          center={<span>Center</span>}
          justifyCenter="center"
        />
      </div>
    </>
  );
}
