import React, {useState} from 'react';
import {Button, Form, Input, Select, Space} from 'react-windy-ui';

export default function Form2() {
  const [direction, setDirection] = useState('inline');
  const isHorizontal = direction === 'horizontal';

  const form = Form.useForm({
    //Validation will trigger on the submit event and invalid inputs will attach onChange event listeners to re-validate them.
    mode: 'onSubmit',
  });

  //invoked while submit button is clicked
  const onSubmit = (data, e) => {
    console.log('onSubmit', data, e);
    //then call the api to save the data
  };

  return <>
    <div className="doc doc-row space">
      <Space>
        <span>Direction:</span>
        <Select value={direction} onSelect={value => setDirection(value)} style={{width: '10rem'}}>
          <Select.Option value="inline">inline</Select.Option>
          <Select.Option value="horizontal">horizontal</Select.Option>
          <Select.Option value="vertical">vertical</Select.Option>
        </Select>
      </Space>
    </div>

    <div className="doc doc-row">
      <Form form={form} onSubmit={onSubmit}
            direction={direction}
            labelCol={isHorizontal ? {col: 3} : null}
            controlCol={isHorizontal ? {col: 9} : null}>
        <Form.Item name="name" label="Name" justifyLabel="end" required rules={{required: 'The name is required'}}>
          <Input placeholder="Name"/>
        </Form.Item>
        <Form.Item name="city" label="City" justifyLabel="end" required rules={{required: 'The city is required'}}>
          <Input placeholder="City"/>
        </Form.Item>
        <Form.Item label={isHorizontal ? '' : null}>
          <Button color="blue" nativeType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  </>;
}