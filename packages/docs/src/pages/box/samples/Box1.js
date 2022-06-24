import React from 'react';
import { Box } from 'react-windy-ui';

const boxStyle = {
  background: '#eee'
};
export default function Box1() {
  return (
    <>
      <div>
        <Box style={boxStyle}>Box component</Box>
        <Box style={boxStyle}>Box component</Box>
      </div>
      <br />
      <br />
      <div>
        <Box style={boxStyle} block justify="center">
          block box
        </Box>

        <Box style={boxStyle} block justify="end">
          block box
        </Box>
      </div>
    </>
  );
}
