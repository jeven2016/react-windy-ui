import React, {useMemo, useEffect, useCallback, useState} from 'react';
import {isString} from '../Utils';
import useMounted from '../common/UseMounted';

const ResponsiveDefinition = {
  xs: {
    max: '575px',
  },
  sm: {
    min: '576px',
    max: '767px',
  },
  md: {
    min: '768px',
    max: '991px',
  },
  lg: {
    min: '992px',
    max: '1199px',
  },
  xg: {
    min: '1200px',
  },
};

export const Responsive = {
  xs: `(max-width: ${ResponsiveDefinition.xs.max})`,
  sm: {
    min: `(min-width: ${ResponsiveDefinition.sm.min})`,
    max: `(max-width: ${ResponsiveDefinition.sm.max})`,
    exact: `(min-width: ${ResponsiveDefinition.sm.min}) and (max-width: ${ResponsiveDefinition.sm.max})`,
  },
  md: {
    min: `(min-width: ${ResponsiveDefinition.md.min})`,
    max: `(max-width: ${ResponsiveDefinition.md.max})`,
    exact: `(min-width: ${ResponsiveDefinition.md.min}) and (max-width: ${ResponsiveDefinition.md.max})`,
  },
  lg: {
    min: `(min-width: ${ResponsiveDefinition.lg.min})`,
    max: `(max-width: ${ResponsiveDefinition.lg.max})`,
    exact: `(min-width: ${ResponsiveDefinition.lg.min}) and (max-width: ${ResponsiveDefinition.lg.max})`,
  },
  xg: {
    min: `(min-width: ${ResponsiveDefinition.xg.min})`,
    max: `(max-width: ${ResponsiveDefinition.xg.max})`,
    exact: `(min-width: ${ResponsiveDefinition.xg.min}) and (max-width: ${ResponsiveDefinition.xg.max})`,
  },
};

/**
 * Use media query hook
 * @param query String | {query: String}
 * @param onChange callback
 */
const useMediaQuery = (query, onChange) => {

  const moutedRef = useMounted();
  const mq = useMemo(() => {
    return window.matchMedia(isString(query) ? query : query.query);
  }, [query]);

  //for refreshing page, somehow the initial matches is false,
  //the listener will be explicitly invoked to make sure the matches is right.
  //so this callback should be invoked after the current page is completely mounted.
  const [match, setMatch] = useState(mq.matches);

  const listener = useCallback(() => {
    const isMatches = mq.matches;
    onChange && onChange(isMatches);
    setMatch(isMatches);
  }, [mq.matches, onChange]);

  useEffect(() => {
    if (moutedRef.current) {
      onChange && onChange(mq.matches);
    }
    mq.addListener(listener);
    return () => mq.removeListener(listener);
  }, [query, onChange, moutedRef, mq, listener]);

  return {
    match,
  };
};

export default useMediaQuery;