import React, {useState} from "react";
import DocFrame, {FrameContextConsumer} from "../../../utils/DocFrame";
import {Container} from "react-windy-ui";

export default function Container1() {
  const [smallWindow] = useState(false);
  const width = smallWindow ? '500px' : '100%';
  return <>
    {/*the doc frame is an iframe and only for demo*/}
    <DocFrame width={width} height='270px' hasBox={true}>
      <FrameContextConsumer>
        {
          //represent the container in a individual iframe
          () => <Container autoAdjust={true} style={{backgroundColor: 'rgb(207, 232, 252)'}}/>
        }
      </FrameContextConsumer>
    </DocFrame>
  </>;
};