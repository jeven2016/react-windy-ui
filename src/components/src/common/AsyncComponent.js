import React from 'react';
import useAsyncImport from './UseAsyncImport';

const ImportedComponent = ({promiseGenerator}) => {
  const [data] = useAsyncImport(promiseGenerator, true);
  return data;
};

const AsyncComponent = (promiseGenerator) => {
  return () => {
    return <ImportedComponent promiseGenerator={promiseGenerator}/>;
  };
};

export default AsyncComponent;