import React from 'react';
import DocPage from '../../utils/DocPage';
import Menu1 from './samples/Menu1';
import Menu2 from './samples/Menu2';
import Menu3 from './samples/Menu3';
import Menu4 from './samples/Menu4';
import Menu5 from './samples/Menu5';
import Menu6 from './samples/Menu6';
import Menu8 from './samples/Menu8';
import Menu9 from './samples/Menu9';
import Menu12 from './samples/Menu12';
import Menu7 from './samples/Menu7';
import Menu10 from './samples/Menu10';
import Menu11 from './samples/Menu11';
import Menu13 from './samples/Menu13';
import Menu14 from './samples/Menu14';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  Menu1: 'Menu1',
  Menu2: 'Menu2',
  Menu3: 'Menu3',
  Menu4: 'Menu4',
  Menu5: 'Menu5',
  Menu6: 'Menu6',
  Menu7: 'Menu7',
  Menu8: 'Menu8',
  Menu9: 'Menu9',
  Menu10: 'Menu10',
  Menu11: 'Menu11',
  Menu12: 'Menu12',
  Menu13: 'Menu13',
  Menu14: 'Menu14',
};

const componentMapping = {
  // Menu12: <Menu12/>,
  Menu1: <Menu1/>,
  Menu2: <Menu2/>,
  Menu3: <Menu3/>,
  Menu4: <Menu4/>,
  Menu5: <Menu5/>,
  Menu6: <Menu6/>,
  Menu7: <Menu7/>,
  Menu8: <Menu8/>,
  Menu9: <Menu9/>,
  Menu10: <Menu10/>,
  Menu11: <Menu11/>,
  Menu12: <Menu12/>,
  Menu13: <Menu13/>,
  Menu14: <Menu14/>,
};

export default function MenuIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}