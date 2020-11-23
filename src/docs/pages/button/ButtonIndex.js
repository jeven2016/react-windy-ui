import React from 'react';
import {loadMdFiles} from '../../utils/parseMd';

/*const componentMapping = {
  SampleBtn1: <Basic_button/>,
  SampleBtn2: <SampleBtn2/>,
  SampleBtn3: <SampleBtn3/>,
  SampleBtn4: <SampleBtn4/>,
  SampleBtn5: <SampleBtn5/>,
  SampleBtn6: <SampleBtn6/>,
  SampleBtn7: <SampleBtn7/>,
  SampleBtn8: <SampleBtn8/>,
  SampleBtn9: <SampleBtn9/>,
  SampleBtn10: <SampleBtn10/>,
  SampleBtn11: <SampleBtn11/>,
  SampleBtn12: <SampleBtn12/>,
  SampleBtn13: <SampleBtn13/>,
  SampleBtn14: <SampleBtn14/>,
  SampleBtn15: <SampleBtn15/>,
  SampleBtn16: <SampleBtn16/>,
  SampleBtn17: <SampleBtn17/>,
  SampleBtn18: <SampleBtn18/>,
};*/

//todo: map all js and md files
// const requireRaw = require.context('!raw-loader!./', false, /doc.md$/);

// const requireRaw2 = require.context('./samples', true, /.js$/);
const requireMd = require.context('!raw-loader!./md', false, /.md$/);
const requireSamples = require.context('./samples', false, /.js$/);







export default function ButtonIndex() {

  /* requireRaw.keys().forEach((filename) => {
 console.log(requireRaw(filename));
   });*/

  /* let stop = false;
   let Comp;
   requireRaw2.keys().forEach((filename) => {
     console.log((filename));
     if (stop) {
       return;
     }
     Comp = requireRaw2(filename).default;
     // console.log(requireRaw2(filename));
     stop = true;
   });*/
  const config = loadMdFiles(requireMd, requireSamples);
  console.log(config)
  return <>
   {/* <DocPage2
        requireMd={requireMd}
        requireJs={requireSamples}
    />*/}

    {/*<DocPage
        importFunc={() => import('./doc.md')}
        componentMapping={componentMapping}
    />*/}
  </>;
}