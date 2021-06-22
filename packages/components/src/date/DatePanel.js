import React, {useState} from 'react';
import {PickerPanel} from './DateUtils';
import YearsPanel from './YearsPanel';
import YearRangesPanel from './YearRangesPanel';
import MonthsPanel from './MonthsPanel';
import DayPanel from './DayPanel';

export default function DatePanel(props) {
  const {type} = props;
  const [panelType, setPanelType] = useState(type);

  switch (panelType) {
    case PickerPanel.year:
      return <YearsPanel setPanelType={setPanelType}/>;

    case PickerPanel.yearRange:
      return <YearRangesPanel setPanelType={setPanelType}/>;

    case PickerPanel.month:
      return <MonthsPanel setPanelType={setPanelType}/>;

    default :
      return <DayPanel setPanelType={setPanelType}/>;
  }
}
