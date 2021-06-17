import React from 'react';
import {
  Button,
  Card,
  Form,
  IconAccount,
  IconLock,
  Input,
  InputGroup,
  Select,
  Space,
  RadioGroup,
  Radio
} from 'react-windy-ui';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhone} from '@fortawesome/free-solid-svg-icons';

export default function Form10() {
  const {form, setValue} = Form.useForm({
    mode: 'onSubmit',
  });

  const onSubmit = (data, e) => {
    console.log(data, e);
    //then call the api to save the data
  };

  const fill = () => {
    setValue('Username', 'Jack');
    setValue("pwd", 'pwd');
    setValue("age", '55');
    setValue("gender", 'male');
    setValue("countryCode", '+87');
    setValue("phoneNumber", '18933432134');
    setValue("hobby", ['Skating', 'Swimming']);
    setValue("nationality", 'US');
  }

  return <>
    <Card style={{minWidth: '80%'}} hasBox={false}>
      <Card.Row>
        <Form form={form} onSubmit={onSubmit} direction="horizontal"
              labelCol={{lg: 3, md: 12}} controlCol={{lg: 9, md: 12}}>

          <Form.Item label="Username" required name="Username" rules={{
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
              <Select.Option value="female">Female</Select.Option>
              <Select.Option value="male">Male</Select.Option>
              <Select.Option value="other">Other </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item rootItem={true} label="Phone" justifyLabel="end">
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
              <InputGroup.Label>
                <FontAwesomeIcon icon={faPhone}/>
              </InputGroup.Label>
              <InputGroup.Item autoScale={false}>
                <Button color="green"
                        onClick={(e) => e.preventDefault()}>Test</Button>
              </InputGroup.Item>
            </InputGroup>

          </Form.Item>

          <Form.Item label="Hobby" name="hobby" rules={{
            validate: (values) => {
              if (values == null || values.length === 0) {
                return 'You should select one or more items';
              }
            },
          }} justifyLabel="end">
            <Select multiSelect block searchable={true}>
              <Select.Option value="Skating">Skating</Select.Option>
              <Select.Option value="Swimming">Swimming</Select.Option>
              <Select.Option value="Jumping">Jumping</Select.Option>
              <Select.Option value="Other">Other</Select.Option>
            </Select>
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


          <Form.Item label="" compact={true}>
            <Space>
              <Button color="blue" nativeType="submit">Save</Button>
              <Button onClick={fill}>Fill Form</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}