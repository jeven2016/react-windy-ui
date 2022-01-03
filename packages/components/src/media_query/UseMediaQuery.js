import React, { useEffect, useMemo, useState } from 'react';
import { isString, validate } from '../Utils';

/**
 * The definition of responsive layout
 */
const ResponsiveDefinition = {
  xs: {
    max: '575px'
  },
  sm: {
    min: '576px',
    max: '767px'
  },
  md: {
    min: '768px',
    max: '991px'
  },
  lg: {
    min: '992px',
    max: '1199px'
  },
  xg: {
    min: '1200px'
  }
};

export const Responsive = {
  xs: `(max-width: ${ResponsiveDefinition.xs.max})`,
  sm: {
    min: `(min-width: ${ResponsiveDefinition.sm.min})`,
    max: `(max-width: ${ResponsiveDefinition.sm.max})`,
    exact: `(min-width: ${ResponsiveDefinition.sm.min}) and (max-width: ${ResponsiveDefinition.sm.max})`
  },
  md: {
    min: `(min-width: ${ResponsiveDefinition.md.min})`,
    max: `(max-width: ${ResponsiveDefinition.md.max})`,
    exact: `(min-width: ${ResponsiveDefinition.md.min}) and (max-width: ${ResponsiveDefinition.md.max})`
  },
  lg: {
    min: `(min-width: ${ResponsiveDefinition.lg.min})`,
    max: `(max-width: ${ResponsiveDefinition.lg.max})`,
    exact: `(min-width: ${ResponsiveDefinition.lg.min}) and (max-width: ${ResponsiveDefinition.lg.max})`
  },
  xg: {
    min: `(min-width: ${ResponsiveDefinition.xg.min})`,
    max: `(max-width: ${ResponsiveDefinition.xg.max})`,
    exact: `(min-width: ${ResponsiveDefinition.xg.min}) and (max-width: ${ResponsiveDefinition.xg.max})`
  }
};

/**
 * Use media query hook
 * @param query String | {query: String}, caller should memorized the query object by useMemo() if the query is an object,
 *        then the listener won't be recreated frequently
 * @param targetWindow by default, it means the window
 * @return string if query is string otherwise an object with same keys
 *
 * Sample:
 *  1. query object
 *  const query = useMemo(() => ({sm: mediaQuery}), [mediaQuery]);
 *  const {sm: smallWindow} = useMediaQuery(query, null,
 *        mediaQueryWindow);
 *
 *   2. query string
 *   const {matches: smallWindow} = useMediaQuery(string);
 */

const useMediaQuery = (query, targetWindow = window) => {
  /*{
    small: "(max-width: 599px)",
    medium: "(min-width: 600px) and (max-width: 1199px)",
    large: "(min-width: 1200px)"
  }*/
  const isStringQuery = isString(query);
  validate(isStringQuery || typeof query == 'object', "the type of query isn't string or object");

  const initResult = useMemo(() => {
    const keys = !isStringQuery ? Object.keys(query) : [];
    if (isStringQuery) {
      const strMq = targetWindow.matchMedia(query);
      return {
        matches: { value: strMq.matches, mq: strMq }
      };
    } else {
      const matchObj = {};
      keys.forEach((key) => {
        const mq = targetWindow.matchMedia(query[key]);
        matchObj[key] = { value: mq.matches, mq: mq };
      });
      return matchObj;
    }
  }, [isStringQuery, query, targetWindow]);

  const [result, setResult] = useState(() => {
    if (isStringQuery) {
      return { matches: initResult.matches.value };
    }
    const multiResult = {};
    Object.keys(initResult).forEach((r) => {
      multiResult[r] = initResult[r].value;
    });
    return multiResult;
  });

  useEffect(() => {
    const listeners = [];
    const listener = (matchKey, matchs) => {
      setResult((pre) => ({ ...pre, [matchKey]: matchs }));
    };

    Object.keys(initResult).forEach((key) => {
      const mq = initResult[key].mq;
      const elemListener = () => listener(key, mq.matches);
      mq.addListener(elemListener);
      listeners.push({ mq: mq, listener: elemListener });
    });

    return () => listeners.forEach((elem) => elem.mq.removeListener(elem.listener));
  }, [initResult, isStringQuery, query, targetWindow]);

  return result;
};
export default useMediaQuery;
