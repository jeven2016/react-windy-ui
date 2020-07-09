import React from 'react';
import DocPage from '../../utils/DocPage';
import Modal1 from './samples/Modal1';
import Modal2 from './samples/Modal2';
import Modal3 from './samples/Modal3';
import Modal4 from './samples/Modal4';
import Modal5 from './samples/Modal5';
import Modal7 from './samples/Modal7';
import Modal6 from './samples/Modal6';
import Modal8 from './samples/Modal8';
import Modal9 from './samples/Modal9';
import Modal10 from './samples/Modal10';

/**
 * It maps the text blocks in Markdown file
 */
const componentMapping = {
  Modal1: <Modal1/>,
  Modal2: <Modal2/>,
  Modal3: <Modal3/>,
  Modal4: <Modal4/>,
  Modal5: <Modal5/>,
  Modal6: <Modal6/>,
  Modal7: <Modal7/>,
  Modal8: <Modal8/>,
  Modal9: <Modal9/>,
  Modal10: <Modal10/>,
};

export default function ModalIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}