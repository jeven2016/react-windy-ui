import React, {useState} from "react";
import {TimePicker, Notification} from "react-windy-ui";

export default function TP1() {
  const [customTime, setCustomTime] = useState('15:00:00');

  const changeTime = (timeText, timeDate) => {
    Notification.info(
      `timeText=${timeText}, date=${timeDate}`);
  }

  return <>
    <div className="doc doc-row space">
      <TimePicker onChange={changeTime}/>
      <br/>
      <TimePicker defaultTime="01:22:01" onChange={changeTime}/>
      <br/>
      <TimePicker time={customTime} defaultTime="01:22:01"
                  onChange={(timeText) => setCustomTime(timeText)}/>
    </div>
  </>
};