import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {IconCalendar, IconClear, Input} from '../index';
import {isBlank, isNil} from '../Utils';
import * as dayjs from 'dayjs';
import {DateContext} from '../common/Context';

const DateInput = React.forwardRef((props, ref) => {
  const {store, dateFormat, placeholder, isPopupActive, activePopup} = useContext(
      DateContext);
  const {attach, detach, getState, setState} = store;
  const [showClear, setShowClear] = useState(false);
  const activeDate = getState().activeDate;

  //used to display the initial input value
  const stringDate = useMemo(() => {
    if (!isNil(activeDate)) {
      return activeDate.format(dateFormat);
    }
    return '';
  }, [activeDate, dateFormat]);

  const [textDate, setTextDate] = useState(stringDate);

  useEffect(() => {
    const listener = ({activeDate}) => {
      if (!isNil(activeDate)) {
        setTextDate(activeDate.format(dateFormat));
      }
    };
    attach(listener);
    return () => detach(listener);
  }, [attach, detach, dateFormat]);

  const change = useCallback((e) => {
    const value = e.target.value;
    const date = dayjs(value, dateFormat);
    if (date.isValid()) {
      setState({activeDate: date});
    }
    setTextDate(value);
    if (!isPopupActive()) {
      activePopup(true);
    }
  }, [activePopup, dateFormat, isPopupActive, setState]);

  const handleValue = useCallback((e) => {
    const date = dayjs(textDate, dateFormat);
    if (!date.isValid()) {
      setTextDate('');
    }
  }, [textDate, dateFormat]);

  const showPopup = useCallback(() => {
    !isPopupActive() && activePopup(true);
  }, [activePopup, isPopupActive]);

  const mouseEnter = useCallback(() => {
    if (!isBlank(textDate)) {
      !showClear && setShowClear(true);
    }
  }, [textDate, showClear, setShowClear]);

  const mouseLeave = useCallback(() => {
    showClear && setShowClear(false);
  }, [showClear, setShowClear]);

  return <Input.IconInput size="medium" ref={ref}>
    <Input value={textDate} onChange={change} placeholder={placeholder}
           onClick={showPopup}
           onMouseEnter={mouseEnter}
           onMouseLeave={mouseLeave}
           onBlur={handleValue}/>
    {showClear ? <IconClear/> : <IconCalendar/>}
  </Input.IconInput>;
});

export default DateInput;