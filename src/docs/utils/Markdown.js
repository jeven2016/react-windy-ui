import React from 'react';
import ReactMarkdown from 'react-markdown';
import useLazyImport from '../../components/src/common/UseLazyImport';

const MarkdownWrapper = ({importFunc}) => {
  const [data] = useLazyImport(importFunc, true);
  return <ReactMarkdown source={data}/>;
};

const markdown = ({importFunc, text}) => {
  return () => text ? <ReactMarkdown source={text}/>
      : <MarkdownWrapper importFunc={importFunc}/>;
};

export default markdown;