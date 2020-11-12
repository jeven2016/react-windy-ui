import React, {useEffect, useMemo, useState} from 'react';
import {isString, validate} from '../Utils';

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
 * @param targetWindow by default, it means the window
 */

const useMediaQuery = (query, onChange, targetWindow = window) => {
  /*{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  }*/
  const isStringQuery = isString(query);
  validate(isStringQuery || (typeof query) == 'object',
      'the type of query isn\'t string or object');

  const keys = !isStringQuery ? Object.keys(query) : [];

  const initResult = useMemo(() => {
    if (isStringQuery) {
      const strMq = targetWindow.matchMedia(query);
      return {
        matches: {value: strMq.matches, mq: strMq},
      };
    } else {
      const matchObj = {};
      keys.forEach(key => {
        const mq = targetWindow.matchMedia(query[key]);
        matchObj[key] = {value: mq.matches, mq: mq};
      });
      return matchObj;
    }
  }, [isStringQuery, keys, query, targetWindow]);

  const [result, setResult] = useState(() => {
    if (isStringQuery) {
      return initResult.matches.value;
    }
    const multiResult = {};
    Object.keys(initResult).forEach(r => {
      multiResult[r] = initResult[r].value;
    });
    return multiResult;
  });

  useEffect(() => {
    const listeners = [];

    const listener = (matchKey, matchs) => {
      setResult(pre => ({...pre, [matchKey]: matchs}));
    };

    Object.keys(initResult).forEach(key => {
      const mq = initResult[key].mq;
      const elemListener = () => listener(key, mq.matches);
      mq.addEventListener('change', elemListener);
      listeners.push({mq: mq, listener: elemListener});
    });

    return () => listeners.forEach(
        elem => elem.mq.removeEventListener('change', elem.listener));
  }, [initResult, isStringQuery, keys, query, targetWindow]);

  return result;
};
export default useMediaQuery;