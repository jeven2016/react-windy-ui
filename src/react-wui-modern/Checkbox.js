import React from 'react';
import BaseSwitch from './BaseSwitch';
import {IconChecked, IconCheckedIndeterminate, IconUnChecked} from './Icons';

function Checkbox(props) {
  const {showIndeterminateState, ...otherProps} = props;
  return BaseSwitch({
    baseClassName: 'checkbox',
    iconIndeterminateStyle: null,
    iconIndeterminate: IconCheckedIndeterminate,
    showIndeterminateState: showIndeterminateState,
    iconChecked: IconChecked,
    iconUnchecked: IconUnChecked,
    inputType: 'checkbox',
    ...otherProps,
  });
}

Checkbox.defaultProps = {
  showIndeterminateState: false,
};

Checkbox.propTypes = {};

export default Checkbox;