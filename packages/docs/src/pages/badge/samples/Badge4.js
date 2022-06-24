import React from 'react';
import { Badge, Button } from 'react-windy-ui';

export default function Badge4() {
  return (
    <>
      <Badge body="Mails">Mail Box</Badge>

      <Badge body="Hot!" style={{ marginLeft: '2rem' }}>
        <Button>Home</Button>
      </Badge>
    </>
  );
}
