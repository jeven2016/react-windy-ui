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
          <Form.Item type="block">
            <label>Username</label>
            <Input placeholder="..." block/>
            <h5 className="text comment">Please enter your username</h5>
          </Form.Item>
          <Form.Item type="block">
            <label>Password</label>
            <Input type="password" block placeholder="..."/>
            <h5 className="text comment">Please enter your password</h5>
          </Form.Item>
          <Form.Item type="block">
            <Button nativeType="submit" color="blue">Sign In</Button>
            <Button nativeType="reset" onClick={resetForm}>Reset</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>
}