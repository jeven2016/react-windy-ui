import React, {useCallback, useContext, useState,} from 'react';
import {IconCalendar, IconClear, Input} from '../index';
import {isBlank, nonNil} from '../Utils';
import * as dayjs from 'dayjs';
import {DateContext} from '../common/Context';

const DateInput = React.forwardRef((props, ref) => {
  const {date, setDate, dateFormat, placeholder, tryShowPopup} = useContext(
    DateContext);
  const [showClear, setShowClear] = useState(false);
  const [textDate, setTextDate] = useState(() => nonNil(date) ? date.format(dateFormat) : '');

  console.log(date)

  const change = useCallback((e) => {
   /* if (selectedDate.isValid()) {
      setDate(selectedDate);
    }*/
    // setTextDate(e.target.value);
    tryShowPopup();
    // eslint-disable-next-line no-undef
  }, [dateFormat, tryShowPopup]);

  const handleValue = useCallback((e) => {
    const date = dayjs(textDate, dateFormat);
    if (!date.isValid()) {
      setTextDate('');
    }
  }, [textDate, dateFormat]);

  const mouseEnter = useCallback(() => {
    if (!isBlank(textDate)) {
      !showClear && setShowClear(true);
    }
  }, [textDate, showClear, setShowClear]);

  const mouseLeave = useCallback(() => {
    showClear && setShowClear(false);
  }, [showClear, setShowClear]);

  return <Input placeholder={placeholder} size="medium" rootRef={ref}
                value={textDate}
                onChange={change}
                onClick={tryShowPopup}
                onMouseEnter={mouseEnter}
                onMouseLeave={mouseLeave}
                onBlur={handleValue}
                icon={showClear ? <IconClear/> : <IconCalendar/>}/>;
});

export default DateInput;