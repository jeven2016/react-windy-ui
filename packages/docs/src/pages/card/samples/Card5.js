import React from 'react';
import { Button, Card, Divider, Dropdown } from 'react-windy-ui';

export default function Card5() {
  return (
    <>
      <Card>
        <Card.Body>
          <h3> Name </h3>
          <h5 className="text comment"> This article is about ... </h5>
          <p>
            The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly
            known as a tomato plant.
          </p>
        </Card.Body>
        <Divider />
        <Card.Footer>
          <Dropdown
            position="rightBottom"
            title={
              <Button color="dark" inverted>
                Actions
              </Button>
            }
          >
            <Dropdown.Menu>
              <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
              <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
              <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
              <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button color="blue" inverted>
            Details
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}
