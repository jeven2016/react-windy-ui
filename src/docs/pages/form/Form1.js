import React, {useRef} from 'react';
import {Button, Card, Form, Input} from "react-windy-ui";

export default function Form1() {
  const formRef = useRef(null);
  const resetForm = () => {
    // formRef.current.reset();
  };

  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false} hasBorder={true}>
      <Card.Row>
        <Form ref={formRef} onSubmit={()=>console.log("hello")}>
          <Form.Item>
            <Form.Label>Username</Form.Label>
            <Input placeholder="" block/>
            <Form.Message type="comment" message="The username is required"/>
          </Form.Item>
          <Form.Item>
            <Form.Label>Password</Form.Label>
            <Input type="password" block placeholder=""/>
            <Form.Message type="comment" message="The password is required"/>
          </Form.Item>
          <Form.Item>
            <Button nativeType="submit" color="blue">Sign In</Button>
            <Button nativeType="reset" onClick={resetForm}>Reset</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>
}