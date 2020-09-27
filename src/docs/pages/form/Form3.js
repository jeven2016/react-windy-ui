import React from 'react';
import {Button, Card, Checkbox, Col, Form, Input, Row} from "react-windy-ui";

export default function Form3() {
  return <>
    <Card style={{width: '60%'}} hasBox={false}>
      <Card.Row>
        <Form>
          <Form.Item type="row">
            <Row>
              <Col col={4}>
                <Form.Label>Username</Form.Label>
              </Col>
              <Col col={8}>
                <Input block/>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item type="row">
            <Row>
              <Col col={4}>
                <Form.Label> Password</Form.Label>
              </Col>
              <Col col={8}>
                <Input type="password" block/>
              </Col>
            </Row>
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
                  cursor: 'pointer'
                }}>Or sign up?
                </div>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>
}