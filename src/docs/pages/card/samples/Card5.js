import React from 'react';
import {Card, ButtonGroup, Button, Divider, Dropdown} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMailBulk,
  faPhone,
  faUmbrella,
} from '@fortawesome/free-solid-svg-icons';

export default function Card5() {
  return <>
    <Card>
      <Card.Row>
        <h2 className="text color-blue">
          <FontAwesomeIcon icon={faUmbrella} style={{marginRight: '0.5rem'}}/>
          <span>Tomato</span>
        </h2>
        <h5 className="text comment">This article is about the plant and the
          fruit.</h5>
      </Card.Row>
      <Card.Body>
        The tomato is the edible, often red, berry of the plant Solanum
        lycopersicum, commonly known as a tomato plant.
      </Card.Body>
      <Divider/>
      <Card.Footer>
        <Dropdown position="rightBottom" title={<Button outline color="blue"
                                                        extraClassName="clear-border">
          Phone
        </Button>}>
          <Dropdown.Menu>
            <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
            <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
            <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
            <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Button outline color="blue" style={{marginLeft: '1rem'}}
                extraClassName="clear-border">
          Action
        </Button>

      </Card.Footer>
    </Card>
  </>;
}