import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from 'react-windy-ui';
import ReactMarkdown from "react-markdown";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Mk from "./my.md";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { jsx, javascript, sass, scss } from "react-syntax-highlighter/dist/esm/languages/prism";


function App() {
  SyntaxHighlighter.registerLanguage("jsx", jsx);
  SyntaxHighlighter.registerLanguage("javascript", javascript);
  var b = (function() {
    return "./your.md"
  });
  var url=b();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button onClick={()=> asyncLoad(import(`${url}`))}>hello</Button>
        {/*<Button onClick={()=> req(url)}>hello</Button>*/}
        <SyntaxHighlighter language="javascript" style={dark}>
          {`
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            Learn React
          </a>
          `}
        </SyntaxHighlighter>
        <ReactMarkdown source={Mk}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const asyncLoad=(promise)=>{
  return promise.then(()=>{
    console.log("ok.....");
  }).catch((e)=>{
    console.log("error....");
    throw e;
  });
}

export default App;
