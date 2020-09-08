import React, {useContext} from 'react';
import {DateContext} from '../common/Context';
import {BodyType} from './DateUtils';

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
  let currentDayOfWeek = config.locale.dayOfWeek[date.day()];
  let currentMonth = config.locale.month[date.month()];

  let txtContent = leftTitle ? <div>
        <div>{currentDayOfWeek},</div>
        <div>{currentMonth} {date.date()}</div>
      </div>
      : <span>{currentDayOfWeek}, {currentMonth} {date.date()}
                  </span>;

  return (
      <div className="date-picker-title" {...otherProps}>
        <div><span className="year-info" onClick={() => ctx.setBodyType(
            BodyType.year)}>{date.year()}</span></div>
        <div className="detail-info">
          {txtContent}
        </div>
      </div>
  );
}