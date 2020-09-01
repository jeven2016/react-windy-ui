import React from 'react';

export default function DateTitle(props) {
  const {
    hasTitle,
    config,
    date,
    leftTitle,
  } = props;

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
      <div className="date-picker-title">
        <span className="year-info">{date.year()}</span>
        <div className="detail-info">
          {txtContent}
        </div>
      </div>
  );
}