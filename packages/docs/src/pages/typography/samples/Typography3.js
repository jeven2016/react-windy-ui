import React from 'react';
import { Typography } from 'react-windy-ui';

export default function Typography3() {
  return (
    <>
      <Typography color="blue" autoEllipsis={true} hasTooltip={true} style={{ width: 230 }}>
        Deep into that darkness peering,Long I stood there, wondering, fearing.
      </Typography>
    </>
  );
}
