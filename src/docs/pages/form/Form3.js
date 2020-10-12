import React from 'react';
import {
  Button,
  Card,
  Form,
  IconAccount,
  IconLock,
  Input,
} from 'react-windy-ui';

export default function Form3() {
  return <>
    <Card style={{maxWidth: '500px', minWidth: '450px'}} hasBox={false}>
      <Card.Row>
        <Form direction="horizontal" labelCol={{col: 3}} controlCol={{col: 9}}>
          <Form.Item>
            <Form.Label required>Username</Form.Label>
            <Input.IconInput leftIcon block placeholder="Username"
                             icon={<IconAccount/>}/>
          </Form.Item>
          <Form.Item>
            <Form.Label required>Password</Form.Label>
            <Input.IconInput leftIcon block placeholder="Password"
                             icon={<IconLock/>}/>
          </Form.Item>
          <Form.Item compact={true}>
            <Button block color="blue">Sign In</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}