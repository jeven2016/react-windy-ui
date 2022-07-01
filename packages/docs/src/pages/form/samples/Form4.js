import React from 'react';
import { Button, Checkbox, Col, Form, IconAccount, IconLock, Input, Row } from 'react-windy-ui';

export default function Form4() {
  //for more information of the form validation, refer to https://react-hook-form.com/api/
  const form = Form.useForm({
    //Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.
    mode: 'onSubmit',
    defaultValues: {
      username: 'Name'
    }
  });

  const onSubmit = (data, e) => {
    console.log('onSubmit', data, e);
    //then call the api to save the data
  };

  const onError = (er, e) => console.log('onError', er, e);

  return (
    <>
      <div className="doc doc-row space">
        <Form form={form} onSubmit={onSubmit} onError={onError}>
          <Form.Item
            name="username"
            rules={{
              required: {
                value: true,
                message: 'The username is required'
              },
              minLength: {
                value: 5,
                message: 'The length should be greater than 5'
              }
            }}
          >
            <Input leftIcon block placeholder="Username" icon={<IconAccount />} />
          </Form.Item>

          {/*only display one same message*/}
          <Form.Item
            name="password"
            rules={{
              required: 'The password is invalid'
            }}
          >
            <Input type="password" leftIcon block placeholder="Password" icon={<IconLock />} />
          </Form.Item>

          <Form.Item direction="horizontal">
            <Row>
              <Col>
                <Checkbox label="Remember me" defaultChecked />
              </Col>
              <Col justify="end">
                <Button
                  inverted
                  size="small"
                  hasBox={false}
                  onClick={(e) => {
                    console.log('reset password');
                  }}
                >
                  Forget password?
                </Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item direction="horizontal" compact>
            <Button nativeType="submit" block color="blue">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
