import React from 'react';
import {Card, ButtonGroup, Button, Divider} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMailBulk,
  faPhone,
  faUmbrella,
} from '@fortawesome/free-solid-svg-icons';

export default function Card4() {
  return <>
    <Card>
      <Card.Header>
        <h2 className="text color-blue">
          <FontAwesomeIcon icon={faUmbrella} style={{marginRight: '0.5rem'}}/>
          <span>Tomato</span>
        </h2>
        <h5 className="text comment">This article is about the plant and the
          fruit.</h5>
      </Card.Header>
      <Card.Body>
        The tomato is the edible, often red, berry of the plant Solanum
        lycopersicum, commonly known as a tomato plant.
      </Card.Body>
      <Divider/>
      <Card.Footer>
        <ButtonGroup block>
          <Button style={{width: '50%'}} color="green">
            <FontAwesomeIcon icon={faPhone} style={{marginRight: '0.5rem'}}/>
            Phone
          </Button>
          <Button style={{width: '50%'}} color="blue">
            <FontAwesomeIcon icon={faMailBulk}
                             style={{marginRight: '0.5rem'}}/>
            Mail
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  </>;
}