import React from 'react';
import {useLazyImport} from 'react-windy-ui';
import {compiler} from 'markdown-to-jsx';

const MarkdownWrapper = ({importFunc, markdownOptions}) => {
  const [data] = useLazyImport(importFunc, true);
  return () => compiler(data || '', markdownOptions);
};

const markdown = (props) => {
  if (props.hasOwnProperty('text')) {
    //parse the html code and don't show it as simple text
    return () => compiler(props.text || '', props.markdownOptions);
  }
  return () => <MarkdownWrapper importFunc={props.importFunc}
                                markdownOptions={props.markdownOptions}/>;
};

export default markdown;