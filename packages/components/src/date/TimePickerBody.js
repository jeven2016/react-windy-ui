import React, {useCallback, useMemo} from 'react';
import clsx from "clsx";
import Card from "../card";
import TimeList from "./TimeList";
import {nonNil} from "../Utils";
import Divider from "../divider";
import {Button} from "../index";
import {DataConfig, TimeType} from "./DateConfig";
import useEventCallback from "../common/useEventCallback";
import dayjs from "dayjs";

const TimePickerBody = React.forwardRef((props, ref) => {
  const {
    initialDate,
    time,
    setTime,
    onSelectTime,
    hasFooter = true,
    hasTitle = false,
    locale,
    dateFormat = DataConfig.format.time
  } = props;

  const dataPickerClsName = clsx('time-picker');

  const realTime = useMemo(() => time || initialDate, [initialDate, time]);

  const changeTime = useCallback((type, value, e) => {
    const nextTime = nonNil(time) ? time[type](value) : initialDate[type](value);
    setTime && setTime(nextTime);

    onSelectTime && onSelectTime(nextTime, true, e);
  }, [time, initialDate, setTime, onSelectTime]);

  const close = useCallback((e) => {
    onSelectTime && onSelectTime(realTime, false, e);
  }, [onSelectTime, realTime]);

  const selectNow = useEventCallback((e) => {
    onSelectTime && onSelectTime(dayjs(), false, e);
  });

  return <Card extraClassName={dataPickerClsName} hasWidth={false} ref={ref} hasBox={false}>
    <Card.Row>
      {hasTitle && <div className="time-picker-info">
        {realTime.format(dateFormat)}
      </div>}
      <div className="tp-body">
        <TimeList maxValue={24} changeTime={changeTime} timeType={TimeType.hour} time={realTime}/>
        <TimeList maxValue={60} changeTime={changeTime} timeType={TimeType.minute} time={realTime}/>
        <TimeList maxValue={60} changeTime={changeTime} timeType={TimeType.second} time={realTime}/>
        <div className="tp-mask"/>
        <div className="tp-indicator"/>
      </div>
    </Card.Row>
    {
      hasFooter && <>
        <Divider/>
        <Card.Footer extraClassName="date-picker-footer">
          <div className="left">
            <Button type="primary" size="small" inverted onClick={selectNow}>
              {locale.now}
            </Button>
          </div>
          <div className="right">
            <Button type="primary" size="small" inverted onClick={close}>
              {locale.ok}
            </Button>
          </div>
        </Card.Footer>
      </>
    }
  </Card>;
});

export default TimePickerBody;