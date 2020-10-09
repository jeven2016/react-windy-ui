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
} from 'react-windy-ui';

export default function Form3() {
  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false}>
      <Card.Row>
        <Form direction="horizontal" labelCol={{col: 3}} controlCol={{col: 9}}>
          <Form.Item>
            <Form.Label>Username</Form.Label>
            <Input.IconInput leftIcon block placeholder="Username"
                             icon={<IconAccount/>}/>
          </Form.Item>
          <Form.Item>
            <Form.Label>Password</Form.Label>
            <Input.IconInput leftIcon block placeholder="Password"
                             icon={<IconLock/>}/>
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