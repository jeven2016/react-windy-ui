import React from 'react';
import {config} from 'react-spring';

//todo: 将Padding挪到此方法中，因为在move中会出现最后抖动一下
export const usePopupAnimation = (
    active, {onStart, transformOrigin}) => {
  const initFrom = {
    opacity: 0,
    overflow: 'hidden',
    transform: 'translateY(0.5rem)',
  };

  const initTo = {
    visibility: 'visible',
    opacity: 1,
    transform: 'translateY(0rem)',
  };

  const from = active ? initFrom : initTo;
  const to = active ? initTo : [initFrom, {visibility: 'hidden'}];//make the popup don't suddenly hide

  const setting = {
    toggle: false,
    config: config.stiff,
    onStart: onStart,
    from: from,
    to: to,
  };
  return setting;
};