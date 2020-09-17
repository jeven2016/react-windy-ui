import React, {useCallback, useContext, useEffect, useState} from 'react';
import clsx from 'clsx';
import Card from '../card';
import {Button, IconArrowLeft, IconArrowRight} from '../index';
import {IconLeftDoubleArrows, IconRightDoubleArrows} from '../Icons';
import {createDateColumns} from './DateConfig';
import {slice} from '../Utils';
import DateTitle from './DateTitle';
import {DateActionType, PickerPanel, usePanel, usePanelHead} from './DateUtils';
import dayjs from 'dayjs';
import {DateContext} from '../common/Context';
import Divider from '../divider';

export default function DayPanel(props) {
  const {setPanelType} = props;
  const ctx = useContext(DateContext);
  const store = ctx.store;
  const {attach, detach, getState, setState} = store;

  //init a date while no date is selected
  const validDate = getState().getValidDate();

  //using for rendering the days of this month in GUI, it's an internal copy of initialDate
  //only used to sync with store
  const [date, setDate] = useState(validDate);

  const dataPickerClsName = clsx('date-picker', {
    'left-title': ctx.leftTitle,
  });

  // console.log(validDate.format("YYYY-MM-DD"))
  useEffect(() => {
    const listener = () => {
      const storedDate = getState().getValidDate();
      if (!storedDate.isSame(date)) {
        setDate(getState().getValidDate());
      }
    };
    attach(listener);
    return () => detach(listener);
  }, [date, attach, detach, getState, setDate]);

  const generateDays = useCallback(() => {
    let columns = createDateColumns({
      columnCount: ctx.columnCount,
      store,
      autoClose: ctx.autoClose,
      activePopup: ctx.activePopup,
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
    ctx.activePopup,
    ctx.autoClose,
    ctx.columnCount,
    ctx.customizedDate,
    ctx.dateFormat,
    ctx.onChange,
    store]);

  // console.log(date.format('YYYY-MM-DD'));
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
        ctx.activePopup(false);
        return;
      default:
        break;
    }

    setState({
      initialDate: {
        ...getState().initialDate,
        year: nextDate.year(),
        month: nextDate.month(),
      },
    });
  }, [date, setState, getState, store, ctx]);

  const changeYearPanel = useCallback(() => {
    setPanelType(PickerPanel.year);
  }, [setPanelType]);

  const changeMonthPanel = useCallback(() => {
    setPanelType(PickerPanel.month);
  }, [setPanelType]);

  return <Card extraClassName={dataPickerClsName}>
    <DateTitle date={date} setPanelType={setPanelType}/>
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
          {
            usePanelHead(<span className="content">
                <Button extraClassName="range-btn" inverted
                        onClick={changeMonthPanel}>
                  {ctx.config.locale.monthDetails[date.month()]}
                </Button>
                <Button extraClassName="range-btn" inverted
                        onClick={changeYearPanel}>
                  {date.year()}
                </Button>
            </span>, null, true)
          }

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
          {
            usePanel(<table className="date-picker-table">
              <thead>
              <tr>
                {ctx.config.locale.days.map(
                    (day, index) => <th key={day + index}>{day}</th>)}
              </tr>
              </thead>
              {
                generateDays()
              }
            </table>, true)
          }
        </div>
      </div>
    </Card.Row>
    <Divider/>
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