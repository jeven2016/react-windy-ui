import React from 'react';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import Code from './Code';
import DemoDesc from './DemoDesc';
import Hcode from './Hcode';
import {Button, IconEdit, Blockquote} from 'react-windy-ui';

export const QuickManuContext = React.createContext([]);

export const getEditUrl = (editUrl) => {
  return editUrl.replace('$BASE',
      'https://github.com/jeven2016/react-windy-ui/tree/0.5.2/src');
};

export const hcodeMarkdownOptions = {
  overrides: {
    IconEdit: {component: IconEdit},
    faEdit: {component: faEdit},
    Button: {component: Button},
    Code: {component: Code},
    DemoDesc: {component: DemoDesc},
    Blockquote: {component: Blockquote, props: {hasBox: true}},
  },
};

//convert the default component to customized component
export const defaultMarkdownOptions = {
  overrides: {
    ...hcodeMarkdownOptions.overrides,
    Hcode: {component: Hcode},
  },
};
