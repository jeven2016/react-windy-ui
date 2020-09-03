import React, {useCallback, useEffect, useState} from "react";
import {IconCalendar, Input} from "../index";
import {formatDate} from "./DateUtils";

const InputCtrl = React.forwardRef((props, ref) => {
  const {
    store,
    placeholder
  } = props;
  const {attach, detach, getState} = store;

  const [date, setDate] = useState(formatDate(getState().activeDate));

  useEffect(() => {
    const listener = () => {
      setDate(formatDate(getState().activeDate));
    }

    attach(listener);
    return () => detach(listener);

  }, []);

  const changeDate = useCallback((e) => {
    setDate(e.target.value);
  }, []);

  return <Input.IconInput size="medium" ref={ref}>
    <Input value={date} onChange={changeDate} placeholder={placeholder}/>
    <IconCalendar/>
  </Input.IconInput>;
});

export default InputCtrl;