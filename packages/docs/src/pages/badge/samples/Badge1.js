import React from 'react';
import { Button, Badge } from 'react-windy-ui';

export default function Badge1() {
  return (
    <>
      <Badge body="8">
        <Button>Comments</Button>
      </Badge>
      <Badge color="info" body="999+" style={{ marginLeft: '1rem' }}>
        <Button>Comments</Button>
      </Badge>
    </>
  );
}
