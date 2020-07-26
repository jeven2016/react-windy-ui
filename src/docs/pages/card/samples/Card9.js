import React, {useState} from 'react';
import {Button, Card, Col, Dropdown, Row, Select} from 'react-windy-ui';
import pic from './girl1.jpg';
import {faListUl} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default function Card9() {
  const [bg, setBg] = useState('bg-color-pink');
  return <>
    <div className="doc doc-row">
      <Select value={bg} onSelect={value => setBg(value)}
              popupStyle={{height: '20rem', overflow: 'auto'}}>
        <Select.Option value="bg-color-pink">pink</Select.Option>
        <Select.Option value="bg-color-blue">blue</Select.Option>
        <Select.Option value="bg-color-brown">brown</Select.Option>
        <Select.Option value="bg-color-black">black</Select.Option>
        <Select.Option value="bg-color-cyan">cyan</Select.Option>
        <Select.Option value="bg-color-dark">dark</Select.Option>
      </Select>
    </div>

    <Card style={{width: '15rem'}}
          extraClassName={`${bg} text color-white`}>
      <Card.Header>
        <Row>
          <Col xs={9}><h4>Star</h4></Col>
          <Col justify="end">
            <Dropdown position="bottomRight"
                      title={<Button size="small" outline color="red"
                                     extraClassName="text color-white clear-border">
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
      <Card.CardImage>
        <Card.Image src={pic}>
        </Card.Image>
        <Card.OverlayTitle>
          <h2>A Picture</h2>
          <h6>The description for this picture</h6>
        </Card.OverlayTitle>
      </Card.CardImage>
      <Card.Footer>
        <Button outline color="blue" style={{marginRight: '1rem'}}
                extraClassName="clear-border text color-white">
          Action1
        </Button>
        <Button outline color="blue"
                extraClassName="clear-border text color-white">
          Action2
        </Button>
      </Card.Footer>
    </Card>
  </>;
}