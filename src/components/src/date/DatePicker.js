import React, {useMemo} from 'react';
import {DataConfig, validate} from './DateConfig';
import Popup from '../popup/Popup';
import {PopupCtrlType} from '../common/Constants';
import {IconCalendar, Input} from '../index';
import DayBody from './DayBody';
import dayjs from 'dayjs';

const DatePicker = React.forwardRef((props, ref) => {
  const {
    className,
    extraClassName,
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

  const popupCtrl = useMemo(() => {
    const ctrl = <Input.IconInput size="medium">
      <Input placeholder={placeholder}/>
      <IconCalendar/>
    </Input.IconInput>;
    return ctrl;
  }, [placeholder]);

  const popupBody = useMemo(() => {
    return <DayBody date={dayjs()} leftTitle={leftTitle} config={config}
                    columnCount={columnCount} autoClose={autoClose}
                    hasTitle={hasTitle}/>;
  }, [autoClose, columnCount, config, hasTitle, leftTitle]);

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