import React, {useEffect, useRef, useState} from 'react';
import {Select, Divider} from 'react-windy-ui';

export default function Select6() {
  const [active, setActive] = useState(false);
  const currentValue = useRef(1);
  const popupRef = useRef(null); //a reference to popup dom node
  const inputRef = useRef(null);//a reference to input dom node

  const change = (next) => {
    console.log('changed to: ' + next);
    if (!next && currentValue.current !== 1) {
      return;
    }
    setActive(next);
  };

  const select = (value) => {
    currentValue.current = value;
  };

  //add an event listener to window to close the popup
  useEffect(() => {
    const hanlder = (e) => {
      const isInputClicked = inputRef.current.contains(e.target);
      const isPopupClicked = popupRef.current.contains(e.target);

      if (isInputClicked) {
        //show the popup if clicking the input
        setActive(true);
      } else if (!isPopupClicked) {
        //close the popup if neither the input nor the popup body is clicked
        setActive(false);
      }
    };
    window.addEventListener('click', hanlder);

    return () => window.removeEventListener('click', hanlder);
  }, []);

  return <>
    <Select activeBy="hover"
            popupRef={popupRef}
            ctrlRef={inputRef}
            defaultValue={currentValue.current}
            active={active}
            onChange={change}
            onSelect={select}>
      <Select.Option value={0}>Won't close1</Select.Option>
      <Divider/>
      <Select.Option value={1}>Close</Select.Option>
      <Divider/>
      <Select.Option value={2}>Won't close2</Select.Option>
      <Divider/>
      <Select.Option value={3}>Won't close3</Select.Option>
      <Divider/>
      <Select.Option value={4}>Won't close4</Select.Option>
    </Select>
  </>;

}