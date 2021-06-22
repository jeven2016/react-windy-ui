import React from 'react';
import {isNil} from '../Utils';
import Button from '../button';
import dayjs from 'dayjs';

export const DataConfig = {
  columnCount: 7 * 5,
  format: {
    year: 'YYYY',
    month: 'YYYY-MM',
    date: 'YYYY-MM-DD',
  },
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

const selectDay = (displayDate, day, onChange) => {
  const selectedDate = displayDate.date(day);
  onChange && onChange(selectedDate);
};

const getKey = (date, suffix) => {
  return `${date.year()}-${date.month()}-${suffix}`;
};

export const createDateColumns = ({
                                    date,
                                    columnCount,
                                    tempDate,
                                    onChange
                                  }) => {
  const displayDate = tempDate.clone();
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
      <Button size="small" inverted circle={true} color="blue"
              onClick={selectDay.bind(null, lastMonthDate, daysOfLastMonth - i, onChange)}>
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
    active = isActiveDay(tempDate, displayDate, dateToProcess);
    const isOutlineStyle = active && isNil(date);//todo:need update
    td = (<td key={key}>
      <Button
        key={`day-${dateToProcess}`}
        extraClassName="day"
        active={active}
        color="blue"
        size="small"
        inverted={!active || !isOutlineStyle}
        outline={isOutlineStyle}
        initOutlineColor={isOutlineStyle}
        hasOutlineBackground={!isOutlineStyle}
        circle={true}
        onClick={selectDay.bind(null, displayDate, dateToProcess, onChange)}>
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
      <Button key={i + 1} inverted circle={true} size="small" color="blue"
              onClick={selectDay.bind(null, displayDate.add(1, 'months'), i + 1, onChange)}>
        {i + 1}
      </Button>
    </td>;
    columns.push(td);
  }

  return columns;
};
