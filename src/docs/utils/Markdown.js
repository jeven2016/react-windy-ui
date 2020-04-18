import React from 'react';
import ReactMarkdown from 'react-markdown';
import Mk from '../my.md';

export default function Markdown(component, language = 'zh') {
  return <ReactMarkdown source={Mk}/>;

}