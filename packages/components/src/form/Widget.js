import React from 'react';
import { isNil } from '../Utils';

const Widget = React.forwardRef((props, ref) => {
  const { children } = props;
  let chd;
  if (!isNil(children)) {
    chd = React.Children.only(children);
  }
  return <>{chd}</>;
});

export default Widget;
