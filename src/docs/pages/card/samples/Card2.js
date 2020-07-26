import React from 'react';
import {Card, Divider} from 'react-windy-ui';

export default function Card2() {
  return <>
    <Card>
      <Card.Header hasBackground>
        Header
      </Card.Header>
      <Divider/>
      <Card.Body>
        Body
      </Card.Body>
      <Card.Row>
        Row
      </Card.Row>
      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  </>;
}