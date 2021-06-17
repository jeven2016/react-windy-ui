import React, {useEffect, useRef} from 'react';

//invoke the callbacks
//the callback should be invoked while the setState function completes where
//the state isn't with the latest value
export default function useInvoke(data, callback, dependency) {
  const initRenderRef = useRef(true);

  useEffect(() => {
    if (!initRenderRef.current) {
      callback && callback(data);
    }
    initRenderRef.current = false;
  }, [dependency, callback]);

}