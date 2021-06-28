import React from 'react';
import {Affix, Button} from 'react-windy-ui';
import DocFrame, {FrameContextConsumer} from "../../../utils/DocFrame";

export default function Affix3() {

  return <>
    <DocFrame height='200px'>
      <FrameContextConsumer>
        {
          ({document, window: iframeWindow}) => <>
            <Button color="blue">Button</Button>
            <div style={{height: '400px'}}>

            </div>
            <Affix bottom={10} targetWindow={iframeWindow}>
              <Button color="blue">Bottom 10px</Button>
            </Affix>
          </>
        }
      </FrameContextConsumer>
    </DocFrame>

  </>;
}