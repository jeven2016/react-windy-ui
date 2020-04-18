import React from 'react';
import useAsyncImport from './UseAsyncImport';

const AsyncComponent = (promiseGenerator) => {
  const [data] = useAsyncImport(promiseGenerator, true);
  return () => data;
};

export default AsyncComponent;