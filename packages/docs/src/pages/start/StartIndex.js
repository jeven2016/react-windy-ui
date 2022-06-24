import React from 'react';
import DocPage2 from '../../utils/DocPage2';

const requireMd = require.context('!raw-loader!./md', false, /.md$/);

export default function StartIndex() {
  return <DocPage2 requireMd={requireMd} />;
}
