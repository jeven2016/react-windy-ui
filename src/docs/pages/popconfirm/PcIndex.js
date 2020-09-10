import React from 'react';
import DocPage from '../../utils/DocPage';
import Pc1 from "./Pc1";
import Pc2 from "./Pc2";
import Pc3 from "./Pc3";
import Pc4 from "./Pc4";
import Pc5 from "./Pc5";

/**
 * It maps the text blocks in Markdown file
 */
const componentMapping = {
  Pc1: <Pc1/>,
  Pc2: <Pc2/>,
  Pc3: <Pc3/>,
  Pc4: <Pc4/>,
  Pc5: <Pc5/>,
};

export default function ModalIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}