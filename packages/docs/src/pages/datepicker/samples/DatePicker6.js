import React, { useState } from 'react';
import { DatePicker, Notification, TextField } from 'react-windy-ui';

export default function DatePicker5() {
  const [type, setType] = useState('date');

  const change = (textFormat, date) => {
    Notification.info(`textFormat=${textFormat}, date=${date}`);
  };

  return (
    <>
      <div className="doc doc-row">
        <TextField
          select={true}
          size="small"
          value={type}
          onChange={(value) => setType(value)}
          label="Type"
          style={{ width: '15rem' }}
        >
          <option value="date">date</option>
          <option value="month">month</option>
          <option value="year">year</option>
          <option value="dateTime">dateTime</option>
        </TextField>
      </div>

      <div className="doc doc-row space">
        <DatePicker inline={true} onChange={change} type={type} hasTitle={true} hasFooter={false} />
      </div>
    </>
  );
}
