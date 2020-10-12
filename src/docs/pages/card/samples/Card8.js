import React from 'react';
import {Button, Card, Col, Dropdown, Row} from 'react-windy-ui';
import pic from './girl1.jpg';
import {faListUl} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Card8() {
  return <>
    <Card style={{width: '15rem'}}>
      <Card.Header>
        <Row>
          <Col xs={9}><h4 className="text color-primary">Star</h4></Col>
          <Col justify="end">
            <Dropdown position="bottomRight" title={<Button size="small" outline color="blue"
                                                            extraClassName="clear-border">
              <FontAwesomeIcon icon={faListUl}/>
            </Button>}>
              <Dropdown.Menu>
                <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
                <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
                <Dropdown.Item id="item3">Menu Item3</Dropdown.Item>
                <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>

      </Card.Header>
      <Card.CardImage autoScale={true}>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h2>A Picture</h2>
          <h6>The description for this picture</h6>
        </Card.OverlayTitle>
      </Card.CardImage>
      <Card.Footer>
        <h4>Picture from pixabay.com </h4>
        <h5 className="text comment">
          Need more information......
        </h5>
      </Card.Footer>
    </Card>
  </>;
}