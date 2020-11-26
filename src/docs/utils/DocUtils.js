import React from 'react';

export const QuickManuContext = React.createContext([]);

export const getEditUrl = (editUrl) => {
  return editUrl.replace('$BASE',
      'https://github.com/jeven2016/react-windy-ui/tree/0.4/src');
};