import React from 'react';
import {Button, Card, Form, IconClear, Input} from 'react-windy-ui';
import {IconChecked} from "../../../../components/src";

export default function Form7() {
  const {
    form, watch, errors,
    formState: {submitCount, isValid},
  } = Form.useForm({
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  console.log(errors);

  const onSubmit = (data, e) => {
  };

  const onError = (data, e) => {
    // console.log(data);
  }

  return <>
    <Card style={{minWidth: '80%'}} hasBox={false}>
      <Card.Row>
        <Form form={form} onSubmit={onSubmit}
              onError={onError}
              direction="horizontal"
              labelCol={{sm: 12, md: 3}} controlCol={{sm: 12, md: 9}}>

          <Form.Item label="New Password"
                     name="newPwd"
                     required={true}
                     rules={{required: 'The password is required'}}
                     justifyLabel="end">
            <Input type="password" block errorType={errors.newPwd ? 'error' : 'ok'}
                   rightIcons={errors.newPwd ? [<IconClear extraClassName="text color-red"/>] : [<IconChecked
                     color="text color-green"/>]}/>
          </Form.Item>

          {/*          <Form.Item label="Confirm Password"
                     name="confirmPwd"
                     required={true}
                     justifyLabel="end"
                     rules={{
                       required: 'The confirm password is required',
                       validate: (value) => value === watch('newPwd')
                         || "The confirm password doesn't match the password",
                     }}>
            <Input type="password" block/>
          </Form.Item>*/}

          <Form.Item label="">
            <Button color="blue" nativeType="submit">Save</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}