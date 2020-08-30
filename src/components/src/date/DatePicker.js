import React, {useMemo} from 'react';
import {createDateColumns, DataConfig, validate} from './DateConfig';
import Popup from '../popup/Popup';
import {PopupCtrlType} from '../common/Constants';
import {
  Button,
  IconArrowLeft,
  IconArrowRight,
  IconCalendar,
  Input,
} from '../index';
import clsx from 'clsx';
import {DateActionType} from './Reducer';
import moment from 'moment';
import {slice} from '../Utils';
import {IconLeftDoubleArrows, IconRightDoubleArrows} from '../Icons';

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

  const generateTtitle = (momentDate) => {
    if (!hasTitle) {
      return null;
    }
    let currentDayOfWeek = config.locale.dayOfWeek[momentDate.day()];
    let currentMonth = config.locale.month[momentDate.month()];

    let txtContent = leftTitle ? <div>
          <div>{currentDayOfWeek},</div>
          <div>{currentMonth} {momentDate.date()}</div>
        </div>
        : <span>{currentDayOfWeek}, {currentMonth} {momentDate.date()}
                  </span>;

    return (
        <div className="title">
          <a className="year-info" href="#">{momentDate.year()}</a>
          <div className="detail-info">
            {txtContent}
          </div>
        </div>
    );
  };

  const generateDays = (momentDate) => {
    let columns = createDateColumns(momentDate, columnCount, () => {}, null,
        momentDate, autoClose, () => {});

    return (
        <tbody>
        <tr>{slice(columns, 0, 7)}</tr>
        <tr>{slice(columns, 7, 14)}</tr>
        <tr>{slice(columns, 14, 21)}</tr>
        <tr>{slice(columns, 21, 28)}</tr>
        <tr>{slice(columns, 28, 35)}</tr>
        <tr>{slice(columns, 35, 42)}</tr>
        </tbody>
    );
  };

  const getCalendar = (momentDate) => {
    let month = momentDate.month();
    let year = momentDate.year();

    const dataPickerClsName = clsx('date-picker', {
      'left-title': leftTitle,
    });

    return <div className={dataPickerClsName}>
      {generateTtitle(momentDate)}
      <div className="body">
        <div className="info">
          <span className="previous">
             <Button size="small" inverted circle>
                 <IconLeftDoubleArrows/>
              </Button>
              <Button size="small" inverted circle>
               <IconArrowLeft/>
              </Button>
          </span>
          <span className="content">
          {config.locale.monthDetails[month]} {year}
        </span>
          <span className="next">
              <Button size="small" inverted circle>
                <IconArrowRight/>
              </Button>
              <Button size="small" inverted circle>
                <IconRightDoubleArrows/>
              </Button>
          </span>
        </div>
        <table className="date-picker-table">
          <thead>
          <tr>
            {config.locale.days.map(
                (day, index) => <th key={day + index}>{day}</th>)}
          </tr>
          </thead>
          {
            generateDays(momentDate)
          }
        </table>
        <div className="footer">
          <div className="left">
            Select Time
          </div>
          <div className="right">
            {!autoClose ?
                <Button type="primary" size="small" inverted circle>OK</Button>
                : null
            }
          </div>
        </div>
      </div>
    </div>;
  };

  const popupCtrl = useMemo(() => {
    const ctrl = <Input.IconInput size="medium">
      <Input placeholder={placeholder}/>
      <IconCalendar/>
    </Input.IconInput>;
    return ctrl;
  }, [placeholder]);

  const popupBody = useMemo(() => {

    return getCalendar(moment());
  }, [getCalendar]);

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