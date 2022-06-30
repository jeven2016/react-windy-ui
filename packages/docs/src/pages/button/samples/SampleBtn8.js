import React from 'react';
import { Button } from 'react-windy-ui';

const SampleBtn8 = () => {
  return (
    <>
      <div className="doc doc-row">
        <Button outline hasMinWidth>
          gray
        </Button>
        <Button color="black" outline hasMinWidth>
          black
        </Button>
        <Button color="brown" outline hasMinWidth>
          brown
        </Button>
        <Button color="pink" outline hasMinWidth>
          pink
        </Button>
        <Button color="purple" outline hasMinWidth>
          purple
        </Button>
        <Button color="violet" outline hasMinWidth>
          violet
        </Button>
      </div>
      <div className="doc doc-row">
        <Button color="blue" outline hasMinWidth>
          blue
        </Button>
        <Button color="teal" outline hasMinWidth>
          teal
        </Button>
        <Button color="green" outline hasMinWidth>
          green
        </Button>
        <Button color="yellow" outline hasMinWidth>
          yellow
        </Button>
        <Button color="orange" outline hasMinWidth>
          orange
        </Button>
        <Button color="red" outline hasMinWidth>
          red
        </Button>
      </div>
    </>
  );
};

export default SampleBtn8;
