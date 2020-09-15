import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {DataConfig} from './DateConfig';
import Popup from '../popup/Popup';
import {PopupCtrlType} from '../common/Constants';
import dayjs from 'dayjs';
import useInternalState from '../common/useInternalState';
import {initStore} from '../common/Store';
import {isNil, validate} from '../Utils';
import DateInput from './DateInput';
import {PickerPanel, PopupType} from './DateUtils';
import Modal from '../modal';
import {DateContext} from '../common/Context';
import YearBody from './YearBody';

var isoWeek = require('dayjs/plugin/isoWeek');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(isoWeek);
dayjs.extend(customParseFormat);

const initData = (temporaryDate, predefinedDate) => {
  return {
    //the initial date to display, it could be the activeDate or
    //a temporary date changed from GUI
    initialDate: {
      year: temporaryDate.year(),
      month: temporaryDate.month(),
      date: temporaryDate.date(),
    },

    //explicitly set by value or defaultValue parameter
    activeDate: predefinedDate,

    isInitialDate: function() {
      return isNil(this.activeDate);
    },

    //get current valid date
    getValidDate: function() {
      return dayjs().
          year(this.initialDate.year).
          month(this.initialDate.month).
          date(this.initialDate.date);
    },

    getValidStringDate: function() {
      const validDate = this.getValidDate();
      return {
        year: validDate.year(),
        month: validDate.month(),
        date: validDate.date(),
      };
    },
  };
};

const DatePicker = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    hasTitle = true,
    defaultValue,
    value,
    leftTitle = false,
    autoClose = true,
    dateFormat = 'YYYY-MM-DD',
    placeholder = 'Year-Month-Day',
    position = 'bottomLeft',
    onChange,
    onClose,
    onOpen,
    zIndex = 2000,
    config = DataConfig,
    columnCount = DataConfig.columnCount,
    popupType = PopupType.popup,
    type = PickerPanel.date,

    ...otherProps
  } = props;
  const popupRef = useRef(null);
  const [activeModal, setActiveModal] = useState(false);
  const [realPopupType, setRealPopupType] = useState(popupType);

  const isModalType = realPopupType === PopupType.modal;

  validate(!isNil(defaultValue) && dayjs(defaultValue).isValid(),
      `the defaultValue '${defaultValue}' should be in valid date format ${dateFormat}`,
      isNil(defaultValue));

  validate(!isNil(value) && dayjs(value).isValid(),
      `the value '${value}' should be in valid date format ${dateFormat}`,
      isNil(value));

  const {
    state: date,
    customized,
  } = useInternalState({
    props,
    stateName: 'value',
    defaultState: !isNil(defaultValue) ? dayjs(defaultValue) : null,
    state: !isNil(value) ? dayjs(value) : null,
  });

  const temporaryDate = date || dayjs();

  //init a internal store
  const [store] = useState(() =>
      initStore(initData(temporaryDate, date)),
  );

  //apply the value of customized properties for store
  useEffect(() => {
    if (customized) {
      store.setState({activeDate: date});
    }
  }, [customized, date, store]);

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

  const popupCtrl = useMemo(() => {
    return <DateInput isPopupActive={isPopupActive}
                      activePopup={activePopup}/>;
  }, [activePopup, isPopupActive]);

  const popupBody = useMemo(() => {
    return <YearBody type={type}/>;
  }, [type]);

  let pickerBody = null;
  if (realPopupType === PopupType.popup) {
    pickerBody = <Popup
        ref={popupRef}
        {...otherProps}
        // offset={offset}
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
      <Modal type="simple" active={activeModal} hasDefaultWidth={false}
             onCancel={() => activePopup(false)}>
        <Modal.Body>
          {popupBody}
        </Modal.Body>
      </Modal>
    </>;
  }

  return <DateContext.Provider value={{
    dateFormat,
    onChange,
    autoClose,
    columnCount,
    hasTitle,
    store,
    config,
    placeholder,
    activePopup,
    customizedDate: customized,
    leftTitle,
  }}>
    {pickerBody}
  </DateContext.Provider>;

});

export default DatePicker;