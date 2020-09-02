import React, {useCallback, useEffect, useState} from 'react';
import clsx from 'clsx';
import Card from '../card';
import {Button, IconArrowLeft, IconArrowRight} from '../index';
import {IconLeftDoubleArrows, IconRightDoubleArrows} from '../Icons';
import {createDateColumns} from './DateConfig';
import {isNil, slice} from '../Utils';
import DateTitle from './DateTitle';
import {DateActionType} from './DateUtils';

export default function DayBody(props) {
  const {
    leftTitle,
    config,
    autoClose,
    columnCount,
    hasTitle,
    store,
  } = props;
  const {attach, detach, getState} = store;
  const [date, setDate] = useState(getState().activeDate);
  const month = date.month();
  const year = date.year();

  const dataPickerClsName = clsx('date-picker', {
    'left-title': leftTitle,
  });

  useEffect(() => {
    const listener = () => {
      setDate(getState().activeDate);
    };
    attach(listener);
    return () => detach(listener);
  }, [attach, detach, getState]);

  const generateDays = useCallback(() => {
    let columns = createDateColumns(date, columnCount, store,
        autoClose, () => {});

    return <tbody>
    <tr>{slice(columns, 0, 7)}</tr>
    <tr>{slice(columns, 7, 14)}</tr>
    <tr>{slice(columns, 14, 21)}</tr>
    <tr>{slice(columns, 21, 28)}</tr>
    <tr>{slice(columns, 28, 35)}</tr>
    <tr>{slice(columns, 35, 42)}</tr>
    </tbody>;
  }, [autoClose, columnCount, date, store]);

  const change = useCallback((type, e) => {
    const cloneDate = date.clone();
    let nextDate = cloneDate;
    switch (type) {
      case DateActionType.preMonth:
        nextDate = cloneDate.add(-1, 'months');
        break;
      case DateActionType.preYear:
        nextDate = cloneDate.add(-1, 'years');
        break;
      case DateActionType.nextMonth:
        nextDate = cloneDate.add(1, 'months');
        break;
      case DateActionType.nextYear:
        nextDate = cloneDate.add(1, 'years');
        break;
      default:
        break;
    }

    !isNil(nextDate) && setDate(nextDate);
  }, [date]);

  return <Card extraClassName={dataPickerClsName}>
    <Card.Header extraClassName="date-picker-header">
      <DateTitle hasTitle={hasTitle}
                 config={config}
                 date={getState().activeDate}
                 leftTitle={leftTitle}/>
    </Card.Header>

    <Card.Row>
      <div className="date-picker-info">
          <span className="previous">
             <Button size="small" inverted circle
                     onClick={(e) => change(DateActionType.preYear, e)}>
                 <IconLeftDoubleArrows/>
              </Button>
              <Button size="small" inverted circle
                      onClick={(e) => change(DateActionType.preMonth, e)}>
               <IconArrowLeft/>
              </Button>
          </span>
        <span className="content">
          {config.locale.monthDetails[month]} {year}
        </span>
        <span className="next">
              <Button size="small" inverted circle
                      onClick={(e) => change(DateActionType.nextMonth, e)}>
                <IconArrowRight/>
              </Button>
              <Button size="small" inverted circle
                      onClick={(e) => change(DateActionType.nextYear, e)}>
                <IconRightDoubleArrows/>
              </Button>
          </span>
      </div>
    </Card.Row>
    <Card.Body extraClassName="date-picker-body">
      <table className="date-picker-table">
        <thead>
        <tr>
          {config.locale.days.map(
              (day, index) => <th key={day + index}>{day}</th>)}
        </tr>
        </thead>
        {
          generateDays(date)
        }
      </table>
    </Card.Body>
    <Card.Footer extraClassName="date-picker-footer">
      <div className="left">
        Select Time
      </div>
      <div className="right">
        {!autoClose ?
            <Button type="primary" size="small" inverted circle>OK</Button>
            : null
        }
      </div>
    </Card.Footer>
  </Card>;
}