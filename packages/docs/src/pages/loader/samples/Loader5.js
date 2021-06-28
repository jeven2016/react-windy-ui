import React, {useCallback, useState} from 'react';
import {Button, Loader} from 'react-windy-ui';

export default function Loader5() {
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

    <Loader type="third"
            global
            color="white"
            hasMask={true}
            hasDefaultWidth={false}
            modalStyle={{background: '#000'}}
            active={active}
            onMaskClick={() => setActive(false)}
            text="Loading...">
    </Loader>
  </>;
}