import React, {useRef, useEffect} from 'react';

const usePrevious = (currentValue) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = currentValue;
  }, [currentValue]);

  // return previous value
  return ref.current;
};
export default usePrevious;