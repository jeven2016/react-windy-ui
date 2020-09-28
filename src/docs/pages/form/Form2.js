import React from 'react';
import {Button, Card, Form, Input} from "react-windy-ui";

export default function Form2() {
  return <>
    <Card block hasBox={false}>
      <Card.Row>
        <Form>
          <Form.Item inline hasMessage={false}>
            <label>Name</label>
            <Input placeholder="..."/>
            <label>City</label>
            <Input placeholder="..."/>
            <Button nativeType="submit" color="blue">Update</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>
}