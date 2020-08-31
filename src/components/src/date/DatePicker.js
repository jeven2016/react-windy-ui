import React, {useMemo, useState} from 'react';
import {DataConfig, validate} from './DateConfig';
import Popup from '../popup/Popup';
import {PopupCtrlType} from '../common/Constants';
import {IconCalendar, Input,} from '../index';
import DateBody from "./DateBody";
import {DpDirection} from "./DateUtils";
import dayjs from "dayjs";
import {initStore} from "../common/Store";

const DatePicker = React.forwardRef((props, ref) => {
  const {
    className,
    extraClassName,

    direction = DpDirection.vertical,

    hasTitle = true,
    defaultValue,
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

  //init a internal store
  const [store] = useState(initStore({
    type: null,
    data: null
  }));

  const popupCtrl = useMemo(() => {
    const ctrl = <Input.IconInput size="medium">
      <Input placeholder={placeholder}/>
      <IconCalendar/>
    </Input.IconInput>;
    return ctrl;
  }, [placeholder]);

  const popupBody = useMemo(() => {
    return <DateBody momentDate={dayjs()} config={config} leftTitle={leftTitle}
                     hasTitle={hasTitle} columnCount={columnCount}
                     autoClose={autoClose}
                     store={store}
                     direction={direction}/>
  }, []);

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
      zIndex={zIndex}/>
      ;
});

export default DatePicker;