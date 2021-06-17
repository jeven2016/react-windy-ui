import React from 'react';
import {Button, Card, Col, Divider, Row} from 'react-windy-ui';
import pic from './m.jpeg';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBusAlt, faMailBulk, faPhone, faPlane, faWineGlassAlt,} from '@fortawesome/free-solid-svg-icons';

export default function Card10() {
  return <>
    <Card style={{width: '15rem'}}>
      <Card.CardImage autoScale>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h2>A Star</h2>
          <h6>The description for this picture</h6>
        </Card.OverlayTitle>
      </Card.CardImage>
      <Card.Row>
        <Row align="center" gutter={{x: 16, y: 16}}>
          <Col justify="center" extraClassName="text color-blue">
            <FontAwesomeIcon icon={faWineGlassAlt}/>
          </Col>

          <Col xs={10}>
            <div>Who's she</div>
            <h5 className="text comment">The description ........</h5>
          </Col>
        </Row>

        <Row align="center" gutter={{x: 16, y: 16}}>
          <Col justify="center" extraClassName="text color-blue">
            <FontAwesomeIcon icon={faBusAlt}/>
          </Col>
          <Col xs={10}>
            <div>How to get to there</div>
            <h5 className="text comment">The description ........</h5>
          </Col>
        </Row>
      </Card.Row>

      <Divider/>

      <Card.Footer>
        <Row>
          <Col justify="center" extraClassName="text color-blue">
            <Button inverted circle color="blue" hasBox={false}>
              <FontAwesomeIcon icon={faPhone}/>
            </Button>
          </Col>
          <Col justify="center" extraClassName="text color-blue">
            <Button inverted circle color="blue" hasBox={false}>
              <FontAwesomeIcon icon={faMailBulk}/>
            </Button>
          </Col>
          <Col justify="center" extraClassName="text color-blue">
            <Button inverted circle color="blue" hasBox={false}>
              <FontAwesomeIcon icon={faPlane}/>
            </Button>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  </>;
}