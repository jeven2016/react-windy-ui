import React from 'react';
import {
  Button,
  Card,
  Checkbox,
  Form,
  IconAccount,
  IconLock,
  Input,
  Row,
  Col,
} from 'react-windy-ui';

export default function Form4() {
  //for more information of the form validation, refer to https://react-hook-form.com/api/
  const form = Form.useForm({
    //Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.
    mode: 'onSubmit',
  });

  const onSubmit = (data, e) => {
    console.log('onSubmit', data, e);
    //then call the api to save the data
  };

  const onError = (er, e) => console.log('onError', er, e);

  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false}>
      <Card.Row>
        <Form form={form} onSubmit={onSubmit} onError={onError}>

          <Form.Item name="username" rules={{
            required: {
              value: true,
              message: 'The username is required',
            },
            minLength: {
              value: 5,
              message: 'The length should be greater than 5',
            },
          }}>
            <Input
                defaultValue='Name'
                leftIcon
                block
                placeholder="Username"
                icon={<IconAccount/>}/>
          </Form.Item>

          {/*only display one same message*/}
          <Form.Item name="password" rules={{
            required: 'The password is invalid',
          }}>
            <Input
                type="password"
                leftIcon
                block
                placeholder="Password"
                icon={<IconLock/>}/>
          </Form.Item>

          <Form.Item direction="horizontal" compact={true}>
            <Row>
              <Col>
                <Checkbox label="Remember me"
                          defaultChecked/>
              </Col>
              <Col justify="end">
                <Button inverted size="small"
                        onClick={(e) => {
                          console.log('reset password');
                          e.preventDefault();
                        }}>
                  Forget password?
                </Button>
              </Col>
            </Row>


          </Form.Item>

          <Form.Item direction="horizontal" compact={true}>
            <div style={{flex: '1 1 100%'}}>
              <Button nativeType="submit" block color="blue">Sign In</Button>
              <div className="text color-blue" style={{
                fontSize: '.9rem',
                cursor: 'pointer',
              }}>Or sign up?
              </div>
            </div>
          </Form.Item>

        </Form>
      </Card.Row>
    </Card>
  </>;
}