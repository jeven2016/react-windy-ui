import React, {useCallback, useContext, useMemo, useRef} from "react";
import TimePickerBody from "./TimePickerBody";
import {DateContext} from "../common/Context";
import {DateActionType, getDisplayDate, useCloseButton} from "./DateUtils";
import dayjs from "dayjs";
import Divider from "../divider";
import Card from "../card";
import {Button} from "../index";

const DateTimePanel = React.forwardRef((props, ref) => {
  const {
    datePanel,
    ...rest
  } = props;

  const {
    date,
    tempDate,
    onChange,
    config,
    tryClosePopup
  } = useContext(DateContext);

  const wrapperRef = useRef();
  const initialDate = useMemo(() => dayjs(), []);
  const currDate = useMemo(() => getDisplayDate(date, tempDate), [date, tempDate]);

  const selectTime = useCallback((nextTime, showPopup, e) => {
    const next = currDate.hour(nextTime.hour()).minute(nextTime.minute()).second(nextTime.second());
    onChange(next, showPopup, e);
  }, [currDate, onChange]);

  const timePanel = <TimePickerBody
    time={currDate}
    onSelectTime={selectTime}
    initialDate={initialDate}
    hasFooter={false}
    hasTitle={true}
    wrapperRef={wrapperRef}
  />;
  const closeBtn = useCloseButton(false, tryClosePopup, config);

  return <div className="datetime-picker card" ref={ref} style={{width: '35rem'}} {...rest}>
    <div className="picker-panels">
      <div className="data-panel">
        {datePanel}
      </div>
      <div className="time-panel">
        {timePanel}
      </div>
    </div>

    <Divider/>
    <Card.Footer extraClassName="date-picker-footer">

      <div className="left">
        <Button extraClassName="today-btn" type="primary"
                size="small" inverted
                onClick={(e) => onChange(dayjs(), false, e)}>
          {config.locale.today}
        </Button>
      </div>
      <div className="right">
        {closeBtn}
      </div>

    </Card.Footer>
  </div>


});

export default DateTimePanel;