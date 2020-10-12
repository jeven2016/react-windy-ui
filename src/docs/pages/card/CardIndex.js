import React from 'react';
import DocPage from '../../utils/DocPage';
import Card1 from './samples/Card1';
import Card2 from './samples/Card2';
import Card3 from './samples/Card3';
import Card4 from './samples/Card4';
import Card5 from './samples/Card5';
import Card6 from './samples/Card6';
import Card7 from './samples/Card7';
import Card8 from './samples/Card8';
import Card9 from './samples/Card9';
import Card10 from './samples/Card10';
import Card11 from './samples/Card11';
import Card12 from './samples/Card12';
import Card13 from './samples/Card13';

const componentMapping = {
  Card1: <Card1/>,
  Card2: <Card2/>,
  Card3: <Card3/>,
  Card4: <Card4/>,
  Card5: <Card5/>,
  Card6: <Card6/>,
  Card7: <Card7/>,
  Card8: <Card8/>,
  Card9: <Card9/>,
  Card10: <Card10/>,
  Card11: <Card11/>,
  Card12: <Card12/>,
  Card13: <Card13/>,
};

export default function CardIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}