import React from 'react';
import {
  Checkbox,
  Form,
  IconChecked2,
  IconWarning,
  Input,
  Radio,
  RadioGroup
} from 'react-windy-ui';

export default function Form11() {
  return (
    <>
      <div className="doc doc-row">
        <h4 className="text comment"> Customized Form</h4>
        <Form direction="vertical">
          <Form.Item>
            <Form.Label>Field1</Form.Label>
            <Input
              block
              errorType="ok"
              icon={<IconChecked2 />}
              iconProps={{
                style: {
                  color: '#49b847'
                }
              }}
              placeholder="..."
            />
          </Form.Item>

          <Form.Item compact={true}>
            <Form.Label>Field2</Form.Label>
            <Input block errorType="warning" placeholder="..." />
            <Form.Message errorType="warning" message="Invalid value" />
          </Form.Item>

          <Form.Item compact={true}>
            <Form.Label>Field3</Form.Label>
            <Input
              block
              errorType="error"
              icon={<IconWarning />}
              iconProps={{
                style: {
                  color: '#ff350e'
                }
              }}
            />
            <Form.Message errorType="error" message="Invalid value" />
          </Form.Item>

          <Form.Item compact={true}>
            <Form.Label>Field4</Form.Label>
            <RadioGroup errorType="error">
              <Radio value="email">Email</Radio>
              <Radio value="phone">Phone</Radio>
            </RadioGroup>
            <Form.Message errorType="error" message="You should select one option" />
          </Form.Item>

          <Form.Item compact={true}>
            <Form.Label>Field5</Form.Label>
            <Checkbox errorType="error" defaultChecked={false}>
              Accept the terms
            </Checkbox>
            <Form.Message errorType="error" message="You should accept it" />
          </Form.Item>

          <Form.Item compact={true}>
            <Form.Label>Field6</Form.Label>
            <RadioGroup errorType="ok" defaultValue="email">
              <Radio value="email">Email</Radio>
              <Radio value="phone">Phone</Radio>
            </RadioGroup>
            <Form.Message errorType="error" message="A valid option is selected" />
          </Form.Item>

          <Form.Item compact={true}>
            <Form.Label>Field7</Form.Label>
            <Checkbox errorType="ok" defaultChecked={true}>
              Accept the terms
            </Checkbox>
            <Form.Message errorType="ok" message="You have accepted" />
          </Form.Item>
        </Form>
      </div>
    </>
  );
}
