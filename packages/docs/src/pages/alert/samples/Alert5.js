import React, { useState } from 'react';
import { Alert, Checkbox, Tooltip } from 'react-windy-ui';

export default function Alert5() {
  const [autoClose, setAutoClose] = useState(false);
  return (
    <>
      <div className="doc doc-row">
        <Tooltip body="Close in 3 seconds">
          <Checkbox
            label={autoClose ? 'Closing' : 'Auto close'}
            onChange={() => setAutoClose(true)}
          />
        </Tooltip>
      </div>
      <Alert type="info" body="info alert" autoClose={autoClose} duration={3000} />
    </>
  );
}
