import React from 'react';
import {Button, Col, Form, Input, Row} from 'react-windy-ui';

export default function Form1() {
  const form = Form.useForm({
    //Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.
    //for more information, you can refer to : https://react-hook-form.com/api/useform
    mode: 'onSubmit',
  });

  //invoked while submit button is clicked
  const onSubmit = (data, e) => {
    console.log('onSubmit', data, e);
    //then call the api to save the data
    //......
  };

  const {reset} = form;

  return <div className="doc doc-row space">
    <Form form={form} onSubmit={onSubmit}>
      <Form.Item label="Username" name="username" required rules={{required: 'The username is required'}}>
        <Input placeholder="Please enter your name" block/>
      </Form.Item>

      <Form.Item label="Password" name="password" required rules={{required: 'The password is required'}}>
        <Input type="password" block
               placeholder="Please enter your password"/>
      </Form.Item>

      <Form.Item>
        <Row gutter={{x: 16}}>
          <Col><Button nativeType="submit" color="blue" block>Sign In</Button></Col>
          <Col><Button nativeType="reset" block onClick={() => reset({
            username: '',
            password: ''
          })}>Reset</Button></Col>
        </Row>
      </Form.Item>
    </Form>
  </div>;
}