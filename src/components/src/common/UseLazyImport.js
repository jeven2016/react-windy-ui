import React, {useCallback, useEffect, useState} from 'react';

/**
 * Async import a module
 * @param promiseGenerator
 * @param eagerLoad
 * @param props it only applies for React component
 * @returns [data, setData]
 */
const useLazyImport = (importFunc, eagerLoad = false) => {
  const [module, setModule] = useState(null);

  const load = useCallback(() => {
    importFunc().
        then(module => {
          setModule(module.default ? module.default : module);
        }).catch(e => {throw e;});
  }, [importFunc]);

  useEffect(() => {
    if (eagerLoad) {
      load();
    }
  }, []);

  return [module, load];
};

export default useLazyImport;