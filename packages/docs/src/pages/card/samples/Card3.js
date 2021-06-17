import React from 'react';
import {Card, Divider} from 'react-windy-ui';

export default function Card3() {
  return <>
    <Card>
      <Card.Header>
        Header
      </Card.Header>
      <Divider/>
      <Card.Body>
        Body
      </Card.Body>
      <Divider/>
      <Card.Row>
        Row
      </Card.Row>
      <Divider/>
      <Card.Footer>
        Footer
      </Card.Footer>
    </Card>
  </>;
}