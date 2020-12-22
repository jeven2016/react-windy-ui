import React, {useEffect, useRef} from 'react';

/**
 * While the callback function depends ont state/props, it will be frequently recreated.
 * The most problem is due to the dependencies may be changed frequently.
 *
 * refer to : https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */
const useEventCallback = (func) => {
  const ref = useRef(func);

  useEffect(() => {
    ref.current = func;
  });

  return React.useCallback((...args) =>
      (0, ref.current)(...args), []);
};

export default useEventCallback;