import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {DataConfig} from './DateConfig';
import dayjs from 'dayjs';
import useInternalState from '../common/useInternalState';
import {isBlank, nonNil, validate} from '../Utils';
import {convertDate, getFormatter, PickerPanel, PopupType} from './DateUtils';
import {DateContext} from '../common/Context';
import useEventCallback from "../common/useEventCallback";
import YearsPanel from "./YearsPanel";
import YearRangesPanel from "./YearRangesPanel";
import MonthsPanel from "./MonthsPanel";
import DayPanel from "./DayPanel";
import {IconCalendar} from "../Icons";
import Wrapper from "./Wrapper";
import DateTimePanel from "./DateTimePanel";
import TimePickerBody from "./TimePickerBody";

var isoWeek = require('dayjs/plugin/isoWeek');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(isoWeek);
dayjs.extend(customParseFormat);

const DatePicker = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    hasTitle = true,
    defaultValue,
    value,
    placeholder,
    onChange,
    onClose,
    onOpen,
    config = DataConfig,
    columnCount = DataConfig.columnCount,
    popupType = PopupType.popup,
    type = PickerPanel.date,
    minYear = 1000,
    icon = <IconCalendar/>,
    ...rest
  } = props;
  const wrapperRef = useRef();
  const [panelType, setPanelType] = useState(null);
  const realPanelType = panelType || type;

  const dateFormat = useMemo(() => {
    return getFormatter(type);
  }, [type]);
  const defaultDate = convertDate(defaultValue, dateFormat);
  const realDate = convertDate(value, dateFormat);

  useEffect(() => {
    //value can be blank
    validate(nonNil(defaultDate), `the defaultValue '${defaultValue}' should be in valid date format.}`,
      isBlank(defaultValue));

    validate(nonNil(realDate), `the value '${value}' should be in valid date format}`, isBlank(value));

    nonNil(defaultDate) && !isBlank(defaultValue)
    && validate(defaultDate.year() >= minYear, `The year should be greater than ${minYear}`);

    nonNil(realDate) && !isBlank(value)
    && validate(realDate.year() >= minYear, `The year should be greater than ${minYear}`);
  }, [dateFormat, defaultDate, defaultValue, minYear, realDate, value]);

  const [date, setDate, customized] = useInternalState({
    props,
    stateName: 'value',
    defaultState: defaultDate,
    state: realDate
  });

  //use temp date if no date is specified
  const [tempDate, setTempDate] = useState({date: date || dayjs(), changed: false});

  const selectDay = useEventCallback((selectedDate, showPopup = false, e) => {
    setDate(selectedDate);

    //reset the following properties
    setTempDate({date: dayjs(), changed: false});
    setPanelType(null);

    const stringDate = selectedDate ? selectedDate.format(dateFormat) : '';
    if (!showPopup) {
      wrapperRef.current.togglePopup();
    }
    onChange && onChange(stringDate, selectedDate, e);
  });

  // handler for popup is closing
  const handlePopup = useCallback((active) => {
    //if popup is closing and the tempDate hasn't been reset
    if (!active && tempDate.changed) {
      setTempDate(pre => ({...pre, changed: false}));
    }

    !active && nonNil(panelType) && setPanelType(null);
  }, [panelType, tempDate.changed]);

  const tryClosePopup = useEventCallback(() => {
    const wrapper = wrapperRef.current;
    wrapper.togglePopup();
  });

  const popupBody = useMemo(() => {
    let panel;
    switch (realPanelType) {
      case PickerPanel.year:
        panel = <YearsPanel {...rest}/>;
        break;

      case PickerPanel.yearRange:
        panel = <YearRangesPanel  {...rest}/>;
        break;

      case PickerPanel.month:
        panel = <MonthsPanel  {...rest}/>;
        break;

      default:
        panel = <DayPanel/>;
    }
    if (type === PickerPanel.dateTime) {
      panel = React.cloneElement(panel, {hasFooter: false, autoClose: false});
      return <DateTimePanel datePanel={panel}/>
    }
    return panel;
  }, [realPanelType, rest, type]);

  return <DateContext.Provider value={{
    icon,
    date,
    tempDate,
    setTempDate,
    dateFormat,
    placeholder: placeholder || dateFormat,
    onChange: selectDay,
    panelType: realPanelType,
    tryClosePopup,
    setPanelType,
    columnCount,
    hasTitle: hasTitle && type !== PickerPanel.dateTime,
    config,
    customizedDate: customized,
    type,
  }}>
    <Wrapper
      ref={wrapperRef}
      body={popupBody}
      popupType={popupType}
      onPopupChange={handlePopup}/>
  </DateContext.Provider>;

});

export default DatePicker;