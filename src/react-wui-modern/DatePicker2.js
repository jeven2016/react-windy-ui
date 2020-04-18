import React, {Component} from 'react';
import moment from 'moment';
import {
  addWindowEventListener,
  removeWindowEventListener,
  preventEvent,
} from './event/EventFuntions';
import slice from 'lodash/slice';

let dayOfWeek = {
  '0': 'Sun',
  '1': 'Mon',
  '2': 'Tue',
  '3': 'Wed',
  '4': 'Thur',
  '5': 'Fri',
  '6': 'Sat',
};

let month = {
  '0': 'Jan',
  '1': 'Feb',
  '2': 'Mar',
  '3': 'Apr',
  '4': 'May',
  '5': 'Jun',
  '6': 'Jul',
  '7': 'Aug',
  '8': 'Sep',
  '9': 'Oct',
  '10': 'Nov',
  '11': 'Dec',
};

let fullMonth = {
  '0': 'January',
  '1': 'Febuary',
  '2': 'March',
  '3': 'April',
  '4': 'May',
  '5': 'June',
  '6': 'July',
  '7': 'Auguest',
  '8': 'Sepetember',
  '9': 'Octber',
  '10': 'Nov',
  '11': 'Dec',
};

class DateHelper {
  static getNumberOfDays(momentDate) {
    let year = momentDate.year();
    let month = momentDate.month() + 1;

    switch (month) {
      case 2: {
        let isLeapYear = (year % 4 === 0 && year % 100 !== 0) ||
            (year % 400 === 0);
        //For Feb.
        if (isLeapYear) {
          return 28;
        } else {
          return 29;
        }
      }
      case 4:
      case 6:
      case 9:
      case 11:
        return 30;

      default:
        return 31;
    }
  }
}

export default class DatePicker2 extends Component {
  /*   static propTypes = {
         defaultDate: PropTypes.object,
         defaultFormat: PropTypes.string,
         value: PropTypes.object,
         isInline: PropTypes.bool,
         onChange: PropTypes.func
     };*/

  static defaultProps = {
    defaultDate: moment(),
    defaultFormat: 'YYYY-MM-DD',
    isInline: true,
  };

  constructor(args) {
    super(args);
    this.columnCount = 7 * 6;
    this.state = {
      show: false,
      displayDate: null,
    };
  }

  componentDidMount() {
    addWindowEventListener('click', this.hide.bind(this));
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.value !== nextProps.value ||
        this.props.defaultDate !== nextProps.defaultDate
        || this.state.show !== nextState.show;
  }

  componentWillUnmount() {
    removeWindowEventListener('click', this.hide.bind(this));
  }

  showPicker(evt) {
    if (this.state.show) {
      this.hide();
      return;
    }

    this.setState({
      show: true,
      displayDate: null,
    });
    preventEvent(evt);
  }

  hide() {
    if (this.state.show) {
      this.setState({show: false});
    }
  }

  onItemSelected({day, month}, evt) {
    this.setState({show: false});

    let selectedDate = this.getDisplayMomentDate();
    selectedDate.date(day);
    selectedDate.month(month);

    //update the display date
    if (!this.state.displayDate) {
      this.setState({displayDate: selectedDate});
    }

    this.props.onChange(selectedDate);
    preventEvent(evt);
  }

  generateTtitle(momentDate) {
    let currentDayOfWeek = dayOfWeek[momentDate.day()];
    let currentMonth = month[momentDate.month()];

    return (
        <div className="title">
          <a className="year-info" href="#">{momentDate.year()}</a>
          <div className="detail-info">
            {currentDayOfWeek}, {currentMonth} {momentDate.date()}
          </div>
        </div>
    );
  }

  generateDays(momentDate) {
    let columns = this.createColumns(momentDate);

    return (
        <tbody>
        <tr>{slice(columns, 0, 7)}</tr>
        <tr>{slice(columns, 7, 14)}</tr>
        <tr>{slice(columns, 14, 21)}</tr>
        <tr>{slice(columns, 21, 28)}</tr>
        <tr>{slice(columns, 28, 35)}</tr>
        <tr>{slice(columns, 35, 42)}</tr>
        </tbody>
    );
  }

  createColumns(momentDate) {
    //for current month
    let numberOfDays = DateHelper.getNumberOfDays(momentDate);
    let month = momentDate.month();

    let firstDay = moment({y: momentDate.year(), m: month, d: 1}).day();//get the first day of that week

    //for last month
    let daysOfLastMonth = DateHelper.getNumberOfDays(
        moment({y: momentDate.year(), m: momentDate.month() - 1}));

    //the data picker has 7row and 6 columns/row
    let columns = [];
    let td, key;

    //append the days of last month
    for (let i = firstDay - 1; i >= 0; i--) {
      key = `${momentDate.month() - 1}-${i}`;
      td = (<td key={key}>
        <button className="button text comment"
                onClick={this.onItemSelected.bind(this, {
                  month: month - 1,
                  day: daysOfLastMonth - i,
                })}>{daysOfLastMonth - i}</button>
      </td>);
      columns.push(td);
    }

    let currentDate = momentDate.date();
    let dateToProcess;
    let btnClass = '';

    //append the days of this month
    for (let i = firstDay; i < numberOfDays + firstDay; i++) {
      dateToProcess = i - firstDay + 1;
      btnClass = dateToProcess === currentDate ? 'button active' : 'button';
      key = `${momentDate.month()}-${dateToProcess}`;

      td = (<td key={key}>
        <button className={btnClass} key={i - firstDay + 1}
                onClick={this.onItemSelected.bind(this, {
                  day: dateToProcess,
                  month: month,
                })}>{dateToProcess}</button>
      </td>);
      columns.push(td);
    }

    //append the days of next month
    let leftLen = this.columnCount - columns.length;

    for (let i = 0; i < leftLen; i++) {
      key = `${momentDate.month() + 1}-${i}`;
      td = (<td key={key}>
        <button className="button text comment" key={i + 1}
                onClick={this.onItemSelected.bind(this,
                    {month: month + 1, day: i + 1})}>{i + 1}</button>
      </td>);
      columns.push(td);
    }

    return columns;
  }

  resetDate() {
    this.setState({displayDate: null});
    this.props.onChange(null);
  }

  getDateInput() {
    const {value} = this.props;
    let dateStr = null;
    if (value) {
      dateStr = `${value.year()}-${value.month() + 1}-${value.date()}`;
    }

    //Use the key prop to force rendering of an entirely new input.
    return (<input type="text"
                   className="input"
                   style={{width: '9rem'}}
                   placeholder={DatePicker2.defaultProps.defaultFormat}
                   key={dateStr}
                   defaultValue={dateStr}
                   readOnly="readOnly"
                   onClick={this.showPicker.bind(this)}/>);
  }

  getDisplayMomentDate() {
    const {defaultDate, value} = this.props;

    let displayMomentDate = this.state.displayDate;
    displayMomentDate = displayMomentDate ? displayMomentDate : (value
        ? value
        : defaultDate);
    return displayMomentDate;
  }

  nextMonth(monthOffset, evt) {
    let currentMomentDate = this.getDisplayMomentDate().clone();
    currentMomentDate.month(currentMomentDate.month() + monthOffset);
    this.setState({displayDate: currentMomentDate});
    preventEvent(evt);
  }

  nextYear(yearOffset, evt) {
    let currentMomentDate = this.getDisplayMomentDate().clone();
    currentMomentDate.year(currentMomentDate.year() + yearOffset);
    this.setState({displayDate: currentMomentDate});
    preventEvent(evt);
  }

  getCalendar(currentMomentDate) {
    let month = currentMomentDate.month();
    let year = currentMomentDate.year();

    return (
        <div className="data-picker">
          {this.generateTtitle(currentMomentDate)}
          <div className="info">
                        <span className="previous">
                            <button onClick={this.nextYear.bind(this, -1)}
                                    className="button">
                                <i className="fa fa-angle-double-left"/>
                            </button>
                            <button onClick={this.nextMonth.bind(this, -1)}
                                    className="button">
                                <i className="fa fa-caret-left"/>
                            </button>
                        </span>
            <span className="content">{fullMonth[month]} {year}</span>
            <span className="next">
                        <button onClick={this.nextMonth.bind(this, 1)}
                                className="button">
                            <i className="fa fa-caret-right"/>
                        </button>
                        <button onClick={this.nextYear.bind(this, 1)}
                                className="button">
                                <i className="fa fa-angle-double-right"/>
                            </button>
                    </span>
          </div>
          <table className="data-picker-table">
            <thead>
            <tr>
              <th>S</th>
              <th>M</th>
              <th>T</th>
              <th>W</th>
              <th>T</th>
              <th>F</th>
              <th>S</th>
            </tr>
            </thead>
            {
              this.generateDays(currentMomentDate)
            }
          </table>
        </div>);
  }

  render() {
    const {isInline, value} = this.props;
    let displayMomentDate = this.getDisplayMomentDate();
    let calendar = null;

    if (displayMomentDate && this.state.show) {
      calendar = this.getCalendar(displayMomentDate);
    }

    let inlineClass = isInline ? 'date-container icon-input' : 'icon-input';
    let icon = <i className="fa fa-calendar icon"/>;
    if (value) {
      icon =
          <i className="fa fa-remove icon"
             // onClick={resetDate}
          />;
    }

    return (
        <div type="text" className={inlineClass}>
          {this.getDateInput()}
          {icon}
          {calendar}
        </div>
    );
  }

}