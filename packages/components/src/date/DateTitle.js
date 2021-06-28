import React, {useContext, useMemo} from 'react';
import {DateContext} from '../common/Context';
import {PickerPanel} from './DateUtils';
import Card from '../card';
import dayjs from "dayjs";

export default function DateTitle(props) {
  const {
    setPanelType,
    ...otherProps
  } = props;
  const {hasTitle, config, date, type} = useContext(DateContext);
  const currDate = useMemo(() => date || dayjs(), [date]);


  let currentDayOfWeek = config.locale.dayOfWeek[currDate.day()];
  let currentMonth = config.locale.month[currDate.month()];

  const isYearType = type === PickerPanel.year;
  const isDateType = type === PickerPanel.date;
  let txtContent = useMemo(() =>
    <span>{isDateType && currentDayOfWeek + ','} {currentMonth} {isDateType && currDate.date()}
                  </span>, [currDate, currentDayOfWeek, currentMonth, isDateType]);

  if (!hasTitle) {
    return null;
  }

  return <Card.Header extraClassName="date-picker-header">
    <div className="date-picker-title" {...otherProps}>
      <div>
      <span className="year-info"
            onClick={() => setPanelType(PickerPanel.year)}>
      {currDate.year()}
      </span>
      </div>
      {
        !isYearType &&
        <div className="detail-info">
          {txtContent}
        </div>
      }
    </div>
  </Card.Header>;
}