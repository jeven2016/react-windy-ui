import React, {useRef, useEffect} from 'react';

const usePrevious = (initValue) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = initValue;
  }, [initValue]);
  return ref.current;
};
export default usePrevious;