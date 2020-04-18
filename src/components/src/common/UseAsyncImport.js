import React, {useCallback, useEffect, useState} from 'react';

const useAsyncImport = (promiseGenerator, eagerLoad = false) => {
  const [data, setData] = useState(null);

  const load = useCallback(() => {
    promiseGenerator().
        then(module => {
          console.log("loading....")
          setData(module.default ? module.default : module);}).
        catch(e => {throw e;});
  }, [promiseGenerator]);

  useEffect(() => {
    if (eagerLoad) {
      load();
    }
  }, []);

  return [data, load];
};

export default useAsyncImport;