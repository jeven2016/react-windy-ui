import React, {useMemo, useState} from 'react';
import {DataConfig, validate} from './DateConfig';
import Popup from '../popup/Popup';
import {PopupCtrlType} from '../common/Constants';
import {IconCalendar, Input} from '../index';
import DayBody from './DayBody';
import dayjs from 'dayjs';
import useInternalState from '../common/useInternalState';
import {initStore} from '../common/Store';
import {convertToArray} from '../Utils';

const PanelType = {
  year: 'year',
  month: 'month',
  day: 'day',
};

const DatePicker = React.forwardRef((props, ref) => {
  const {
    className,
    extraClassName,
    hasTitle = true,
    defaultValue,
    value,
    leftTitle = false,
    autoClose = false,
    dateFormat = 'YYYY-MM-DD',
    placeholder = 'Year-Month-Day',
    position = 'bottomLeft',
    onChange,
    onClose,
    onOpen,
    zIndex = 2000,
    config = DataConfig,
    columnCount = DataConfig.columnCount,
    ...otherProps
  } = props;

  const {
    state: date,
    setState: setDate,
    customized,
  } = useInternalState({
    props,
    stateName: 'value',
    defaultState: defaultValue,
    state: value,
    backupState: dayjs(),
  });

  const initialDate = useMemo(() => {
    return date;
  }, [date]);

  //init a internal store
  const [store] = useState(initStore({
    activeDate: initialDate,
    panelType: PanelType.day,
  }));

  const popupCtrl = useMemo(() => {
    const ctrl = <Input.IconInput size="medium">
      <Input placeholder={placeholder}/>
      <IconCalendar/>
    </Input.IconInput>;
    return ctrl;
  }, [placeholder]);

  const popupBody = useMemo(() => {
    return <DayBody store={store} leftTitle={leftTitle} config={config}
                    columnCount={columnCount} autoClose={autoClose}
                    hasTitle={hasTitle}/>;
  }, [autoClose, columnCount, config, hasTitle, leftTitle, store]);

  return <Popup
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
});

export default DatePicker;