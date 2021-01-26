import React from 'react';
import {Button, Form, Input} from 'react-windy-ui';

export default function Form2() {
  return <>
    <div className="doc doc-row">
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
          <Button nativeType="submit" color="blue">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  </>;
}