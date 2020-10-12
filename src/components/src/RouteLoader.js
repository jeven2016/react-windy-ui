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
        style: progressStyle,
        barStyle: barStyle,
      }), 50);

  useEffect(() => {
    Progress.closeTop();
  });

  return <>
    <NativeRoute {...otherProps}/>
  </>;
};

/**
 * A default props filter for react-router-dom
 * @param routeProps
 * @returns {{match: *, location: *, history: *}}
 */
RouteLoader.routeFilter = (routeProps) => ({
  location: routeProps.location,
  history: routeProps.history,
  match: routeProps.match,
});

export default RouteLoader;