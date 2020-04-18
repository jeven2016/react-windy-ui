import React, {PureComponent} from 'react';
import DatePicker2 from './DatePicker2';
import TimePicker from './TimePicker';

export default class DateTimePicker extends PureComponent {
  constructor(args) {
    super(args);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.value !== nextProps.value ||
        this.props.defaultDate !== nextProps.defaultDate;
  }

  render() {
    const {defaultDate, value, onDateChange, onTimeChange} = this.props;
    return (
        <div className="date-time-picker">
          <DatePicker2
              value={value}
              defaultDate={defaultDate}
              isInline={true}
              onChange={onDateChange.bind(this)}
          />
          <TimePicker
              value={value}
              defaultTime={defaultDate}
              isInline={true}
              onChange={onTimeChange.bind(this)}
          />
        </div>
    );
  }

}

/*DateTimePicker.propTypes = {
    defaultDate: PropTypes.object,
    value: PropTypes.object,
    onDateChange: PropTypes.func,
    onTimeChange: PropTypes.func
};*/
