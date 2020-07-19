import React from 'react';
import DocPage from '../../utils/DocPage';
import Navbar1 from './samples/Navbar1';
import Navbar2 from './samples/Navbar2';
import Navbar3 from './samples/Navbar3';
import Navbar4 from './samples/Navbar4';
import Navbar5 from './samples/Navbar5';
import Navbar6 from './samples/Navbar6';
import Navbar7 from './samples/Navbar7';
import Navbar8 from './samples/Navbar8';
import Navbar9 from './samples/Navbar9';
import md from './samples/test.md';
import Navbar10 from './samples/Navbar10';

/**
 * It maps the text blocks in Markdown file
 */
const componentMapping = {
  Navbar1: <Navbar1/>,
  Navbar2: <Navbar2/>,
  Navbar3: <Navbar3/>,
  Navbar4: <Navbar4/>,
  Navbar5: <Navbar5/>,
  Navbar6: <Navbar6/>,
  Navbar7: <Navbar7/>,
  Navbar8: <Navbar8/>,
  Navbar9: <Navbar9/>,
  // Navbar10: <Navbar10/>,
};

export default function NavbarIndex(props) {
  return <>
    <DocPage
        importFunc={() => import('./doc.md')}
        componentMapping={componentMapping}
    /></>;
}