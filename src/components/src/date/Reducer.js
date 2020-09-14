export const DateActionType = {
  nextYear: 'nextYear',
  nextMonth: 'nextMonth',
  preYear: 'preYear',
  preMonth: 'preMonth',
  selectDay: 'selectDay',
  close: 'close',
  open: 'open',

};

const getDateByYear = (yearOffset, momentDate) => {
  return momentDate.clone().add(yearOffset, 'years');
};

const getDateByMonth = (monthOffset, momentDate) => {
  return momentDate.clone().add(monthOffset, 'months');
};

export const reducer = (state, action) => {
  switch (action.type) {
    case DateActionType.nextYear:
      return {...state, displayDate: getDateByYear(1, action.data.date)};

    case DateActionType.nextMonth:
      return {...state, displayDate: getDateByMonth(1, action.data.date)};

    case DateActionType.preYear:
      return {...state, displayDate: getDateByYear(-1, action.data.date)};

    case DateActionType.preMonth:
      return {...state, displayDate: getDateByMonth(-1, action.data.date)};

    case DateActionType.selectDay:
      return {...state, displayDate: null, date: action.data.date};

    case DateActionType.close:
      return {...state, displayDate: null};
  }
};