import React, { useState } from 'react';
import { TextField, TimePicker, Notification } from 'react-windy-ui';

export default function TP2() {
  const [popupType, setPopupType] = useState('popup');

  const change = (textFormat, date) => {
    Notification.info(`textFormat=${textFormat}, date=${date}`);
  };

  return (
    <>
      <div className="doc doc-row">
        <TextField
          select={true}
          size="small"
          value={popupType}
          onChange={(value) => setPopupType(value)}
          label="Popup Type"
          style={{ width: '15rem' }}
        >
          <option value="popup">popup</option>
          <option value="modal">modal</option>
        </TextField>
      </div>
      <div className="doc doc-row space">
        <TimePicker onChange={change} popupType={popupType} />
      </div>
    </>
  );
}
