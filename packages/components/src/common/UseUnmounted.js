import React, { useRef, useEffect } from 'react';

const useUnmounted = () => {
  const unMountedRef = useRef(false);

  useEffect(() => {
    return () => {
      unMountedRef.current = true;
    };
  }, []);
  return unMountedRef;
};
export default useUnmounted;
