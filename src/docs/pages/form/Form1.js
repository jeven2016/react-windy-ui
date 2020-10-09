import React from 'react';
import {Button, Card, Form, Input} from "react-windy-ui";

export default function Form1() {

  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false}
          hasBorder={true}>
      <Card.Row>
        <Form>
          <Form.Item>
            <Form.Label>Username</Form.Label>
            <Input placeholder="Please enter your name" block/>
            <Form.Message type="comment" message="The username is required"/>
          </Form.Item>

          <Form.Item>
            <Form.Label>Password</Form.Label>
            <Input type="password" block
                   placeholder="Please enter your password"/>
            <Form.Message type="comment" message="The password is required"/>
          </Form.Item>

          <Form.Item direction="horizontal" justify="center" compact={true}>
            <Button nativeType="submit" block color="blue">Sign In</Button>
            <Button nativeType="reset" block>Reset</Button>
          </Form.Item>

        </Form>
      </Card.Row>
    </Card>
  </>
}