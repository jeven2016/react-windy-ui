import React, { useCallback, useEffect, useState } from 'react';
import { includes, isNil } from '../Utils';
import Checkbox from '../Checkbox';

/**
 * A HOC component for checkbox, in order to interact with Store
 */
const CheckComponent = React.forwardRef((props, ref) => {
  const { label, value, store, paramName } = props;
  const { attach, detach, getState } = store;

  const isChecked = useCallback(() => {
    var checkedValues = getState().checkedValues;
    return !isNil(checkedValues[paramName]) && includes(checkedValues[paramName], value);
  }, [getState, paramName, value]);

  const [checked, setChecked] = useState(isChecked());

  useEffect(() => {
    const listener = () => {
      const isCheckedValue = isChecked();
      if (!checked && isCheckedValue) {
        setChecked(true);
      }
      if (checked && !isCheckedValue) {
        setChecked(false);
      }
    };
    attach(listener);
    return () => detach(listener);
  }, [attach, checked, detach, isChecked, paramName, value]);

  const change = useCallback(
    (checkedState) => {
      const preCheckedValues = store.getState().checkedValues;
      let filterValues = preCheckedValues[paramName]; //an array of filter values
      if (!filterValues) {
        filterValues = [];
      }

      if (checkedState) {
        const newFilterValues = filterValues.concat(value);
        store.setState({
          checkedValues: {
            ...preCheckedValues,
            [paramName]: newFilterValues
          }
        });
      } else {
        store.setState({
          checkedValues: {
            ...preCheckedValues,
            [paramName]: filterValues.filter((f) => f !== value)
          }
        });
      }
    },
    [paramName, store, value]
  );

  return <Checkbox checked={checked} label={label} onChange={change} />;
});

export default CheckComponent;
