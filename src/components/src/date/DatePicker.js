import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {DataConfig} from './DateConfig';
import Popup from '../popup/Popup';
import {PopupCtrlType} from '../common/Constants';
import DayBody from './DayBody';
import dayjs from 'dayjs';
import useInternalState from '../common/useInternalState';
import {initStore} from '../common/Store';
import {isNil, validate} from '../Utils';
import DateInput from './DateInput';
import {BodyType, PopupType} from './DateUtils';
import Modal from '../modal';
import {DateContext} from '../common/Context';
import YearBody from './YearBody';

var isoWeek = require('dayjs/plugin/isoWeek');
var customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(isoWeek);
dayjs.extend(customParseFormat);

const DatePicker = React.forwardRef((props, ref) => {
  const {
    className,
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
    popupType = PopupType.modal,

    ...otherProps
  } = props;
  const popupRef = useRef(null);
  const [activeModal, setActiveModal] = useState(false);
  const [realPopupType, setRealPopupType] = useState(popupType);
  const [bodyType, setBodyType] = useState(BodyType.year);

  const isModalType = realPopupType === PopupType.modal;

  validate(!isNil(defaultValue) && dayjs(defaultValue).isValid(),
      `the defaultValue '${defaultValue}' should be in valid date format ${dateFormat}`,
      isNil(defaultValue));

  validate(!isNil(value) && dayjs(value).isValid(),
      `the value '${value}' should be in valid date format ${dateFormat}`,
      isNil(value));

  const {
    state: date,
    // setState: setDate,
    customized,
  } = useInternalState({
    props,
    stateName: 'value',
    defaultState: !isNil(defaultValue) ? dayjs(defaultValue) : null,
    state: !isNil(value) ? dayjs(value) : null,
  });

  //init a internal store
  const [store] = useState(() => {
    return initStore({
      initialDate: date || dayjs(),
      activeDate: isNil(date) ? null : date,
      isInitialDate: function() {
        return isNil(this.activeDate);
      },
    });
  });

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
    const ctrl = <DateInput isPopupActive={isPopupActive}
                            activePopup={activePopup}/>;
    return ctrl;
  }, [activePopup, isPopupActive]);

  const popupBody = useMemo(() => {
    switch (bodyType) {
      case BodyType.day:
        return <DayBody  modal={isModalType}
                        activePopup={activePopup}/>;

      case BodyType.year:
        return <YearBody/>;
    }

  }, [activePopup, bodyType, isModalType]);

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
    customizedDate: customized,
    bodyType,
    setBodyType,
    leftTitle
  }}>
    {pickerBody}
  </DateContext.Provider>;

});

export default DatePicker;