import React from 'react';
import DocPage from '../../utils/DocPage';
import Notification1 from './samples/Notification1';
import Notification2 from './samples/Notification2';
import Notification3 from './samples/Notification3';
import Notification4 from './samples/Notification4';
import Notification5 from './samples/Notification5';
import Notification6 from './samples/Notification6';
import Notification7 from './samples/Notification7';
import Notification8 from './samples/Notification8';
import Notification9 from './samples/Notification9';

/**
 * It maps the text blocks in Markdown file
 */
const componentMapping = {
  Notification1: <Notification1/>,
  Notification2: <Notification2/>,
  Notification3: <Notification3/>,
  Notification4: <Notification4/>,
  Notification5: <Notification5/>,
  Notification6: <Notification6/>,
  Notification7: <Notification7/>,
  Notification8: <Notification8/>,
  Notification9: <Notification9/>,
};

export default function NotificationIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}