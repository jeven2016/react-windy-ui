import React from 'react';
import Element from './Element';
import clsx from 'clsx';
import {adjustItems} from './Constants';

const useElement = (props, ref, defaultClassName, cls = {}, newStyle = {}) => {
  const {
    className = defaultClassName,
    extraClassName,
    style,
    justify,
    ...otherProps
  } = props;

  const justifyCls = adjustItems(justify);
  let clsName = clsx(extraClassName, className, cls, {
    [justifyCls]: justifyCls,
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