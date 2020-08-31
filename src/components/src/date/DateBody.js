import React, {useCallback} from "react";
import clsx from "clsx";
import {Button, IconArrowLeft, IconArrowRight} from "../index";
import {IconLeftDoubleArrows, IconRightDoubleArrows} from "../Icons";
import {DpDirection} from "./DateUtils";
import {createDateColumns} from "./DateConfig";
import {slice} from "../Utils";

const DateBody = React.forwardRef((props, ref) => {
  const {
    momentDate,
    config,
    leftTitle,
    hasTitle,
    columnCount,
    autoClose,
    direction,
    store
  } = props;
  let month = momentDate.month();
  let year = momentDate.year();

  const createTitle = useCallback((momentDate) => {
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
  }, []);

  const createDays = (momentDate) => {
    let columns = createDateColumns(momentDate, columnCount, () => {
        }, null,
        momentDate, autoClose, () => {
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
  };

  const dataPickerClsName = clsx('date-picker', {
    'left-title': leftTitle,
    'dp-column': direction === DpDirection.vertical,
    'dp-row': direction === DpDirection.horizontal,
  });

  return <div className={dataPickerClsName}>
    {createTitle(momentDate)}
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
          createDays(momentDate)
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
});

export default DateBody;