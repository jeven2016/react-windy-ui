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

export default function Form16() {
  const {form} = Form.useForm({
    mode: 'onSubmit',
    shouldFocusError: false,
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

          <Form.Item label="Gender"
                     name="gender"
                     required={true}
                     rules={{
                       required: 'The gender is required',
                     }} justifyLabel="end">
            <Select block placeholder="Please select the gender" defaultValue=""
                    onSelect={(value) => console.log(value)}>
              <Select.Option value="nj">Female</Select.Option>
              <Select.Option value="sh">Male</Select.Option>
              <Select.Option value="other">Other </Select.Option>
            </Select>
          </Form.Item>

          <Form.Item rootItem={true} label="Phone Number" required={true}
                     justifyLabel="end">
            <Tooltip body="Phone Number: +86 13344666343">
              <InputGroup block>
                <InputGroup.Item autoScale={false} style={{flex: '0 1 6rem'}}>
                  <Form.Item
                      name="countryCode"
                      simple={true}
                      rules={{
                        required: 'The country code is required',
                      }}>
                    <Select placeholder="Code" defaultValue=""
                            onSelect={(value) => console.log(value)}>
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
                  <Input placeholder="Phone Number" defaultValue=""/>
                </Form.Item>
              </InputGroup>
            </Tooltip>
          </Form.Item>

          <Form.Item compact={true} label="">
            <Button color="blue" nativeType="submit">Save</Button>
          </Form.Item>
        </Form>
      </Card.Row>
    </Card>
  </>;
}