import React, {useState} from "react";
import DocFrame, {FrameContextConsumer} from "../../../utils/DocFrame";
import {Container, Radio, RadioGroup, Space, Toggle} from "react-windy-ui";


export default function Container1() {
  const [smallWindow, setSmallWindow] = useState(false);
  const [size, setSize] = useState('sm');

  const width = smallWindow ? '500px' : '100%';
  return <>
    <div className="doc doc-row">
      <Space gutter={{x: 20}}>
        <Toggle active={smallWindow}
                label='Small Window'
                onChange={(val) => setSmallWindow(val)}/>

        <span><strong>Size:</strong></span>
        <RadioGroup value={size} onChange={(val) => setSize(val)}>
          <Radio value="sm">sm</Radio>
          <Radio value="md">md</Radio>
          <Radio value="lg">lg</Radio>
          <Radio value="xg">xg</Radio>
        </RadioGroup>
      </Space>
    </div>

    {/*the doc frame is an iframe and only for demo*/}
    <DocFrame width={width} height='270px' hasBox={true}>
      <FrameContextConsumer>
        {
          //represent the container in a individual iframe
          () => <Container size={size} style={{backgroundColor: 'rgb(207, 232, 252)'}}/>
        }
      </FrameContextConsumer>
    </DocFrame>
  </>;
};