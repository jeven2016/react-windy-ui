import React, {useMemo} from 'react';
import {Button} from '../index';
import {DataConfig} from './DateConfig';
import {isNil, isNumber, nonNil} from "../Utils";
import dayjs from "dayjs";

export const DateActionType = {
  nextYear: 'nextYear',
  nextMonth: 'nextMonth',
  preYear: 'preYear',
  preMonth: 'preMonth',
  selectDay: 'selectDay',
  today: 'today',
  close: 'close',
  open: 'open',

};

export const PopupType = {
  popup: 'popup',
  modal: 'modal',
};

export const PickerPanel = {
  year: 'year',
  yearRange: 'yearRange',
  month: 'month',
  date: 'date',
  dateTime: 'dateTime'
};

export const usePanelHead = (content, onClick, isNode = false) => {
  return isNode ? content : <Button extraClassName="range-btn" inverted type="primary"
                                    onClick={onClick}>
    {content}️
  </Button>;
  /*return <Spring
    reset
    from={{opacity: 0, transform: 'translate3d(4rem, 0, 0)'}}
    to={{opacity: 1, transform: 'translate3d(0rem, 0, 0)'}}>
    {props => React.cloneElement(cnt, {style: props})}
  </Spring>;*/
};

export const usePanel = (content, isNode = false) => {
  return isNode ? content : <div className="year-cols">{content}</div>;
  /*return <Spring
    reset
    from={{opacity: 0, transform: 'scale(0.9)'}}
    to={{opacity: 1, transform: 'scale(1)'}}>
    {props => React.cloneElement(cnt, {style: props})}
  </Spring>;*/
};

export const getDisplayDate = (date, tempDate) => {
  const realTempDate = tempDate.date;
  if (tempDate.changed) {
    return realTempDate;
  }
  return date || realTempDate;
}


const isActiveDay = (activeDate, displayDate, selectedDate) => {
  if (isNil(activeDate) || isNil(displayDate)) {
    return false;
  }

  //check whether the year and month are same
  if (!activeDate.isSame(displayDate, 'month') ||
    !activeDate.isSame(displayDate, 'year')) {
    return false;
  }
  return activeDate.date() === selectedDate;
};

const selectDay = (displayDate, day, onChange, showPopup, e) => {
  const selectedDate = displayDate.date(day);
  onChange(selectedDate, showPopup, e);
};

const getKey = (date, suffix) => {
  return `${date.year()}-${date.month()}-${suffix}`;
};

export const createDateColumns = ({
                                    date,
                                    columnCount,
                                    tempDate,
                                    onChange,
                                    showPopup
                                  }) => {
  const currDate = getDisplayDate(date, tempDate);
  const displayDate = currDate.clone();
  let numberOfDays = displayDate.daysInMonth();

  //get the first day of the week within this month
  let firstDay = displayDate.date(1).isoWeekday();

  //-------for last month
  const lastMonthDate = displayDate.add(-1, 'months');
  let daysOfLastMonth = lastMonthDate.daysInMonth();

  //the data picker has 7row and 6 columns per row
  let columns = [];
  let td, key;

  for (let i = firstDay - 2; i >= 0; i--) {
    key = `prev-${getKey(displayDate, i)}`;
    td = (<td key={key}>
      <Button hasBox={false} hasRipple={false} size="small" inverted circle={true} color="gray"
              onClick={selectDay.bind(null, lastMonthDate, daysOfLastMonth - i, onChange, showPopup)}>
        {daysOfLastMonth - i}
      </Button>
    </td>);
    columns.push(td);
  }

  //--------- append the days of this month
  let active;
  let dateToProcess;
  for (let i = firstDay; i < numberOfDays + firstDay; i++) {
    dateToProcess = i - firstDay + 1;
    key = `current-${getKey(displayDate, dateToProcess)}`;
    active = !tempDate.changed && isActiveDay(currDate, displayDate, dateToProcess);
    td = (<td key={key}>
      <Button
        hasRipple={false}
        hasBox={false}
        key={`day-${dateToProcess}`}
        extraClassName="day"
        active={active}
        color={active && nonNil(date) ? 'primary' : 'gray'}
        size="small"
        inverted={true}
        circle={true}
        onClick={selectDay.bind(null, displayDate, dateToProcess, onChange, showPopup)}>
        {dateToProcess}
      </Button>
    </td>);
    columns.push(td);
  }

  //------- append the days of next month
  let leftLen = columnCount - columns.length;

  for (let i = 0; i < leftLen; i++) {
    key = `next-${getKey(displayDate, i)}`;
    td = <td key={'next-' + key}>
      <Button key={i + 1} hasBox={false} hasRipple={false} inverted circle={true} size="small" color="blue"
              onClick={selectDay.bind(null, displayDate.add(1, 'months'), i + 1, onChange, showPopup)}>
        {i + 1}
      </Button>
    </td>;
    columns.push(td);
  }

  return columns;
};


export const convertDate = (dateString, format, strict = true) => {
  const date = dayjs(dateString, format, strict);
  return date.isValid() ? date : null;
};

export const createYearRange = (startYear) => {
  const stringYear = startYear + '';
  const lastNumber = stringYear.charAt(startYear.length - 1);
  let begin;
  let leftYear = stringYear.substring(0, stringYear.length - 1);
  if (!isNumber(lastNumber)) {
    begin = 0;
  } else {
    begin = parseInt(leftYear + '0');
  }
  const end = begin + 9;
  return {begin, end};
};

export const useYearRange = (date, tempDate) => {
  const currentYear = useMemo(() => nonNil(date) ? date.get('year') : dayjs().year(), [date]);
  const startYear = tempDate.changed ? tempDate.date.year() : currentYear;
  const yearRange = useMemo(() => createYearRange(startYear), [startYear]);
  return [startYear, yearRange, currentYear];
};

export const useCloseButton = (autoClose, tryClosePopup, locale) => {
  return !autoClose && <Button type="primary" size="small" inverted onClick={tryClosePopup}>{locale.ok}</Button>;
}

export const preYear = (year, rangeNumber = 100) => (year - rangeNumber) <= 1000 ? 1000 : year - rangeNumber;
export const nextYear = (year, rangeNumber = 100) => year + rangeNumber > 3000 ? 3000 : year + rangeNumber;

export const createTimeItems = ({max, onClick}) => {
  return <>
    {
      [...Array(max).keys()].map(i => <div className="tp-item" key={i} onClick={onClick.bind(null, i)}>
          {i < 10 ? '0' : ''}{i}
        </div>
      )}
  </>;

};

export const getLocaleResources = (locale, config)=>{
  const key = 'locale_' + locale;
  const defaultLocaleCfg = DataConfig[key];
  const newLocalConfig = nonNil(config) ? config[key] : {};
  return {...defaultLocaleCfg, ...newLocalConfig};
}