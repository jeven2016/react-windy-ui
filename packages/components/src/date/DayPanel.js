import React, { useCallback, useContext, useMemo } from 'react';
import clsx from 'clsx';
import Card from '../card';
import { Button, IconArrowLeft, IconArrowRight } from '../index';
import { IconLeftDoubleArrows, IconRightDoubleArrows } from '../icon';
import { nonNil, slice } from '../Utils';
import DateTitle from './DateTitle';
import {
  createDateColumns,
  DateActionType,
  getDisplayDate,
  PickerPanel,
  useCloseButton,
  usePanel,
  usePanelHead
} from './DateUtils';
import { DateContext } from '../common/Context';
import Divider from '../divider';
import dayjs from 'dayjs';

export default function DayPanel(props) {
  const { hasFooter: hasLocalFooter } = props;

  const {
    date,
    tempDate,
    columnCount,
    onChange,
    setTempDate,
    autoClose,
    locale,
    tryClosePopup,
    setPanelType,
    type,
    hasFooter: hasGlobalFooter
  } = useContext(DateContext);

  const hasFooter = nonNil(hasLocalFooter) ? hasLocalFooter : hasGlobalFooter;

  //if the panel is update while user select an other year/month
  const currDate = useMemo(() => getDisplayDate(date, tempDate), [date, tempDate]);
  const dataPickerClsName = clsx('date-picker');

  const showPopup = type === PickerPanel.dateTime;
  const generateDays = useCallback(() => {
    let columns = createDateColumns({
      columnCount: columnCount,
      date: date,
      tempDate: tempDate,
      onChange: onChange,
      showPopup
    });

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
  }, [columnCount, date, onChange, showPopup, tempDate]);

  const change = useCallback(
    (type, e) => {
      let nextDate = currDate.clone();
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
          nextDate = dayjs();
          break;
        default:
          break;
      }

      if (type === DateActionType.today) {
        onChange(nextDate, showPopup, e);
      } else {
        setTempDate({ date: nextDate, changed: true });
      }
    },
    [showPopup, currDate, onChange, setTempDate]
  );

  const changeYearPanel = useCallback(() => {
    setPanelType(PickerPanel.year);
  }, [setPanelType]);

  const changeMonthPanel = useCallback(() => {
    setPanelType(PickerPanel.month);
  }, [setPanelType]);
  const closeBtn = useCloseButton(autoClose, tryClosePopup, locale);

  return (
    <Card extraClassName={dataPickerClsName} hasWidth={false} hasBox={false}>
      <DateTitle setPanelType={setPanelType} />
      <Card.Row>
        <div className="dp-body">
          <div className="date-picker-info">
            <span className="previous">
              <Button
                size="small"
                inverted
                circle
                hasBox={false}
                onClick={(e) => change(DateActionType.preYear, e)}
              >
                <IconLeftDoubleArrows />
              </Button>
              <Button
                size="small"
                inverted
                circle
                hasBox={false}
                onClick={(e) => change(DateActionType.preMonth, e)}
              >
                <IconArrowLeft />
              </Button>
            </span>
            {usePanelHead(
              <span className="content">
                <Button
                  extraClassName="range-btn"
                  inverted
                  hasBox={false}
                  onClick={changeMonthPanel}
                >
                  {locale.monthDetails[currDate.month()]}
                </Button>
                <Button
                  extraClassName="range-btn"
                  inverted
                  hasBox={false}
                  onClick={changeYearPanel}
                >
                  {currDate.year()}
                </Button>
              </span>,
              null,
              true
            )}

            <span className="next">
              <Button
                size="small"
                inverted
                circle
                hasBox={false}
                onClick={(e) => change(DateActionType.nextMonth, e)}
              >
                <IconArrowRight />
              </Button>
              <Button
                size="small"
                inverted
                circle
                hasBox={false}
                onClick={(e) => change(DateActionType.nextYear, e)}
              >
                <IconRightDoubleArrows />
              </Button>
            </span>
          </div>
          <div className="date-picker-body">
            {usePanel(
              <table className="date-picker-table">
                <thead>
                  <tr>
                    {locale.days.map((day, index) => (
                      <th key={day + index}>{day}</th>
                    ))}
                  </tr>
                </thead>
                {generateDays()}
              </table>,
              true
            )}
          </div>
        </div>
      </Card.Row>
      {!autoClose && hasFooter && (
        <>
          <Divider />
          <Card.Footer extraClassName="date-picker-footer">
            <div className="left">
              <Button
                extraClassName="today-btn"
                type="primary"
                size="small"
                inverted
                onClick={(e) => change(DateActionType.today)}
              >
                {locale.today}
              </Button>
            </div>
            <div className="right">{closeBtn}</div>
          </Card.Footer>
        </>
      )}
    </Card>
  );
}
