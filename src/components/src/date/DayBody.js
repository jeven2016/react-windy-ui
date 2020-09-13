import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';
import Card from '../card';
import {Button, IconArrowLeft, IconArrowRight} from '../index';
import {IconLeftDoubleArrows, IconRightDoubleArrows} from '../Icons';
import {createDateColumns} from './DateConfig';
import {isNil, slice} from '../Utils';
import DateTitle from './DateTitle';
import {DateActionType} from './DateUtils';
import dayjs from 'dayjs';
import {DateContext} from '../common/Context';

export default function DayBody(props) {
  const {
    activePopup,
  } = props;
  const ctx = useContext(DateContext);
  const store = ctx.store;
  const {attach, detach, getState} = store;
  const activeDate = getState().activeDate;

  //init a date while no date is selected
  const validDate = isNil(activeDate)
      ? getState().initialDate
      : activeDate;

  //using for rendering the days of this month in GUI
  const [date, setDate] = useState(validDate);

  const dataPickerClsName = clsx('date-picker', {
    'left-title': ctx.leftTitle,
  });

  useEffect(() => {
    const listener = () => {
      setDate(getState().activeDate);
    };
    attach(listener);
    return () => detach(listener);
  }, [attach, detach, getState]);

  const generateDays = useCallback(() => {
    let columns = createDateColumns({
      displayDate: date,
      columnCount: ctx.columnCount,
      store,
      autoClose: ctx.autoClose,
      activePopup,
      onChange: ctx.onChange,
      dateFormat: ctx.dateFormat,
      customizedDate: ctx.customizedDate,
    });

    return <tbody>
    <tr>{slice(columns, 0, 7)}</tr>
    <tr>{slice(columns, 7, 14)}</tr>
    <tr>{slice(columns, 14, 21)}</tr>
    <tr>{slice(columns, 21, 28)}</tr>
    <tr>{slice(columns, 28, 35)}</tr>
    <tr>{slice(columns, 35, 42)}</tr>
    </tbody>;
  }, [
    activePopup,
    ctx.autoClose,
    ctx.columnCount,
    ctx.customizedDate,
    ctx.dateFormat,
    ctx.onChange,
    date,
    store]);

  const change = useCallback((type, e) => {
    let nextDate = date;
    switch (type) {
      case DateActionType.preMonth:
        nextDate = nextDate.add(-1, 'months');
        break;
      case DateActionType.preYear:
        nextDate = nextDate.add(-1, 'years');
        break;
      case DateActionType.nextMonth:
        nextDate = nextDate.add(1, 'months');
        break;
      case DateActionType.nextYear:
        nextDate = nextDate.add(1, 'years');
        break;
      case DateActionType.today:
        store.setState({activeDate: dayjs()});
        activePopup(false);
        return;
      default:
        break;
    }

    !isNil(nextDate) && setDate(nextDate);
  }, [activePopup, date, store]);

  const currentTitleInfo = useMemo(() => {
    const selectedYm = store.getState().selectedYm;
    if (isNil(selectedYm.year) || isNil(selectedYm.month)) {
      return {year: validDate.year, month: validDate.month};
    }
    return {year: selectedYm.year, month: selectedYm.month};
  }, [store, validDate]);

  console.log(currentTitleInfo)

  return <Card extraClassName={dataPickerClsName}>
    <Card.Header extraClassName="date-picker-header">
      <DateTitle hasTitle={ctx.hasTitle}
                 config={ctx.config}
                 date={validDate}
                 leftTitle={ctx.leftTitle}/>
    </Card.Header>

    <Card.Row>
      <div className="dp-body">
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
          {ctx.config.locale.monthDetails[currentTitleInfo.month]} {currentTitleInfo.year}
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
        <div className="date-picker-body">
          <table className="date-picker-table">
            <thead>
            <tr>
              {ctx.config.locale.days.map(
                  (day, index) => <th key={day + index}>{day}</th>)}
            </tr>
            </thead>
            {
              generateDays()
            }
          </table>
        </div>
      </div>
    </Card.Row>

    <Card.Footer extraClassName="date-picker-footer">
      <div className="left">
        <Button extraClassName="today-btn" type="primary"
                size="small" inverted
                onClick={(e) => change(DateActionType.today)}>
          Today
        </Button>
      </div>
      <div className="right">
        {!ctx.autoClose ?
            <Button type="primary" size="small" inverted>OK</Button>
            : null
        }
      </div>
    </Card.Footer>
  </Card>;
}