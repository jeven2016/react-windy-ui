import React, {useCallback, useRef} from 'react';
import clsx from "clsx";
import Card from "../card";
import TimeList from "./TimeList";
import useInternalState from "../common/useInternalState";
import {isBlank, nonNil} from "../Utils";
import {convertDate, useCloseButton} from "./DateUtils";
import Divider from "../divider";
import {Button} from "../index";
import {TimeType} from "./DateConfig";
import dayjs from "dayjs";


const TimePicker = React.forwardRef((props, ref) => {
  const {
    time,
    defaultTime,
    timeFormat = "HH:mm:ss",
    onChange,

  } = props;

  const [timeValue, setTimeValue] = useInternalState({
    props,
    stateName: 'time',
    defaultState: !isBlank(defaultTime) ? convertDate(defaultTime, timeFormat) : null,
    state: !isBlank(time) ? convertDate(defaultTime, timeFormat) : null,
  });

  const dataPickerClsName = clsx('time-picker');

  const changeTime = useCallback((type, value) => {
    const latestTime = nonNil(timeValue) ? timeValue[type](value) : (dayjs())[type](value);
    setTimeValue(latestTime);
    console.log(latestTime.format(timeFormat));
  }, [setTimeValue, timeFormat, timeValue]);

  return <Card extraClassName={dataPickerClsName} hasWidth={false} ref={ref}>
    <div className="tp-body">
      <TimeList maxValue={24} changeTime={changeTime} timeType={TimeType.hour} time={timeValue}/>
      <TimeList maxValue={60} changeTime={changeTime} timeType={TimeType.minute} time={timeValue}/>
      <TimeList maxValue={60} changeTime={changeTime} timeType={TimeType.second} time={timeValue}/>

      <div className="tp-mask"/>
      <div className="tp-indicator"/>
    </div>
    <Divider/>
    <Card.Footer extraClassName="date-picker-footer">
      <div className="left">
        <Button type="primary" size="small" inverted>Now</Button>
      </div>
      <div className="right">
        <Button type="primary" size="small" inverted>OK</Button>
      </div>
    </Card.Footer>
  </Card>;
});

export default TimePicker;