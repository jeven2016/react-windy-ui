import React, {useCallback} from 'react';
import {isNil, validate} from '../Utils';
import Button from '../button';
import {DateActionType} from './Reducer';
import {preventEvent} from '../event';
import dayjs from 'dayjs';

var isoWeek = require('dayjs/plugin/isoWeek');
dayjs.extend(isoWeek);

export const DataConfig = {
  columnCount: 7 * 6,
  dateFormat: 'YYYY-MM-DD',
  locale: {
    days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    dayOfWeek: {
      '0': 'Sun',
      '1': 'Mon',
      '2': 'Tue',
      '3': 'Wed',
      '4': 'Thur',
      '5': 'Fri',
      '6': 'Sat',
    },
    month: {
      '0': 'Jan',
      '1': 'Feb',
      '2': 'Mar',
      '3': 'Apr',
      '4': 'May',
      '5': 'Jun',
      '6': 'Jul',
      '7': 'Aug',
      '8': 'Sep',
      '9': 'Oct',
      '10': 'Nov',
      '11': 'Dec',
    },
    monthDetails: {
      '0': 'January',
      '1': 'Febuary',
      '2': 'March',
      '3': 'April',
      '4': 'May',
      '5': 'June',
      '6': 'July',
      '7': 'Auguest',
      '8': 'September',
      '9': 'October',
      '10': 'November',
      '11': 'December',
    },
  },
};

export const validateProps = (props, defaultDate) => {
  if (!isNil(defaultDate)) {
    validate(defaultDate.isValid(),
        `the defaultValue(${props.defaultValue}) is invalid.`);
  }

};

const isActiveDay = (activeDate, displayDate, selectedDate) => {
  if (isNil(activeDate)) {
    return false;
  }

  //check whether the year and month are same
  if (isNil(displayDate) || !activeDate.isSame(displayDate, 'month') ||
      !activeDate.isSame(displayDate, 'year')) {
    return false;
  }
  return activeDate.date() === selectedDate;
};

const selectDay = (
    store, displayDate, day, autoClose, closePopupCallback, e) => {
  const selectedDate = displayDate.date(day);
  console.log(selectedDate);
  store.setState({activeDate: selectedDate});

  if (autoClose) {
    closePopupCallback();
  } else {
    // preventEvent(e);
  }
};

const getKey = (date, suffix) => {
  return `${date.year()}-${date.month()}-${suffix}`;
};

export const createDateColumns = (displayDate,
                                  columnCount, store, autoClose,
                                  closePopupCallback) => {

  //for current month
  const momentDate = store.getState().activeDate;
  let numberOfDays = displayDate.daysInMonth();

  //get the first day of the week within this month
  let firstDay = displayDate.date(1).isoWeekday();

  //-------for last month
  const lastMonthDate = displayDate.add(-1, 'months');
  let daysOfLastMonth = lastMonthDate.daysInMonth();

  //the data picker has 7row and 6 columns for each row
  let columns = [];
  let td, key;

  for (let i = firstDay - 2; i >= 0; i--) {
    key = `prev-${getKey(displayDate, i)}`;
    td = (<td key={key}>
      <Button size="small" inverted circle color="blue"
              onClick={selectDay.bind(null, store, lastMonthDate,
                  daysOfLastMonth - i,
                  autoClose, closePopupCallback)}>
        {/*onClick={selectPre.bind(this, daysOfLastMonth - i)}>*/}
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
    active = isActiveDay(momentDate, displayDate, dateToProcess);

    td = (<td key={key}>
      <Button
          key={`day-${dateToProcess}`}
          extraClassName="day"
          active={active}
          color="blue"
          size="small"
          inverted
          circle
          onClick={selectDay.bind(null, store, displayDate, dateToProcess,
              autoClose, closePopupCallback)}>
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
      <Button key={i + 1} inverted circle size="small" color="blue"
              onClick={selectDay.bind(null, store, displayDate.add(1, 'months'),
                  i + 1,
                  autoClose, closePopupCallback)}>
        {i + 1}
      </Button>
    </td>;
    columns.push(td);
  }

  return columns;
};
