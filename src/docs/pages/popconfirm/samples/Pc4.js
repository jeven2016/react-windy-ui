import React, {useState} from "react";
import {Button, PopConfirm, Select} from 'react-windy-ui';

export default function Pc4() {
  const [justifyFooter, setJustify] = useState("end");

  return <>
    <div className="doc doc-row">
      <span style={{
        marginRight: '1rem',
        fontWeight: '600'
      }}>Justify Footer:</span>

      <Select defaultValue="end"
              onSelect={(value) => setJustify(value)}>
        <Select.Option value="start">start</Select.Option>
        <Select.Option value="center">center</Select.Option>
        <Select.Option value="end">end</Select.Option>
      </Select>
    </div>

    <PopConfirm body="Are you sure to delete?" justifyFooter={justifyFooter}>
      <Button color="red">Delete</Button>
    </PopConfirm>
  </>
}