import React from 'react';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  IconAccount,
  IconLock,
  Input,
  Row,
} from 'react-windy-ui';
import {useForm} from 'react-hook-form';

export default function Form4() {
  //for more information of the form validation, refer to https://react-hook-form.com/api/
  const {register, errors, handleSubmit} = useForm({
    //Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  const onSubmit = (data, e) => {
    console.log(data, e);
    //then call the api to save the data
  };

  const onError = (er, e) => console.log(er, e);

  return <>
    <Card style={{maxWidth: '500px', minWidth: '350px'}} hasBox={false}>
      <Card.Row>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Form.Item>
            <Input.IconInput
                inputProps={{name: 'username', defaultValue: 'Me'}}
                errorType={errors.username ? 'error' : null}
                inputRef={register({required: true})}
                leftIcon
                block placeholder="Username"
                icon={<IconAccount/>}/>

            {/*show the error messages */}
            <Form.ErrorMessage error={errors.username} validationType="required"
                               message="The username is required"/>
            <Form.ErrorMessage error={errors.username}
                               validationType="minLength"
                               message="The length should be greater than 5"/>

          </Form.Item>
          <Form.Item>
            <Input.IconInput
                type="password"
                name="password"
                inputProps={{name: 'password'}}
                errorType={errors.password ? 'error' : null}
                inputRef={register({required: true})}
                leftIcon
                block
                placeholder="Password"
                icon={<IconLock/>}/>
            <Form.ErrorMessage error={errors.password} validationType="required"
                               message="The password is required"/>
          </Form.Item>

          <Form.Item hasMessage={false}>
            <Row>
              <Col col={6}>
                <Checkbox label="Remember me" defaultChecked/>
              </Col>
              <Col col={6} style={{textAlign: 'right'}}>
                <Button inverted size="small">Forget password</Button>
              </Col>
            </Row>
          </Form.Item>
          <Form.Item hasMessage={false}>
            <Row>
              <Col col={12}>
                <Button nativeType="submit" block color="blue">Sign In</Button>
                <div className="text color-blue" style={{
                  fontSize: '.9rem',
                  cursor: 'pointer',
                }}>Or sign up?
                </div>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}