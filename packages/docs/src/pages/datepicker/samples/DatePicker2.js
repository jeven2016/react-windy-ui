import React, { useState } from 'react';
import { DatePicker, InputGroup, Select } from 'react-windy-ui';

export default function DatePicker2() {
  const [type, setType] = useState('date');
  const placeholder = {
    date: '请选择日期',
    month: '请选择月份',
    year: '请选择年份',
    dateTime: '请选择日期时间'
  };

  return (
    <div className="doc doc-row space">
      <InputGroup size="small" style={{ maxWidth: '60%', minWidth: '20rem' }}>
        <InputGroup.Item autoScale={false}>
          <Select
            defaultValue={type}
            style={{ width: '7rem' }}
            onSelect={(value) => setType(value)}
          >
            <Select.Option value="date">date</Select.Option>
            <Select.Option value="month">month</Select.Option>
            <Select.Option value="year">year</Select.Option>
            <Select.Option value="dateTime">dateTime</Select.Option>
          </Select>
        </InputGroup.Item>
        <DatePicker type={type} placeholder={placeholder[type]} />
      </InputGroup>
    </div>
  );
}
