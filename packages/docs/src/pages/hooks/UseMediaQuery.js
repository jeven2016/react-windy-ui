import React from 'react';
import { useMediaQuery, Responsive } from 'react-windy-ui';

export default function UseMediaQuery() {
  const matches = useMediaQuery(Responsive.sm.max);

  return <>hello : {JSON.stringify(matches)}</>;
}
