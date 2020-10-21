import React from 'react';
import {
  Button,
  Card,
  Checkbox,
  Form,
  IconAccount,
  IconLock,
  Input,
} from 'react-windy-ui';

export default function Form4() {
  //for more information of the form validation, refer to https://react-hook-form.com/api/
  const form = Form.useForm({
    //Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.
    mode: 'onSubmit',
  });

  const {register, errors, handleSubmit} = form;

  const onSubmit = (data, e) => {
    console.log("onSubmit", data, e);
    //then call the api to save the data
  };

  const onError = (er, e) => console.log("onError", er, e);

  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false}>
      <Card.Row>
        <Form form={form} onSubmit={onSubmit} onError={onError}>

          <Form.Item name="username" rules={{
            required: {
              value: true,
              message: 'The username is required'
            },
            minLength: {
              value: 5,
              message: 'The length should be greater than 5'
            }
          }}>
            <Input
                defaultValue='Name'
                leftIcon
                block placeholder="Username"
                icon={<IconAccount/>}/>
          </Form.Item>
          <Form.Item name="username" rules={{
            message: 'The value is invalid',
            required: true,
            minLength: 5
          }}>
            <Input
                type="password"
                leftIcon
                block
                placeholder="Password"
                icon={<IconLock/>}/>
          </Form.Item>

          <Form.Item direction="horizontal" compact={true} labelCol={{col: 6}}
                     controlCol={{col: 6, style: {textAlign: 'right'}}}>
            <Form.Label>
              <Checkbox label="Remember me"
                        defaultChecked/>
            </Form.Label>
            <Button inverted size="small"
                    onClick={(e) => {
                      console.log("reset password");
                      e.preventDefault();
                    }}>
              Forget password?
            </Button>
          </Form.Item>

          <Form.Item direction="horizontal" compact={true}>
            <Button nativeType="submit" block color="blue">Sign In</Button>
            <div className="text color-blue" style={{
              fontSize: '.9rem',
              cursor: 'pointer',
            }}>Or sign up?
            </div>
          </Form.Item>

        </Form>
      </Card.Row>
    </Card>
  </>;
}