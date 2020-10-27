import React from 'react';
import {Button, Card, Form, Input, Notification, Select} from 'react-windy-ui';

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

  //watch the gender select and get the it's value to display the name input
  const genderField = watch('gender', '');

  return <>
    <Card style={{minWidth: '80%'}} hasBox={false}>
      <Card.Row>
        <Form form={form} onSubmit={onSubmit} direction="horizontal"
              labelCol={{col: 3}} controlCol={{col: 9}}>

          <Form.Item label="Gender"
                     name="gender"
                     required={true}
                     rules={{
                       required: 'The gender is required',
                       minLength: {value: 15, message: 'the min length'},
                       message: 'The gender is required',
                     }} justifyLabel="end">
            <Select block placeholder="Please select the gender"
                    defaultValue="">
              <Select.Option value="">None</Select.Option>
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="male">Male</Select.Option>
            </Select>
          </Form.Item>

          {
            genderField !== '' && <Form.Item
                name="name"
                label="Name"
                required={true}
                rules={{
                  required: 'The name is required',
                  message: 'The name is required',
                }} justifyLabel="end">
              <Input block placeholder="Name"/>
            </Form.Item>
          }

          <Form.Item compact={true}>
            <Button color="blue" nativeType="submit">Save</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}