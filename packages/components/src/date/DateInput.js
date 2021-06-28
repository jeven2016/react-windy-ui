import React, {useCallback, useContext, useMemo, useState,} from 'react';
import {IconCalendar, IconError, Input} from '../index';
import {isBlank, isNil} from '../Utils';
import {DateContext} from '../common/Context';
import {convertDate} from "./DateUtils";

const DateInput = React.forwardRef((props, ref) => {
  const {date, dateFormat, placeholder, onChange, tryShowPopup} = useContext(DateContext);
  const [showClear, setShowClear] = useState(false);
  const [textDate, setTextDate] = useState('');

  //get the input value to display
  const inputValue = useMemo(() => {
    if (!isBlank(textDate) || isNil(date)) {
      return textDate;
    }
    return date.format(dateFormat);
  }, [date, dateFormat, textDate]);

  const change = useCallback((e) => {
    const value = e.target.value;
    const currentDate = convertDate(value, dateFormat, true);
    setTextDate(e.target.value);

    setShowClear(!isBlank(value));
    if (currentDate && currentDate.isValid()) {
      onChange(currentDate, true, e);
    }
  }, [dateFormat, onChange]);

  const handleMouseEnter = useCallback(() => {
    if (!isBlank(inputValue)) {
      setShowClear(true);
    }
  }, [inputValue]);

  const handleMouseLeave = useCallback(() => {
    const inputDate = convertDate(inputValue, dateFormat);
    if (!inputDate || !inputDate.isValid()) {
      setTextDate('');
    }
    showClear && setShowClear(false);
  }, [dateFormat, inputValue, showClear]);

  const clearInput = useCallback((e) => {
    if (showClear) {
      setShowClear(false);
      setTextDate('');
      onChange && onChange(null, false, e);
    }
  }, [onChange, showClear]);

  const icon = useMemo(() => showClear ? <IconError/> : <IconCalendar/>, [showClear]);

  return <Input
    placeholder={placeholder}
    size="medium"
    rootRef={ref}
    value={inputValue}
    onChange={change}
    onClick={tryShowPopup}
    rootProps={{
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave
    }}
    onFocus={handleMouseEnter}
    iconProps={{
      onClick: clearInput
    }}
    icon={icon}/>;
});

export default DateInput;