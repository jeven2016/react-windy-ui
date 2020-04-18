import React, {useRef, useEffect} from 'react';

const useMounted = () => {
  const mountedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => mountedRef.current = false;
  }, []);
  return mountedRef;
};
export default useMounted;