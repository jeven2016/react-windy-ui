import React, {useState} from "react";
import {Button, Input} from "react-windy-ui";
import dayjs from "dayjs";

export default function TP2() {
  const [format, setFormat] = useState("H:M:S");
  const [value, setValue] = useState('');
  const [result, setResult] = useState('===');

  const check = () => {
    const isValid = dayjs(value, format, false).isValid();
    console.log(isValid);
    setResult(isValid);
  }
  return <>
    <div className="doc doc-row space">
      <Input value={format} onChange={e => setFormat(e.target.value)} placeholder="format"/>
      <Input value={value} onChange={e => setValue(e.target.value)} placeholder="time"/>
      <Button onClick={check}>Check</Button>
      <div>
        Check result: {result}
      </div>
    </div>
  </>
};