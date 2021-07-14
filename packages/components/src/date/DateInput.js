import React, {useCallback, useContext, useMemo, useState,} from 'react';
import {IconError, Input} from '../index';
import {isBlank, isNil, preventEvent} from '../Utils';
import {DateContext} from '../common/Context';
import {convertDate} from "./DateUtils";

const DateInput = React.forwardRef((props, ref) => {
  const {
    onClick,
    ...rest
  } = props;
  const {date, dateFormat, placeholder, onChange, icon, disabled} = useContext(DateContext);
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
    if (!disabled && !isBlank(inputValue)) {
      setShowClear(true);
    }
  }, [disabled, inputValue]);

  const handleMouseLeave = useCallback(() => {
    if (disabled) {
      return;
    }
    const inputDate = convertDate(inputValue, dateFormat);
    if (!inputDate || !inputDate.isValid()) {
      setTextDate('');
    }
    showClear && setShowClear(false);
  }, [dateFormat, disabled, inputValue, showClear]);

  const handleInputClick = useCallback((e) => !disabled && onClick && onClick(true, e),
    [disabled, onClick]);

  const clearInput = useCallback((e) => {
    if (!disabled && showClear) {
      setShowClear(false);
      setTextDate('');
      onChange && onChange(null, false, e);
      preventEvent(e);
    }
  }, [disabled, onChange, showClear]);

  const realIcon = useMemo(() => showClear ? <IconError/> : icon, [icon, showClear]);

  return <Input
    disabled={disabled}
    placeholder={placeholder}
    size="medium"
    rootRef={ref}
    value={inputValue}
    onChange={change}

    {...rest}
    rootProps={{
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onClick: handleInputClick
    }}
    onFocus={handleMouseEnter}
    iconProps={{
      onClick: clearInput
    }}
    icon={realIcon}/>;
});

export default DateInput;