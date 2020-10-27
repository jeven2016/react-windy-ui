import React from 'react';
import {Button, Card, Form, Input, Notification} from 'react-windy-ui';

export default function Form7() {
  const {form, watch} = Form.useForm({
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit = (data, e) => {
    Notification.mini({
      position: 'topCenter',
      title: 'The form data:',
      body: `${JSON.stringify(data)}`
    });
    //then call the api to save the data
  };

  return <>
    <Card style={{minWidth: '80%'}} hasBox={false}>
      <Card.Row>
        <Form form={form} onSubmit={onSubmit} direction="horizontal"
              labelCol={{col: 3}} controlCol={{col: 9}}>

          <Form.Item label="New Password"
                     name="newPwd"
                     required={true}
                     rules={{
                       required: true,
                       message: 'The password is required',
                     }}
                     justifyLabel="end">
            <Input type="password"/>
          </Form.Item>

          <Form.Item label="Confirm Password"
                     name="confirmPwd"
                     required={true}
                     justifyLabel="end"
                     rules={{
                       required: {
                         value: true,
                         message: 'The confirm password is required',
                       },
                       validate: (value) => value === watch('newPwd'),
                       message: "The confirm password doesn't match the password"
                     }}>
            <Input type="password"/>
          </Form.Item>

          <Form.Item compact={true}>
            <Button color="blue" nativeType="submit">Save</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}