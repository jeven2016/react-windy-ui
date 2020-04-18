import React from 'react';
import ReactMarkdown from 'react-markdown';
import {AsyncComponent} from 'react-windy-ui';


export default function Markdown({promiseGenerator, language = 'zh', component}) {
  if(component){
    return <ReactMarkdown source={component}/>;
  }

  if(importPromise){
    return <ReactMarkdown source={AsyncComponent(promiseGenerator)}/>;
  }

}