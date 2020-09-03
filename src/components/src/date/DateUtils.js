import {isNil} from "../Utils";

export const DpDirection = {
  horizontal: 'horizontal',
  vertical: 'vertical'
};

export const DateActionType = {
  nextYear: 'nextYear',
  nextMonth: 'nextMonth',
  preYear: 'preYear',
  preMonth: 'preMonth',
  selectDay: 'selectDay',
  close: 'close',
  open: 'open',

};

export const formatDate = (date, dateFormat) => {
  if (isNil(date) || isNil(dateFormat)) {
    return "";
  }
  return date.format(dateFormat)
}