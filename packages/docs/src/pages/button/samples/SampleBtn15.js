import React from 'react';
import { Button } from 'react-windy-ui';

const SampleBtn15 = () => {
  return (
    <>
      <div className="doc doc-row">
        <Button color="black" outline initOutlineColor hasMinWidth>
          black
        </Button>
        <Button color="brown" outline initOutlineColor hasMinWidth>
          brown
        </Button>
        <Button color="pink" outline initOutlineColor hasMinWidth>
          pink
        </Button>
        <Button color="purple" outline initOutlineColor hasMinWidth>
          purple
        </Button>
        <Button color="violet" outline initOutlineColor hasMinWidth>
          violet
        </Button>
        <Button color="blue" outline initOutlineColor hasMinWidth>
          blue
        </Button>
      </div>
      <div className="doc doc-row">
        <Button color="teal" outline initOutlineColor hasMinWidth>
          teal
        </Button>
        <Button color="green" outline initOutlineColor hasMinWidth>
          green
        </Button>
        <Button color="yellow" outline initOutlineColor hasMinWidth>
          yellow
        </Button>
        <Button color="orange" outline initOutlineColor hasMinWidth>
          orange
        </Button>
        <Button color="red" outline initOutlineColor hasMinWidth>
          red
        </Button>
      </div>
    </>
  );
};

export default SampleBtn15;
