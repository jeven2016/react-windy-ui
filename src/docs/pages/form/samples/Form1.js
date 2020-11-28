import React from 'react';
import {Button, Card, Form, Input, Row, Col} from 'react-windy-ui';

export default function Form1() {

  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false}
          hasBorder={false}>
      <Card.Row>
        <Form>
          <Form.Item compact={true}>
            <Form.Label required>Username</Form.Label>
            <Input placeholder="Please enter your name" block/>
            <Form.Message errorType="comment"
                          message="The username is required"/>
          </Form.Item>

          <Form.Item compact={true}>
            <Form.Label required>Password</Form.Label>
            <Input type="password" block
                   placeholder="Please enter your password"/>
            <Form.Message errorType="comment"
                          message="The password is required"/>
          </Form.Item>

          <Form.Item compact={true}>
            <Row>
              <Col>
                <Button nativeType="submit" color="blue" block
                        style={{marginRight: '.5rem'}}>
                  Sign In
                </Button>
              </Col>
              <Col>
                <Button nativeType="reset" block>
                  Reset
                </Button>
              </Col>
            </Row>


          </Form.Item>

        </Form>
      </Card.Row>
    </Card>
  </>;
}