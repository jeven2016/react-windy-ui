import React from 'react';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  IconAccount,
  IconLock,
  Input,
  Row,
  Tooltip,
} from 'react-windy-ui';

export default function Form3() {
  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false}>
      <Card.Row>
        <Form>
          <Form.Item>
            <Tooltip body="The username is required">
              <Input.IconInput leftIcon block placeholder="Username"
                               icon={<IconAccount/>}/>
            </Tooltip>
          </Form.Item>
          <Form.Item>
            <Tooltip body="The password is required">
              <Input.IconInput leftIcon block placeholder="Password"
                               icon={<IconLock/>}/>
            </Tooltip>
          </Form.Item>
          <Form.Item compact={true}>
            <Row>
              <Col col={6}>
                <Checkbox label="Remember me" defaultChecked/>
              </Col>
              <Col col={6} style={{textAlign: 'right'}}>
                <Button inverted size="small">Forget password</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item compact={true}>
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