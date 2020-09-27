import React from 'react';
import {Button, Card, Checkbox, Col, Form, Input, Row} from 'react-windy-ui';
import {IconAccount, IconLock} from '../../../components/src/Icons';

export default function Form3() {
  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false}>
      <Card.Row>
        <Form>
          <Form.Item type="row">
            <Input.IconInput leftIcon block placeholder="Username"
                             icon={<IconAccount/>}/>
          </Form.Item>
          <Form.Item type="row">
            <Input.IconInput leftIcon block placeholder="Password"
                             icon={<IconLock/>}/>
          </Form.Item>
          <Form.Item type="row">
            <Row>
              <Col col={6}>
                <Checkbox label="Remember me" defaultChecked/>
              </Col>
              <Col col={6} style={{textAlign: 'right'}}>
                <Button inverted size="small">Forget password</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item type="row">
            <Row>
              <Col col={12}>
                <Button block color="blue">Sign In</Button>
                <div className="text color-blue" style={{
                  fontSize: '.9rem',
                  cursor: 'pointer',
                }}>Or sign up?
                </div>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}