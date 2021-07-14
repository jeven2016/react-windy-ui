import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {DataConfig} from './DateConfig';
import dayjs from 'dayjs';
import useInternalState from '../common/useInternalState';
import {isBlank, nonNil, validate} from '../Utils';
import {convertDate, PickerPanel, PopupType} from './DateUtils';
import {DateContext} from '../common/Context';
import useEventCallback from "../common/useEventCallback";
import YearsPanel from "./YearsPanel";
import YearRangesPanel from "./YearRangesPanel";
import MonthsPanel from "./MonthsPanel";
import DayPanel from "./DayPanel";
import {IconCalendar} from "../Icons";
import Wrapper from "./Wrapper";
import DateTimePanel from "./DateTimePanel";

var isoWeek = require('dayjs/plugin/isoWeek');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(isoWeek);
dayjs.extend(customParseFormat);

const DatePicker = React.forwardRef((props, ref) => {
  const {
    hasTitle = true,
    defaultValue,
    value,
    placeholder,
    onChange,
    // onClose,
    // onOpen,
    config = DataConfig,
    popupType = PopupType.popup,
    type = PickerPanel.date,
    minYear = 1000,
    icon = <IconCalendar/>,
    format = {},
    disabled,
    hasFooter = true,
    ...rest
  } = props;
  const columnCount = DataConfig.columnCount;
  const wrapperRef = useRef();
  const [panelType, setPanelType] = useState(null);
  const realPanelType = panelType || type;

  const dateFormat = useMemo(() => {
    const mergedFormat = {...DataConfig.format, ...format};
    const fmt = mergedFormat[type];
    validate(nonNil(fmt), `No valid date formatter found for type "${type}" in config ${mergedFormat}`);
    return fmt;
  }, [format, type]);

  const defaultDate = convertDate(defaultValue, dateFormat);
  const realDate = convertDate(value, dateFormat);

  useEffect(() => {
    //value can be blank
    validate(nonNil(defaultDate), `)the defaultValue '${defaultValue}' should be in valid date format.}`,
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
        panel = <YearsPanel hasFooter={hasFooter} {...rest}/>;
        break;

      case PickerPanel.yearRange:
        panel = <YearRangesPanel hasFooter={hasFooter}  {...rest}/>;
        break;

      case PickerPanel.month:
        panel = <MonthsPanel hasFooter={hasFooter}  {...rest}/>;
        break;

      default:
        panel = <DayPanel hasFooter={hasFooter}/>;
    }
    if (type === PickerPanel.dateTime) {
      panel = React.cloneElement(panel, {hasFooter: false, autoClose: false});
      return <DateTimePanel datePanel={panel}/>
    }
    return panel;
  }, [hasFooter, realPanelType, rest, type]);

  return <DateContext.Provider value={{
    disabled,
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
      ctrlRef={ref}
      disabled={disabled}
      ref={wrapperRef}
      body={popupBody}
      popupType={popupType}
      onPopupChange={handlePopup}/>
  </DateContext.Provider>;

});

export default DatePicker;