import React from 'react';
import {
  Button,
  Card,
  Col,
  Form,
  IconAccount,
  IconLock,
  Input,
  InputGroup,
  Row,
  Select,
  Tooltip
} from 'react-windy-ui';

export default function Form16() {
  const {form} = Form.useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data, e) => {
    console.log(data, e);
    //then call the api to save the data
  };

  console.log('parent updated');
  return <>
    <Card style={{minWidth: '80%'}} hasBox={false}>
      <Card.Row>
        <Form form={form} onSubmit={onSubmit} direction="horizontal"
              labelCol={{col: 3}} controlCol={{col: 9}}>

          <Form.Item label="username" required name="username" rules={{
            required: 'The username is required',
          }} justifyLabel="end">
            <Input leftIcon block placeholder="Username"
                   icon={<IconAccount/>}/>
          </Form.Item>

          <Form.Item label="Password" required name="pwd" rules={{
            required: 'The password is required',
          }} justifyLabel="end">
            <Input leftIcon block placeholder="Password"
                   icon={<IconLock/>}/>
          </Form.Item>

          <Form.Item label="Age" name="age" rules={{
            required: 'The age is required',
          }} justifyLabel="end">
            <Input block placeholder="Age"/>
          </Form.Item>

          <Form.Item label="Gender" name="gender" rules={{
            required: 'The gender is required',
          }} justifyLabel="end">
            <Select block placeholder="Please select the gender"
                    onSelect={(value) => console.log(value)}>
              <Select.Option value="nj">Female</Select.Option>
              <Select.Option value="sh">Male</Select.Option>
              <Select.Option value="other">Other </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item rootItem={true} label="Phone Number" justifyLabel="end">
            <Tooltip body="Phone Number: +86 13344666343">
              <InputGroup block>
                <InputGroup.Item autoScale={false} style={{flex: '0 1 5rem'}}>
                  <Form.Item
                      name="countryCode"
                      simple={true}
                      rules={{
                        required: 'The country code is required',
                      }}>
                    <Select onSelect={(value) => console.log(value)}>
                      <Select.Option value="+86">+86</Select.Option>
                      <Select.Option value="+87">+87</Select.Option>
                      <Select.Option value="+88">+88</Select.Option>
                    </Select>
                  </Form.Item>
                </InputGroup.Item>

                <Form.Item
                    name="phoneNumber"
                    simple={true}
                    rules={{
                      required: 'The phone number is required',
                    }}>
                  <Input placeholder="Phone Number"/>
                </Form.Item>
              </InputGroup>
            </Tooltip>
          </Form.Item>


          {/*   <Form.Item label="Nationality" required name="nationality" rules={{
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
          </Form.Item>*/}


          <Form.Item compact={true}>
            <Row>
              <Col col={9} xsOffset={3}>
                <Button color="blue" nativeType="submit">Save</Button>
              </Col>
            </Row>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}