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
    format = DataConfig.format.time,
    placeholder,
    onChange,
    popupType = PopupType.popup,
    locale = 'zh_CN',
    config = DataConfig,
    inline = false,
    icon = <IconTime/>,
    ...rest
  } = props;
  const wrapperRef = useRef();
  const defaultDate = useMemo(() => convertDate(defaultTime, [format, 'H:M:S']), [format, defaultTime]);
  const realDate = useMemo(() => convertDate(time, format), [format, time]);

  useEffect(() => {
    validate(nonNil(defaultDate), `the defaultValue '${defaultTime}' should be in valid date format.${format}`,
      isBlank(defaultTime));

    validate(nonNil(realDate), `the value '${time}' should be in valid date format ${format}}`, isBlank(time));
  }, [format, defaultDate, defaultTime, realDate, time]);

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
      onChange && onChange(selectedTime?.format(format) || null, selectedTime, e);
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
                                    dateFormat={format}
                                    locale={realLocale}
                                    inline={inline}/>;

  return <DateContext.Provider value={{
    icon,
    date: timeValue,
    dateFormat: format,
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