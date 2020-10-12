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
  const {store, getDateFormat, placeholder, tryShowPopup} = useContext(
      DateContext);
  const {attach, detach, getState, setState} = store;
  const [showClear, setShowClear] = useState(false);
  const activeDate = getState().activeDate;

  //used to display the initial input value
  const stringDate = useMemo(() => {
    if (!isNil(activeDate)) {
      return activeDate.format(getDateFormat());
    }
    return '';
  }, [activeDate, getDateFormat]);

  const [textDate, setTextDate] = useState(stringDate);

  useEffect(() => {
    const listener = ({activeDate}) => {
      if (!isNil(activeDate)) {
        setTextDate(activeDate.format(getDateFormat()));
      }
    };
    attach(listener);
    return () => detach(listener);
  }, [attach, detach, getDateFormat]);

  const change = useCallback((e) => {
    const value = e.target.value;
    const date = dayjs(value, getDateFormat());
    if (date.isValid()) {
      setState({activeDate: date});
    }
    setTextDate(value);
    tryShowPopup();
    // eslint-disable-next-line no-undef
  }, [getDateFormat, setState, tryShowPopup]);

  const handleValue = useCallback((e) => {
    const date = dayjs(textDate, getDateFormat());
    if (!date.isValid()) {
      setTextDate('');
    }
  }, [textDate, getDateFormat]);

  const mouseEnter = useCallback(() => {
    if (!isBlank(textDate)) {
      !showClear && setShowClear(true);
    }
  }, [textDate, showClear, setShowClear]);

  const mouseLeave = useCallback(() => {
    showClear && setShowClear(false);
  }, [showClear, setShowClear]);

  return <Input.IconInput placeholder={placeholder} size="medium" ref={ref}
                          inputProps={{
                            value: textDate, onChange: change,
                            onClick: tryShowPopup,
                            onMouseEnter: mouseEnter,
                            onMouseLeave: mouseLeave,
                            onBlur: handleValue,
                          }}
                          icon={showClear ? <IconClear/> : <IconCalendar/>}/>;
});

export default DateInput;