import React from 'react';
import Element from './Element';
import clsx from 'clsx';

const useElement = (props, ref, defaultClassName, cls = {}, newStyle = {}) => {
  const {
    className = defaultClassName,
    style,
    ...otherProps
  } = props;

  let clsName = clsx(className, cls);

  const sty = {...style, newStyle};
  return (
      <Element
          ref={ref}
          className={clsName}
          style={sty}
          {...otherProps}/>
  );
};

export default useElement;