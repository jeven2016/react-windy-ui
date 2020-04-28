import React from 'react';
import {config} from 'react-spring';

export const toggleAnimation = ({leftOffset, rightOffset}) => {
  const from = {
    left: '0%',
    transform: `translateX(${leftOffset})`,
  };

  const to = {
    left: '100%',
    transform: `translateX(${rightOffset})`,
  };

  return {
    from: from,
    to: to,
    config: config.wobbly,
  };
};