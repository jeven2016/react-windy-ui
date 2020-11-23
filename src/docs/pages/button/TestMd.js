import React, {useEffect} from 'react';
import md from './button.md';
import {compiler} from 'markdown-to-jsx';
import {Button} from 'react-windy-ui';
import {PrismLight as SyntaxHighlighter} from 'react-syntax-highlighter';
import {okaidia as sty} from 'react-syntax-highlighter/dist/esm/styles/prism';
import Basic_button from './samples/SampleBtn1';
import {jsx} from 'react-syntax-highlighter/dist/cjs/languages/prism';
import {Badge} from '../../../components/src';

export default function TestMd() {
  useEffect(() => {
    SyntaxHighlighter.registerLanguage('jsx', jsx);
    // SyntaxHighlighter.registerLanguage('javascript', javascript);
    // SyntaxHighlighter.registerLanguage('sass', sass);
    // SyntaxHighlighter.registerLanguage('scss', scss);
  }, []);

  return compiler(md, {
    overrides: {
      Button: Button,
      SampleBtn1: Basic_button,
      Badge,
    },
  });
}