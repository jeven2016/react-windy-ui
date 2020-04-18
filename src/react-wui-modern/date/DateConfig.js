import React from 'react';
import {validate, isNil} from '../Utils';
import moment from 'moment';
import Button from '../button';
import {DateActionType} from './Reducer';
import {preventEvent} from '../event';
import Element from '../common/Element';

export const DataConfig = {
  columnCount: 7 * 6,
  dateFormat: 'YYYY-MM-DD',
  locale: {
    days: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
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

export const createDateColumns = (
    momentDate, columnCount, dispatch, state, initialDate, autoClose,
    closePopupCallback) => {
  console.log("autoClose="+autoClose)
  //for current month
  const currentYear = momentDate.year();
  const currentMonth = momentDate.month();
  let numberOfDays = momentDate.daysInMonth();

  //get the first day of the week within this month
  let firstDay = moment({year: currentYear, month: currentMonth, day: 1}).
      isoWeekday();

  //-------for last month
  const lastMonthDate = momentDate.clone().add(-1, 'months');
  let daysOfLastMonth = lastMonthDate.daysInMonth();

  //the data picker has 7row and 6 columns/row
  let columns = [];
  let td, key;

  //append the days of last month
  const selectPre = (d, e) => {
    dispatch({
      type: DateActionType.selectDay,
      data: {
        date: lastMonthDate.date(d),
      },
    });

    if (!autoClose) {
      //don't close the popup and stop propagation to window click listener,
      //because the listener cannot distinguish the event fired by a old button
      //and disappeared while the popup content is updated. (that means
      //the contains() method always return false)
      preventEvent(e);
    }
  };

  for (let i = firstDay - 2; i >= 0; i--) {
    key = `${currentMonth - 1}-${i}`;
    td = (<td key={key}>
      <Button
          extraClassName="text comment clear-border"
          circle
          onClick={selectPre.bind(this, daysOfLastMonth - i)}>
        {daysOfLastMonth - i}
      </Button>
    </td>);
    columns.push(td);
  }

  const selectItem = (dd) => {
    dispatch({
      type: DateActionType.selectDay,
      day: dd,
      data: {
        date: momentDate.date(dd),
      },
    });

    if (autoClose) {
      closePopupCallback();
    }
  };

  //--------- append the days of this month
  const isActiveDay = (loopDate, selectedDate) => {
    if (isNil(momentDate)) {
      return false;
    }

    //check whether the year and month are same
    if (!isNil(initialDate) && !momentDate.isSame(initialDate, 'month')) {
      return false;
    }
    return momentDate.date() === selectedDate;
  };

  let active;
  let dateToProcess;
  for (let i = firstDay; i < numberOfDays + firstDay; i++) {
    dateToProcess = i - firstDay + 1;
    key = `${momentDate.month()}-${dateToProcess}`;
    active = isActiveDay(momentDate, dateToProcess);

    td = (<td key={key}>
      <Button key={i - firstDay + 1}
              active={active}
              color="info"
              circle
              outline
              onClick={selectItem.bind(null,
                  dateToProcess)}>{dateToProcess}</Button>
    </td>);
    columns.push(td);
  }

  //------- append the days of next month
  let leftLen = columnCount - columns.length;
  const nextMonthDate = momentDate.clone().add(1, 'months');

  const selectNextMonth = (dd, e) => {
    dispatch({
      type: DateActionType.selectDay,
      day: dd,
      data: {
        date: nextMonthDate.date(dd),
      },
    });

    if (!autoClose) {
      preventEvent(e);
    }
  };

  for (let i = 0; i < leftLen; i++) {
    key = `${momentDate.month() + 1}-${i}`;
    td = (<td key={key}>
      <Button extraClassName={'text comment clear-border'} key={i + 1} circle
              onClick={selectNextMonth.bind(this, i + 1)}>{i + 1}</Button>
    </td>);
    columns.push(td);
  }

  return columns;
};
