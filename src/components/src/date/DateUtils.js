import React from 'react';
import {Spring} from 'react-spring/renderprops';
import {Button} from '../index';
import {DataConfig} from './DateConfig';

export const DpDirection = {
  horizontal: 'horizontal',
  vertical: 'vertical',
};

export const DateActionType = {
  nextYear: 'nextYear',
  nextMonth: 'nextMonth',
  preYear: 'preYear',
  preMonth: 'preMonth',
  selectDay: 'selectDay',
  today: 'today',
  close: 'close',
  open: 'open',

};

export const PopupType = {
  popup: 'popup',
  modal: 'modal',
};

export const PickerPanel = {
  year: 'year',
  yearRange: 'yearRange',
  month: 'month',
  date: 'date',
};

export const usePanelHead = (content, onClick, isNode = false) => {
  const cnt = isNode ? content : <Button extraClassName="range-btn" inverted
                                         onClick={onClick}>
    {content}️
  </Button>;

  return <Spring
      reset
      from={{opacity: 0, transform: 'translate3d(4rem, 0, 0)'}}
      to={{opacity: 1, transform: 'translate3d(0rem, 0, 0)'}}>
    {props => React.cloneElement(cnt, {style: props})}
  </Spring>;
};

export const usePanel = (content, isNode = false) => {
  const cnt = isNode ? content : <div className="year-cols">{content}️</div>;

  return <Spring
      reset
      from={{opacity: 0, transform: 'scale(0.9)'}}
      to={{opacity: 1, transform: 'scale(1)'}}>
    {props => React.cloneElement(cnt, {style: props})}
  </Spring>;
};

export const getFormatter = (type) => {
  return DataConfig.format[type];
};