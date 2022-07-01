import React from 'react';
import { Button, Card, Col, Form, Input, Notification, Row, Select } from 'react-windy-ui';

export default function Form8() {
  const { form, watch } = Form.useForm({
    mode: 'onSubmit',
    shouldFocusError: false
  });

  const onSubmit = (data, e) => {
    Notification.mini({
      position: 'topCenter',
      title: 'The form data:',
      body: `${JSON.stringify(data)}`
    });
    //then call the api to save the data
    //......
  };

  //watch the gender select and check it's value to decide if name input should present
  const genderField = watch('gender', '');

  return (
    <>
      <Card style={{ minWidth: '80%' }} hasBox={false}>
        <Card.Row>
          <Form
            form={form}
            onSubmit={onSubmit}
            direction="horizontal"
            labelCol={{ col: 3 }}
            controlCol={{ col: 9 }}
          >
            <Form.Item
              label="Gender"
              name="gender"
              required={true}
              rules={{
                required: 'The gender is required'
              }}
              justifyLabel="end"
            >
              <Select block placeholder="Please select the gender" defaultValue="">
                <Select.Option value="">None</Select.Option>
                <Select.Option value="female">Female</Select.Option>
                <Select.Option value="male">Male</Select.Option>
              </Select>
            </Form.Item>

            {genderField !== '' && (
              <Form.Item
                name="name"
                label="Name"
                required={true}
                rules={{
                  required: 'The name is required'
                }}
                justifyLabel="end"
              >
                <Input block placeholder="Name" />
              </Form.Item>
            )}

            <Form.Item compact={true}>
              <Row>
                <Col col={9} xsOffset={3}>
                  <Button color="blue" nativeType="submit">
                    Save
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Card.Row>
      </Card>
    </>
  );
}
