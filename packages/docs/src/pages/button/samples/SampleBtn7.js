import React from 'react';
import { Button } from 'react-windy-ui';

const SampleBtn7 = () => {
  //todo: should update the doc
  return (
    <>
      <div className="doc doc-row">
        <Button hasMinWidth>gray</Button>
        <Button color="black" hasMinWidth>
          black
        </Button>
        <Button color="brown" hasMinWidth>
          brown
        </Button>
        <Button color="pink" hasMinWidth>
          pink
        </Button>
        <Button color="purple" hasMinWidth>
          purple
        </Button>
        <Button color="violet" hasMinWidth>
          violet
        </Button>
      </div>
      <div className="doc doc-row">
        <Button color="blue" hasMinWidth>
          blue
        </Button>
        <Button color="teal" hasMinWidth>
          teal
        </Button>
        <Button color="green" hasMinWidth>
          green
        </Button>
        <Button color="yellow" hasMinWidth>
          yellow
        </Button>
        <Button color="orange" hasMinWidth>
          orange
        </Button>
        <Button color="red" hasMinWidth>
          red
        </Button>
      </div>
    </>
  );
};

export default SampleBtn7;
