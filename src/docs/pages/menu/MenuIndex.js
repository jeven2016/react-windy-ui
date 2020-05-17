import React from 'react';
import DocPage from '../../utils/DocPage';
import Menu12 from './samples/Menu12';
import Menu1 from './samples/Menu1';
import Menu2 from './samples/Menu2';
import Menu3 from './samples/Menu3';
import Menu4 from './samples/Menu4';
import Menu5 from './samples/Menu5';
import Menu6 from './samples/Menu6';
import Menu7 from './samples/Menu7';
import Menu8 from './samples/Menu8';
import Menu9 from './samples/Menu9';
import Menu_open from './samples/Menu_open';
import TestReducer from './samples/TestReducer';
import Store, {Store2} from './samples/Store';
import Menu13 from './samples/Menu13';

/**
 * It maps the text blocks in Markdown file
 */
const markdownMapping = {
  Title: 'TITLE',
  Footer: 'FOOTER',

  Menu1: 'Menu1',
  Menu2: 'Menu2',
};

const componentMapping = {
  Menu12: <Menu12/>,
  Menu1: <Menu1/>,
  Menu2: <Menu2/>,
  Menu3: <Menu3/>,
  Menu4: <Menu4/>,
  Menu5: <Menu5/>,
  Menu6: <Menu6/>,
  Menu7: <Menu7/>,
  Menu8: <Menu8/>,
  Menu_open: <Menu_open/>,
  Menu9: <Menu9/>,
  Menu13: <Menu13/>,
  // Store: <Store/>,
  // Store2: <Store2/>,
};

export default function MenuIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
      mapping={markdownMapping}
  />;
}