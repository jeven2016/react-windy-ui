import React from 'react';
import moment from 'moment';
import {DateActionType} from './Reducer';
import {preventEvent} from '../event';
import Button from '../button';
import {isNil} from '../Utils';

const DateContent = {

  create: (momentDate, columnCount) => {

  },
};

export default  DateContent;

createDateColumns = (
    momentDate, columnCount, dispatch, state, initialDate, autoClose,
    closePopupCallback) => {
  //for current month
  const currentYear = momentDate.year();
  const currentMonth = momentDate.month();
  let numberOfDays = momentDate.daysInMonth();

  //get the first day of the week within this month
  let firstDay = moment({year: currentYear, month: currentMonth, day: 1})
      .isoWeekday();

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

    closePopupCallback();
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
