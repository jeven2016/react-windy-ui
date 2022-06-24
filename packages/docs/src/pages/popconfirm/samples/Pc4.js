import React, { useState } from 'react';
import { Button, PopConfirm, TextField } from 'react-windy-ui';

export default function Pc4() {
  const [justifyFooter, setJustify] = useState('end');

  return (
    <>
      <div className="doc doc-row">
        <TextField
          select={true}
          size="small"
          defaultValue="start"
          onChange={(value) => setJustify(value)}
          label="Justify Footer"
          style={{ width: '15rem' }}
          required={true}
        >
          <option value="start">start</option>
          <option value="center">center</option>
          <option value="end">end</option>
        </TextField>
      </div>

      <PopConfirm body="Are you sure to delete?" justifyFooter={justifyFooter}>
        <Button color="red">Delete</Button>
      </PopConfirm>
    </>
  );
}
