import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {IconCalendar, Input} from '../index';
import {isNil} from '../Utils';
import * as dayjs from 'dayjs';
import {DateContext} from '../common/Context';

const DateInput = React.forwardRef((props, ref) => {
  const {
    isPopupActive,
    activePopup,
  } = props;
  const {store, dateFormat, placeholder} = useContext(DateContext);
  const {attach, detach, getState, setState} = store;
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
    if (!isPopupActive) {
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

  return <Input.IconInput size="medium" ref={ref}>
    <Input value={textDate} onChange={change} placeholder={placeholder}
           onClick={showPopup}
           onBlur={handleValue}/>
    <IconCalendar/>
  </Input.IconInput>;
});

export default DateInput;