import React from 'react';
import Element from './Element';
import clsx from 'clsx';

const useElement = (props, ref, defaultClassName, cls = {}, style = {}) => {
  const {
    className = defaultClassName,
    ...otherProps
  } = props;

  let clsName = clsx(className, cls);

  return (
      <Element
          ref={ref}
          className={clsName}
          style={style}
          {...otherProps}/>
  );
};

export default useElement;