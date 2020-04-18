import React, {useContext, useState} from 'react';
import {isNil, RadioGroupContext} from './Utils';
import {IconRadioChecked, IconRadioUnChecked} from './Icons';
import BaseSwitch from './BaseSwitch';
import PropTypes from 'prop-types';

/**
 * Radio Component
 * @param props
 * @returns {*}
 * @constructor
 */
function Radio(props) {
  const {onChange, defaultValue, underControlled} = useContext(
      RadioGroupContext);
  const {value, onChange: radioChange, ...otherProps} = props;

  const callbacks = [onChange, radioChange];
  const changeCallback = (radioValue, evt) => {
    for (let elem in callbacks) {
      if (!isNil(callbacks[elem])) {
        callbacks[elem](radioValue, evt);
        break;
      }
    }
  };

  return BaseSwitch({
    baseClassName: 'radio',
    iconChecked: IconRadioChecked,
    iconUnchecked: IconRadioUnChecked,
    inputType: 'radio',
    canUnchecked: false,
    checked: value === defaultValue,
    value: value,
    underControlled: isNil(underControlled) ? false : underControlled,
    onChange: changeCallback,
    ...otherProps,
  });
}

Radio.propTypes = {
  value: PropTypes.any.isRequired,
};

/**
 * Radio Group
 * @param props
 * @returns {*}
 * @constructor
 */
function RadioGroup(props) {
  const {children, defaultValue, onChange, ...otherProps} = props;
  const [selectedValue, setSelectedValue] = useState(null);

  const changeRadio = (value, evt) => {
    setSelectedValue(value);
    !isNil(onChange) && onChange(value, evt);
  };
  return <RadioGroupContext.Provider value={{
    onChange: changeRadio,
    defaultValue: isNil(selectedValue) ? defaultValue : selectedValue,
    underControlled: true, //mark the raido components are under controlled by RadioGroup
  }}>
    <div {...otherProps}>{children}</div>
  </RadioGroupContext.Provider>;
}

export default Radio;
export {RadioGroup};