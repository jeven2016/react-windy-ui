import {useCallback, useEffect, useState} from 'react';

/**
 * Async import a module
 * @param importFunc
 * @param eagerLoad
 * @returns [data, setData]
 */
const useLazyImport = (importFunc, eagerLoad = false) => {
  const [module, setModule] = useState(null);
  const load = useCallback(() => {
    importFunc().then(md => {
      setModule(md.default == null ? module : md.default);
    }).catch(e => {throw e;});
  }, [importFunc, module]);

  useEffect(() => {
    if (eagerLoad) {
      load();
    }
  }, [eagerLoad, load]);

  return [module, load];
};

export default useLazyImport;