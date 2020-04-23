import React from 'react';
import useLazyImport from '../../components/src/common/UseLazyImport';
// import ReactMarkdown from 'react-markdown/with-html';
import ReactMarkdown from 'react-markdown';

const MarkdownWrapper = ({importFunc}) => {
  const [data] = useLazyImport(importFunc, true);
  return <ReactMarkdown source={data} escapeHtml={false}/>;
};

const markdown = (props) => {
  if (props.hasOwnProperty('text')) {
    //parse the html code and don't show it as simple text
    return () => <ReactMarkdown source={props.text} escapeHtml={false}/>;
  }
  return () => <MarkdownWrapper importFunc={props.importFunc}/>;
};

export default markdown;