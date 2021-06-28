import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {DataConfig} from './DateConfig';
import Popup from '../popup/Popup';
import {PopupCtrlType} from '../common/Constants';
import dayjs from 'dayjs';
import useInternalState from '../common/useInternalState';
import {isBlank, nonNil, validate} from '../Utils';
import DateInput from './DateInput';
import {convertDate, getFormatter, PickerPanel, PopupType} from './DateUtils';
import Modal from '../modal';
import {DateContext} from '../common/Context';
import useEventCallback from "../common/useEventCallback";
import YearsPanel from "./YearsPanel";
import YearRangesPanel from "./YearRangesPanel";
import MonthsPanel from "./MonthsPanel";
import DayPanel from "./DayPanel";

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
    leftTitle = false,
    autoClose = true,
    placeholder,
    position = 'bottomLeft',
    onChange,
    onClose,
    onOpen,
    zIndex = 2000,
    config = DataConfig,
    columnCount = DataConfig.columnCount,
    popupType = PopupType.popup,
    type = PickerPanel.date,
    clearable = true,
    minYear = 1000,

    ...otherProps
  } = props;
  const popupRef = useRef(null);
  const [activeModal, setActiveModal] = useState(false);
  const [panelType, setPanelType] = useState(null);
  const isModalType = popupType === PopupType.modal;
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

  const activePopup = useCallback(
    (active) => {
      if (isModalType) {
        setActiveModal(active);
      } else {
        popupRef.current.changeActive(active);
      }

    }, [isModalType]);

  const isPopupActive = useCallback(
    () => {
      return isModalType ? activeModal : popupRef.current.isActive;
    }, [activeModal, isModalType]);

  const tryClosePopup = useCallback(() => {
    isPopupActive() && activePopup(false);
  }, [activePopup, isPopupActive]);

  const tryShowPopup = useCallback(() => {
    !isPopupActive() && activePopup(true);
  }, [activePopup, isPopupActive]);

  const selectDay = useEventCallback((selectedDate, showPopup = false, e) => {
    setDate(selectedDate);

    //reset the following properties
    setTempDate({date: dayjs(), changed: false});
    setPanelType(null);

    const stringDate = selectedDate ? selectedDate.format(dateFormat) : '';
    if (autoClose && !showPopup) {
      activePopup(false);
    }
    onChange && onChange(stringDate, selectedDate, e);
  });

  // handler for popup is closing
  const handleClose = useCallback((active) => {
    //if popup is closing and the tempDate hasn't been reset
    if (!active && tempDate.changed) {
      setTempDate(pre => ({...pre, changed: false}));
    }

    !active && nonNil(panelType) && setPanelType(null);
  }, [panelType, tempDate.changed]);

  const popupCtrl = useMemo(() => {
    return <DateInput/>;
  }, []);

  const popupBody = useMemo(() => {
    switch (realPanelType) {
      case PickerPanel.year:
        return <YearsPanel/>;

      case PickerPanel.yearRange:
        return <YearRangesPanel/>;

      case PickerPanel.month:
        return <MonthsPanel/>;

      default :
        return <DayPanel/>;
    }
  }, [realPanelType]);

  let pickerBody;
  if (popupType === PopupType.popup) {
    pickerBody = <Popup
      ref={popupRef}
      onChange={handleClose}
      {...otherProps}
      activeBy={PopupCtrlType.click}
      position={position}
      autoClose={false}
      ctrlNode={popupCtrl}
      body={popupBody}
      hasBorder={false}
      activePopup={activePopup}
      hasBox={true}
      zIndex={zIndex}/>;
  } else {
    pickerBody = <>
      {popupCtrl}
      <Modal type="simple" center active={activeModal} hasDefaultWidth={false}
             onCancel={() => {
               handleClose(false);
               activePopup(false);
             }}>
        <Modal.Body>
          {popupBody}
        </Modal.Body>
      </Modal>
    </>;
  }


  return <DateContext.Provider value={{
    date,
    // setDate: updateDate,
    tempDate,
    setTempDate, //should be removed later
    dateFormat,
    onChange: selectDay,
    panelType: realPanelType,
    setPanelType,

    autoClose,
    columnCount,
    hasTitle,
    config,
    placeholder: placeholder || dateFormat,
    activePopup,
    customizedDate: customized,
    leftTitle,
    isPopupActive,
    tryClosePopup,
    tryShowPopup,
    clearable,
    type,
  }}>
    {pickerBody}
  </DateContext.Provider>;

});

export default DatePicker;