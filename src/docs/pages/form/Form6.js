import React from 'react';
import {
  Button,
  Card,
  Form,
  IconAccount,
  IconLock,
  Input,
  InputGroup,
  Radio,
  RadioGroup,
  Select,
  Tooltip
} from 'react-windy-ui';

export default function Form6() {
  const {form} = Form.useForm({
    mode: 'onSubmit'
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

          <Form.Item label="username" required name="username" rules={{
            required: true,
            message: 'The username is required'
          }} justifyLabel="end">
            <Input leftIcon block placeholder="Username"
                   icon={<IconAccount/>}/>
          </Form.Item>

          <Form.Item label="Password" required name="pwd" rules={{
            required: true,
            message: 'The password is required'
          }} justifyLabel="end">
            <Input leftIcon block placeholder="Password"
                   icon={<IconLock/>}/>
          </Form.Item>

          <Form.Item label="Age" name="age" rules={{
            required: true,
            message: 'The age is required'
          }} justifyLabel="end">
            <Input block placeholder="Age"/>
          </Form.Item>

          <Form.Item label="Gender" name="gender" rules={{
            required: true,
            message: 'The gender is required'
          }} justifyLabel="end">
            <Select block placeholder="Please select the gender"
                    onSelect={(value) => console.log(value)}>
              <Select.Option value="nj">Female</Select.Option>
              <Select.Option value="sh">Male</Select.Option>
              <Select.Option value="other">Other </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Phone Number" name="phone" rules={{
            required: true,
            message: 'The phone number is required'
          }} justifyLabel="end">
            <Tooltip body="Phone Number: +86 13344666343">
              <InputGroup block>
                <InputGroup.Item autoScale={false} style={{flex: '0 1 5rem'}}>
                  <Select onSelect={(value) => console.log(value)}>
                    <Select.Option value="+86">+86</Select.Option>
                    <Select.Option value="+87">+87</Select.Option>
                    <Select.Option value="+88">+88</Select.Option>
                  </Select>
                </InputGroup.Item>
                <Input placeholder="Phone Number"/>
              </InputGroup>
            </Tooltip>
          </Form.Item>

          <Form.Item label="Nationality" required name="nationality" rules={{
            required: true,
            message: 'The nationality is required'
          }} justifyLabel="end">
            <RadioGroup onChange={(val) => console.log(val)}>
              <Radio value="China">
                China
              </Radio>
              <Radio value="US">
                US
              </Radio>
              <Radio value="UK">
                UK
              </Radio>
            </RadioGroup>
          </Form.Item>

          <Form.Item compact={true}>
            <Button color="blue">Save</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}