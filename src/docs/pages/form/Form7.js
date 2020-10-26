import React from 'react';
import {
  Button,
  Card,
  Form,
  Input,
  InputGroup,
  Select,
  Tooltip,
} from 'react-windy-ui';
import {IconLock} from '../../../components/src';

export default function Form7() {
  const {form} = Form.useForm({
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit = (data, e) => {
    console.log(data, e);
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
                       required: true,
                       message: 'The password is required',
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