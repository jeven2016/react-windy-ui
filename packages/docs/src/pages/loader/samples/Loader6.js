import React, {useCallback, useState} from 'react';
import {Button, Loader} from 'react-windy-ui';

export default function Loader6() {
  const [active, setActive] = useState(false);

  const delayClose = useCallback(() => {
    const timeout = setTimeout(() => {
      setActive(false);
      clearTimeout(timeout);
    }, 3000);
  }, []);

  return <>

    <Button type="primary" onClick={() => {
      setActive(true);
      delayClose();
    }}>Active</Button>

    <Loader type="primary"
            global
            size="small"
            color="white"
            hasDefaultWidth={false}
            modalStyle={{background: '#000'}}
            direction="horizontal"
            active={active}
            // onMaskClick={() => setActive(false)}
            text="Loading the data">
    </Loader>
  </>;
}