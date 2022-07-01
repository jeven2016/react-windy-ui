import React from "react";
import { Box, Button, Input } from "react-windy-ui";

const boxStyle = {
  background: "#eee"
};
export default function Box1() {
  return (
    <>
      <div>
        <Box block style={{ ...boxStyle, width: "50%" }}
             left={<Button>Left</Button>}
             right={<Button>Right</Button>} />
        <Box
          block
          style={boxStyle}
          left={<Button>Left</Button>}
          right={<Button>Right</Button>}
          center={<Input style={{ margin: "0 .5rem" }} />}
        />
      </div>
    </>
  );
}
