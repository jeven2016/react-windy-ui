import React, {useEffect, useMemo, useRef} from "react";
import TimePickerBody from "./TimePickerBody";
import Wrapper from "./Wrapper";
import useEventCallback from "../common/useEventCallback";
import {DateContext} from '../common/Context';
import useInternalState from "../common/useInternalState";
import {convertDate, getLocaleResources, PopupType} from "./DateUtils";
import {IconTime} from "../Icons";
import dayjs from "dayjs";
import {isBlank, nonNil, validate} from "../Utils";
import {DataConfig} from "./DateConfig";


const TimePicker = React.forwardRef((props, ref) => {
  const {
    time,
    defaultTime,
    dateFormat = "HH:mm:ss",
    placeholder,
    onChange,
    popupType = PopupType.popup,
    locale = 'zh_CN',
    config = DataConfig,
    inline = false,
    ...rest
  } = props;
  const wrapperRef = useRef();
  const defaultDate = useMemo(() => convertDate(defaultTime, [dateFormat, 'H:M:S']), [dateFormat, defaultTime]);
  const realDate = useMemo(() => convertDate(time, dateFormat), [dateFormat, time]);

  useEffect(() => {
    validate(nonNil(defaultDate), `the defaultValue '${defaultTime}' should be in valid date format.${dateFormat}`,
      isBlank(defaultTime));

    validate(nonNil(realDate), `the value '${time}' should be in valid date format ${dateFormat}}`, isBlank(time));
  }, [dateFormat, defaultDate, defaultTime, realDate, time]);

  const [timeValue, setTimeValue] = useInternalState({
    props,
    stateName: 'time',
    defaultState: defaultDate,
    state: realDate,
  });

  const realLocale = useMemo(() => getLocaleResources(locale, config), [config, locale]);

  const initialDate = useMemo(() => dayjs(), []);

  const selectTime = useEventCallback((selectedTime, showPopup, e) => {
    if (!timeValue?.isSame(selectedTime)) {
      setTimeValue(selectedTime);
      onChange && onChange(selectedTime?.format(dateFormat) || null, selectedTime, e);
    }

    if (!showPopup) {
      wrapperRef.current.togglePopup();
    }
  });

  const changeInput = useEventCallback((value, e) => {
    selectTime(value, e);
  });

  const popupBody = <TimePickerBody time={timeValue}
                                    setTime={setTimeValue}
                                    initialDate={initialDate}
                                    onSelectTime={selectTime}
                                    wrapperRef={wrapperRef}
                                    dateFormat={dateFormat}
                                    locale={realLocale}
                                    inline={inline}/>;

  return <DateContext.Provider value={{
    icon: <IconTime/>,
    date: timeValue,
    dateFormat,
    placeholder,
    onChange: changeInput,
  }}>
    {
      inline ? popupBody :
        <Wrapper
          ctrlRef={ref}
          ref={wrapperRef}
          popupType={popupType}
          body={popupBody}
          {...rest}/>
    }
  </DateContext.Provider>;
});

export default TimePicker;