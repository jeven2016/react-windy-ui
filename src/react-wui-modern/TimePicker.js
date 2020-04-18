import React, {Component} from 'react';
import moment from 'moment';
import {
  addWindowEventListener,
  removeWindowEventListener,
  preventEvent,
} from './event/EventFuntions';

let menuType = {
  hour: 0,
  min: 1,
  second: 2,
};

export default class TimePicker extends Component {
  constructor(args) {
    super(args);

    this.state = {
      show: false,
      displayTime: null,
    };
  }

  componentDidMount() {
    addWindowEventListener('click', this.hide.bind(this));
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
      displayTime: null,
    });
    preventEvent(evt);
  }

  hide() {
    if (this.state.show) {
      this.setState({show: false});
    }
  }

  onItemSelected(type, value, evt) {
    let newTime = this.getDisplayMomentTime().clone();
    switch (type) {
      case menuType.hour:
        newTime.hour(value);
        break;

      case menuType.min:
        newTime.minute(value);
        break;

      case menuType.second:
        newTime.second(value);
        break;

      default:
        throw new Error(`Unknown type(${type})`);
    }
    this.props.onChange(newTime);
    preventEvent(evt);
  }

  getMenu(type, limitValue) {
    let displayTime = this.getDisplayMomentTime();
    let selectedItem = -1;
    if (type == menuType.hour) {
      selectedItem = displayTime.hour();
    }
    if (type == menuType.min) {
      selectedItem = displayTime.minute();
    }

    if (type == menuType.second) {
      selectedItem = displayTime.second();
    }

    let items = [], nodeItem, displayValue, key, currentClass;
    for (let i = 0; i < limitValue; i++) {
      key = `${type}-${i}`;
      displayValue = i + '';
      displayValue = displayValue.length == 1 ? 0 + displayValue : displayValue;
      currentClass = selectedItem == i ? 'item active' : 'item';
      nodeItem = (<li key={key} className={currentClass}
                      onClick={this.onItemSelected.bind(this, type, i)}>
        {displayValue}
      </li>);
      items.push(nodeItem);
    }
    return (<ul className="menu">
      {items}
    </ul>);

  }

  getDisplayMomentTime() {
    const {defaultTime, value} = this.props;

    let displayMomentTime = this.state.displayTime;
    displayMomentTime = displayMomentTime ? displayMomentTime : (value
        ? value
        : defaultTime);
    return displayMomentTime;
  }

  resetTime() {
    this.props.onChange(null);
  }

  render() {
    const {value} = this.props;
    let displayMenu = this.state.show ? 'block' : 'none';
    let inlineClass = this.props.isInline
        ? 'time-container icon-input'
        : 'icon-input';

    //the time displays within the drop down list
    let displayTime = this.getDisplayMomentTime();
    let displayTimeInfo = `${displayTime.hour()}:${displayTime.minute()}:${displayTime.second()}`;

    //the time configured in GUI
    let configuredTime = TimePicker.defaultFormat;
    if (value) {
      configuredTime = `${displayTime.hour()}:${displayTime.minute()}:${displayTime.second()}`;
    }

    let icon = <i className="fa fa-clock-o icon"/>;
    if (value) {
      icon =
          <i className="fa fa-remove icon"
             onClick={this.resetTime.bind(this)}/>;
    }

    return (
        <div type="text" className={inlineClass}>
          <input type="text"
                 className="input"
                 style={{width: '9rem'}}
                 placeholder={TimePicker.defaultProps.defaultFormat}
                 key={displayTimeInfo}
                 defaultValue={configuredTime}
                 readOnly="readOnly"
                 onClick={this.showPicker.bind(this)}/>

          {icon}
          <div className="time" style={{display: displayMenu}}>
            <div className="hour">
              {this.getMenu(menuType.hour, 24, displayTime)}
            </div>
            <div className="minute">
              {this.getMenu(menuType.min, 60, displayTime)}
            </div>
            <div className="second">
              {this.getMenu(menuType.second, 60, displayTime)}
            </div>

          </div>
        </div>
    );
  }
}

/*TimePicker.propTypes = {
    defaultTime: PropTypes.object,
    defaultFormat: PropTypes.string,
    value: PropTypes.object,
    isInline: PropTypes.bool,
    onChange: PropTypes.func
};*/

TimePicker.defaultProps = {
  defaultTime: moment('0:0:0', 'HH:mm:ss'),
  defaultFormat: 'HH:mm:ss',
};