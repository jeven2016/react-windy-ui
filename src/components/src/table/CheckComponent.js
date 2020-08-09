import React, {useCallback, useEffect, useState} from 'react';
import {includes} from '../Utils';
import Checkbox from '../Checkbox';

/**
 * A HOC component for checkbox, in order to interact with Store
 */
const CheckComponent = React.forwardRef((props, ref) => {
  const {label, value, store} = props;
  const {attach, detach, getState} = store;

  const isChecked = useCallback(() => {
    var checkedValues = getState().checkedValues;
    return includes(checkedValues, value);
  }, [getState, value]);

  const [checked, setChecked] = useState(isChecked());

  useEffect(() => {
    const listener = ({checkedValues}) => {
      const isCheckedValue = includes(checkedValues, value);
      if (!checked && isCheckedValue) {
        setChecked(true);
      }
      if (checked && !isCheckedValue) {
        setChecked(false);
      }
    };
    attach(listener);
    return () => detach(listener);
  }, [attach, checked, detach, isChecked, value]);

  const change = useCallback((checkedState) => {
    var preCheckedValues = store.getState().checkedValues;
    if (checkedState) {
      store.setState({checkedValues: [...preCheckedValues, value]});
    } else {
      store.setState(
          {checkedValues: [...preCheckedValues.filter(v => v !== value)]});
    }
  }, [store, value]);

  return <Checkbox checked={checked} label={label} onChange={change}/>;
});

export default CheckComponent;