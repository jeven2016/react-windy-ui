import React, {useState} from 'react';
import {DatePicker, Notification} from 'react-windy-ui';

export default function DatePicker1() {
  const [date, setDate] = useState();
  const notify = (text, date) => {
    Notification.info(
      `textFormat=${text}, date=${date}`);
    setDate(text);
  };

  return <>
    <div className="doc doc-row space">
      <DatePicker onChange={notify} value={date} placeholder="年-月-日"/>
    </div>
    <div className="doc doc-row space">
      <DatePicker defaultValue="2018-10-11" onChange={(dateString) => console.log(dateString)}/>
    </div>
  </>;
}