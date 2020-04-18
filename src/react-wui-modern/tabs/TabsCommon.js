import React from 'react';

export const TabsContext = React.createContext();

export const reversePosition = (position) => {
  let barPos;
  switch (position) {
    case 'top':
      barPos = 'bottom';
      break;
    case 'bottom':
      barPos = 'top';
      break;
    case 'left':
      barPos = 'right';
      break;
    case 'right':
      barPos = 'left';
      break;
  }
  return barPos;
};

export const barAnimationConfig = (config, isTabCard, itemRect, tabRect,
                                   barPosition) => {
  let to, tabCardTo = {};
  if (isTabCard) {
    tabCardTo = {
      width: itemRect.width + 'px',
      height: itemRect.height + 'px',
    };
  }
  switch (barPosition) {
    case 'top':
    case 'bottom':
      to = {
        width: itemRect.width + 'px',
        left: (itemRect.left - tabRect.left) + 'px',
      };
      break;

    case 'left':
    case 'right':
      to = {
        height: itemRect.height + 'px',
        top: (itemRect.top - tabRect.top) + 'px',
      };
      break;

  }

  return {
    from: config.to ? config.to : {},
    to: {...to, ...tabCardTo},
  };
};

export const handleProps = (isTabCard, barPosition, styleProps) => {
  if (barPosition === 'top' || barPosition === 'bottom') {
    if (!isTabCard) {
      delete styleProps.height;
    }
    delete styleProps.top;
  }
  if (barPosition === 'left' || barPosition === 'right') {
    if (!isTabCard) {
      delete styleProps.width;
    }
    delete styleProps.left;
  }
  return styleProps;
};

export function nextPosition({tabCntRect, scrlRect, against, orientation, axis}) {
  // const rest = scrlRect[against] + scrlRect[axis] - tabCntRect[axis];
  const rest = scrlRect[orientation] - tabCntRect[orientation];
  let to, move = tabCntRect[against];
  if (rest >= move) {
    const offset = scrlRect[orientation] - move;
    if (offset < tabCntRect[orientation]) {
      move -= tabCntRect[orientation] - offset;
    }
    to = scrlRect[axis] - tabCntRect[axis] - move + 2; //margin-right: 2px
  } else {
    to = -(scrlRect.width - tabCntRect.width) + 2;
  }
  return {to};
}

export function prePosition({tabCntRect, scrlRect, against, axis}) {
  const rest = tabCntRect[axis] - scrlRect[axis];
  let to;
  if (rest < tabCntRect[against]) {
    to = 0;
  } else {
    to = scrlRect[axis] + tabCntRect[against] - tabCntRect[axis];
  }
  return {to};
}

export const filterProps = (sty, isHorizontal) => {
  let transform = sty.transform;
  if (!transform) {
    return sty;
  }
  if (isHorizontal) {
    transform = transform.substring(0, transform.indexOf(',')) +
        ', 0px, 0px';
  } else {
    //remove unused X
    transform = 'translate3d(0px, ' +
        transform.substring(transform.indexOf(',') + 1);
  }
  return {...sty, transform: transform};
};

export const calcDistance = ({scrlRect, itemRect, tabCntRect, against, begin, end}) => {
  let distance;
  if (itemRect[end] <= tabCntRect[end]
      && itemRect[begin] >= tabCntRect[begin]) {
    distance = scrlRect[begin] - tabCntRect[begin];
  } else if (itemRect[end] <= tabCntRect[end]) {
    distance = scrlRect[begin] - tabCntRect[begin] + tabCntRect[end] -
        itemRect[end];
  } else {
    distance = scrlRect[begin] - tabCntRect[begin] -
        (itemRect[end] - tabCntRect[end]);
  }

  return distance;
};

export const getTranslateValue = (
    isHorizontal, scrlRect, tabCntRect, itemRect) => {
  let distance;
  let to;
  if (isHorizontal) {
    distance = calcDistance({
      scrlRect,
      tabCntRect,
      itemRect,
      against: 'width',
      begin: 'left',
      end: 'right',
    });

    to = `translate3d(${distance}px, 0px, 0px)`;
  } else {
    distance = calcDistance({
      scrlRect,
      tabCntRect,
      itemRect,
      against: 'height',
      begin: 'top',
      end: 'bottom',
    });
    to = `translate3d(0px, ${distance}px, 0px)`;
  }
  return {distance, to};
};