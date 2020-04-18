import React, {useEffect} from 'react';
import {execute} from './Utils';
import Progress from './progress';

const RouteLoader = (props) => {
  const {
    showLoading = true,
    route: NativeRoute,
    type = 'info',
    waitingAt = 90,
    initPercentValue = 10,
    incrementStart = 3,
    incrementEnd = 10,
    maxValue = 100,
    progressStyle,
    barStyle,
    ...otherProps
  } = props;

  execute(() =>
      Progress.showTop({
        showLoading: showLoading,
        type: type,
        waitingAt: waitingAt,
        initPercentValue: initPercentValue,
        incrementStart: incrementStart,
        incrementEnd: incrementEnd,
        maxValue: maxValue,
        progressStyle: progressStyle,
        barStyle: barStyle,
      }), 50);

  useEffect(() => {
    Progress.closeTop();
  });

  return <>
    <NativeRoute {...otherProps}/>
  </>;
};

export default RouteLoader;