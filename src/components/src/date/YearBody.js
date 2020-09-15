import React, {useState} from 'react';
import {PickerPanel} from './DateUtils';
import YearsPanel from './YearsPanel';
import YearRangesPanel from './YearRangesPanel';
import MonthsPanel from './MonthsPanel';
import DayPanel from './DayPanel';

export default function YearBody(props) {
  const {type} = props;
  const [panelType, setPanelType] = useState(type);
console.log('type='+panelType)
  return <>
    {panelType === PickerPanel.year &&
    <YearsPanel setPanelType={setPanelType}/>}

    {panelType === PickerPanel.yearRange &&
    <YearRangesPanel setPanelType={setPanelType}/>}

    {panelType === PickerPanel.month &&
    <MonthsPanel setPanelType={setPanelType}/>}

    {
      panelType === PickerPanel.date &&
      <DayPanel setPanelType={setPanelType}/>
    }
  </>;
}
