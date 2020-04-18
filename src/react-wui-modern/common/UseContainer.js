import React, {useRef, useEffect} from 'react';

/**
 * Creates DOM element to be used as React root.
 */
export function useCreateRootElement(id) {
  const rootRef = useRef(null);
  if (!rootRef.current) {
    let rootElem = document.querySelector(`#${id}`);
    if (!rootElem) {
      console.log('create container...');
      rootElem = document.createElement('div');
      rootElem.setAttribute('id', id);
      document.body.insertBefore(
          rootElem,
          document.body.lastElementChild,
      );
    }
    rootRef.current = rootElem;
  }
  return rootRef;
}

function useContainer(id) {
  const rootElemRef = useCreateRootElement(id);
  return rootElemRef.current;
}

export default useContainer;