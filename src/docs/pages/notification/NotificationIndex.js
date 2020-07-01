import React from 'react';
import DocPage from '../../utils/DocPage';
import Notification1 from './samples/Notification1';
import Notification2 from './samples/Notification2';
import Notification3 from './samples/Notification3';
import Notification4 from './samples/Notification4';
import Notification5 from './samples/Notification5';

/**
 * It maps the text blocks in Markdown file
 */
const componentMapping = {
  Notification1: <Notification1/>,
  Notification2: <Notification2/>,
  Notification3: <Notification3/>,
  Notification4: <Notification4/>,
  Notification5: <Notification5/>,
};

export default function NotificationIndex(props) {
  return <DocPage
      importFunc={() => import('./doc.md')}
      componentMapping={componentMapping}
  />;
}