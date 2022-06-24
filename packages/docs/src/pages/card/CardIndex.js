import React from 'react';
import DocPage2 from '../../utils/DocPage2';

const requireMd = require.context('!raw-loader!./md', false, /.md$/);
const requireCode = require.context('!raw-loader!./samples', false, /.js$/);
const requireJs = require.context('./samples', false, /.js$/);

export default function CardIndex() {
  return <DocPage2 requireMd={requireMd} requireJs={requireJs} requireCode={requireCode} />;
}
