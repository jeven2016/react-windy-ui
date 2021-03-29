import React from 'react';
import {Button, Form, Input, Notification, Radio, RadioGroup, Space} from 'react-windy-ui';
import {Toggle} from "../../../../components/src";

export default function Form12() {
  const {form, clearErrors, trigger, handleSubmit} = Form.useForm({
    mode: 'onChange',
    shouldFocusError: false,
  });

  const onSubmit = (data, e) => {
    console.log(data)
    Notification.mini({
      position: 'topCenter',
      title: 'The form data:',
      body: `${JSON.stringify(data)}`,
    });
    //then call the api to save the data
  };

  return <>

    <div className="doc doc-row">
      <Form direction="vertical" form={form} onSubmit={onSubmit}>

        <Form.Item justifyLabel="end" name="name" label="Name" required
                   rules={{
                     required: 'The name is required',
                   }}>
          <Input block/>
        </Form.Item>

        <Form.Item justifyLabel="end" name="age" label="Age" required
                   rules={{
                     required: 'The age is required',
                   }}>
          <Input block/>
        </Form.Item>

        <Form.Item
          label="Contact"
          name="contact"
          required
          rules={{
            required: 'This is required',
          }}>
          <RadioGroup>
            <Radio value="email">Email</Radio>
            <Radio value="phone">Phone</Radio>
          </RadioGroup>
        </Form.Item>

        <Form.Item
          label="e"
          name="e"
          rules={{
            validate: (value) => {
              if (!value) {
                return "Should be enabled";
              }
            }
          }}>
          <Toggle/>
        </Form.Item>

        <Form.Item>
          <Space gutter={{x: 8, y: 8}}>
            <Button color="blue" nativeType="submit">Submit</Button>
            <Button onClick={async () => {
              const succeed = await trigger(['name', 'age'])
              if (succeed) {
                await handleSubmit(onSubmit)();
              }
            }}>
              Check Name & Age
            </Button>
            <Button onClick={() => clearErrors()}>Clear Errors</Button>
          </Space>
        </Form.Item>

      </Form>
    </div>
  </>;
}