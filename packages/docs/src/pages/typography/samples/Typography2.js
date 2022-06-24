import React from 'react';
import { Typography, Space } from 'react-windy-ui';

export default function Typography1() {
  return (
    <Space direction="vertical" justifyItem="start">
      <Typography>Windy UI text</Typography>
      <Typography color="success">success text</Typography>
      <Typography color="warning">warning text</Typography>
      <Typography color="error">error text</Typography>
      <Typography color="comment">comment text</Typography>
      <Typography color="pink">pink text</Typography>
      <Typography underline={true}>underline text</Typography>
      <Typography italic={true}>italic text</Typography>
      <Typography deleted={true}>deleted text</Typography>
      <Typography strong={true}>strong text</Typography>
      <Typography disabled={true}>disabled text</Typography>
      <Typography bold={true}>bold text</Typography>
    </Space>
  );
}
