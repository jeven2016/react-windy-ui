import React from 'react';
import {
  Button,
  Card,
  Checkbox,
  Col,
  Form,
  Input,
  Notification,
  Radio,
  RadioGroup,
  Row,
  Select
} from 'react-windy-ui';

export default function Form9() {
  const { form } = Form.useForm({
    mode: 'onSubmit',
    shouldFocusError: false,
    defaultValues: {
      firstName: 'name',
      city: 'ShangHai',
      accept: true
    }
  });

  const onSubmit = (data, e) => {
    Notification.info({
      position: 'topCenter',
      // title: 'The form data:',
      body: `${JSON.stringify(data)}`
    });
    //then call the api to save the data
    //.....
  };

  const gutter = { x: 8 };
  const colConf = {
    xs: 12,
    sm: 6
  };
  return (
    <>
      <Card style={{ minWidth: '80%', padding: '.5rem' }} hasBox={true}>
        <Card.Row>
          <Form form={form} onSubmit={onSubmit}>
            <Row gutter={gutter}>
              <Col {...colConf}>
                <Form.Item
                  direction="vertical"
                  label="First Name"
                  name="firstName"
                  required={true}
                  rules={{
                    required: 'The first name is required'
                  }}
                >
                  <Input block />
                </Form.Item>
              </Col>
              <Col {...colConf}>
                <Form.Item
                  direction="vertical"
                  label="Last Name"
                  name="lastName"
                  required={true}
                  rules={{
                    required: 'The last name is required'
                  }}
                >
                  <Input block />
                </Form.Item>
              </Col>

              <Col xs={12}>
                <Form.Item
                  direction="vertical"
                  label="Address"
                  name="address"
                  required={true}
                  rules={{
                    required: 'The address is required'
                  }}
                >
                  <Input block />
                </Form.Item>
              </Col>

              <Col xs={12} sm={4}>
                <Form.Item
                  label="City"
                  name="city"
                  required={true}
                  rules={{
                    required: 'The city is required'
                  }}
                >
                  <Select
                    block
                    placeholder="Please select a city"
                    onSelect={(value) => console.log(value)}
                  >
                    <Select.Option value="BeiJing">BeiJing</Select.Option>
                    <Select.Option value="ShangHai">ShangHai</Select.Option>
                    <Select.Option value="other">Other</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={12} sm={4}>
                <Form.Item
                  label="State"
                  name="state"
                  required={true}
                  rules={{
                    required: 'The state is required'
                  }}
                >
                  <Select
                    block
                    placeholder="Please select a state"
                    onSelect={(value) => console.log(value)}
                  >
                    <Select.Option value="...">...</Select.Option>
                    <Select.Option value="other">Other</Select.Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={12} sm={4}>
                <Form.Item
                  label="Zip"
                  name="Zip"
                  rules={{
                    required: 'The zip is required'
                  }}
                >
                  <Input placeholder="Zip" />
                </Form.Item>
              </Col>

              <Col {...colConf}>
                <Form.Item
                  direction="vertical"
                  label="Contact"
                  name="contact"
                  required={true}
                  rules={{
                    required: 'This is required'
                  }}
                >
                  <RadioGroup>
                    <Radio value="email">Email</Radio>
                    <Radio value="phone">Phone</Radio>
                  </RadioGroup>
                </Form.Item>
              </Col>
              <Col {...colConf}>
                <Form.Item direction="vertical" label="Introduction" name="introduction">
                  <Input block />
                </Form.Item>
              </Col>

              <Form.Item
                name="accept"
                rules={{
                  validate: (accepted) => {
                    if (!accepted) {
                      return 'You must accept the terms';
                    }
                  }
                }}
              >
                <Checkbox>Accept the terms</Checkbox>
              </Form.Item>

              <Form.Item compact={true}>
                <Row>
                  <Col>
                    <Button color="blue" nativeType="submit">
                      Save
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Row>
          </Form>
        </Card.Row>
      </Card>
    </>
  );
}
