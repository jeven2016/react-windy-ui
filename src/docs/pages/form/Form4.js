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
          <Form.Item name="username" resource={{}}>
            <Input
                name='username'
                defaultValue='Me'
                errorType={errors.username ? 'error' : null}
                ref={register({required: true, minLength: 5})}
                leftIcon
                block placeholder="Username"
                icon={<IconAccount/>}/>

            {/*show the error messages */}
            <Form.Message error={errors.username} validationType="required"
                          message="The username is required"/>
            <Form.Message error={errors.username}
                          validationType="minLength"
                          message="The length should be greater than 5"/>

          </Form.Item>
          <Form.Item name="password">
            <Input.IconInput
                type="password"
                name="password"
                errorType={errors.password ? 'error' : null}
                ref={register({required: true})}
                leftIcon
                block
                placeholder="Password"
                icon={<IconLock/>}/>

            <Form.Message error={errors.password} validationType="required"
                          message="The password is required"/>
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