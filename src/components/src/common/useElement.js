import React from 'react';
import Element from './Element';
import clsx from 'clsx';
import {JustifyContentType} from './Constants';

const useElement = (props, ref, defaultClassName, cls = {}, newStyle = {}) => {
  const {
    className = defaultClassName,
    style,
    justify,
    ...otherProps
  } = props;

  let clsName = clsx(className, cls, {
    [JustifyContentType[justify]]: justify,
  });

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