import React, {useContext} from 'react';
import {DateContext} from '../common/Context';
import {isNil} from '../Utils';
import dayjs from 'dayjs';
import {PickerPanel} from './DateUtils';

export default function DateTitle(props) {
  const {
    date,
    setPanelType,
    ...otherProps
  } = props;
  const ctx = useContext(DateContext);
  if (!ctx.hasTitle) {
    return null;
  }
  const displayDate = isNil(date) ? dayjs() : date;//display the active date or today
  let currentDayOfWeek = ctx.config.locale.dayOfWeek[displayDate.day()];
  let currentMonth = ctx.config.locale.month[displayDate.month()];

  let txtContent = ctx.leftTitle ? <div>
        <div>{currentDayOfWeek},</div>
        <div>{currentMonth} {displayDate.date()}</div>
      </div>
      : <span>{currentDayOfWeek}, {currentMonth} {displayDate.date()}
                  </span>;

  return <div className="date-picker-title" {...otherProps}>
    <div>
      <span className="year-info"
            onClick={() => setPanelType(PickerPanel.year)}>
      {displayDate.year()}
      </span>
    </div>
    <div className="detail-info">
      {txtContent}
    </div>
  </div>;
}