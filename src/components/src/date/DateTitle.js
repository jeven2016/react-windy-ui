import React, {useContext} from 'react';
import {DateContext} from '../common/Context';
import {BodyType} from './DateUtils';
import {isNil} from "../Utils";
import dayjs from "dayjs";

export default function DateTitle(props) {
  const {
    hasTitle,
    config,
    date,
    leftTitle,
    ...otherProps
  } = props;
  const ctx = useContext(DateContext);
  if (!hasTitle) {
    return null;
  }
  const displayDate = isNil(date) ? dayjs() : date;//display the active date or today
  let currentDayOfWeek = config.locale.dayOfWeek[displayDate.day()];
  let currentMonth = config.locale.month[displayDate.month()];

  let txtContent = leftTitle ? <div>
        <div>{currentDayOfWeek},</div>
        <div>{currentMonth} {displayDate.date()}</div>
      </div>
      : <span>{currentDayOfWeek}, {currentMonth} {displayDate.date()}
                  </span>;

  return (
      <div className="date-picker-title" {...otherProps}>
        <div><span className="year-info" onClick={() => ctx.setBodyType(
            BodyType.year)}>{displayDate.year()}</span></div>
        <div className="detail-info">
          {txtContent}
        </div>
      </div>
  );
}