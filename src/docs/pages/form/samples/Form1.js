import React from 'react';
import {Button, Col, Form, Input, Row} from 'react-windy-ui';

export default function Form1() {

  return <div className="doc doc-row space">
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
        <Row gutter={{x: 16}}>
          <Col>
            <Button color="blue" block>
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
  </div>;
}