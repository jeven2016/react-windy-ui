import React from 'react';
import {Affix, Button} from 'react-windy-ui';
import DocFrame, {FrameContextConsumer} from "../../../utils/DocFrame";
import {Space} from "react-windy-ui";

export default function Affix2() {

  return <>
    <DocFrame height='200px'>
      <FrameContextConsumer>
        {
          ({document, window: iframeWindow}) => <>
            <Space direction="vertical" gutter={{y:20}}>
              <Affix top={0} targetWindow={iframeWindow}>
                <Button color="blue">Top 10px</Button>
              </Affix>
              <Button color="blue">Button</Button>
            </Space>
            <div style={{height: '400px'}}>

            </div>
          </>
        }
      </FrameContextConsumer>
    </DocFrame>

  </>;
}