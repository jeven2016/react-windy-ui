import React, {useState} from "react";
import {TimePicker} from "react-windy-ui";

export default function TP4() {
  const [customTime, setCustomTime] = useState('15:00:00');

  return <>
    <div className="doc doc-row space">
      The time: {customTime}
    </div>
    <div className="doc doc-row space">
    <TimePicker time={customTime} inline={true}
                onChange={(timeText) => setCustomTime(timeText)}/>
  </div>
    </>;
};