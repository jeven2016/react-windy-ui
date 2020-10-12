import React from 'react';
import {Card, Form, Input, Button} from 'react-windy-ui';

export default function Form2() {
  return <>
    <div className="doc doc-row">
      <Card block hasBox={true} style={{padding: '.5rem'}}>
        <Card.Row>
          <Form direction="inline">
            <Form.Item>
              <Form.Label>Name</Form.Label>
              <Input placeholder="..."/>
            </Form.Item>
            <Form.Item>
              <Form.Label>City</Form.Label>
              <Input placeholder="..."/>
            </Form.Item>
            <Form.Item>
              <Form.Label>Address</Form.Label>
              <Input placeholder="..."/>
            </Form.Item>
            <Form.Item direction="horizontal" justify="start" compact={true}>
              <Button nativeType="submit" color="blue">
                Save
              </Button>
              <Button nativeType="reset">
                Reset
              </Button>
            </Form.Item>
          </Form>
        </Card.Row>
      </Card>
    </div>
  </>;
}