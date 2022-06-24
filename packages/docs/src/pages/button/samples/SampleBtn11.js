import React from 'react';
import { Button, ButtonGroup, IconList } from 'react-windy-ui';

const SampleBtn11 = () => {
  return (
    <>
      <div className="doc doc-row">
        <ButtonGroup>
          <Button color="brown">brown</Button>
          <Button color="pink">pink</Button>
          <Button color="purple">purple</Button>
          <Button color="violet">violet</Button>
        </ButtonGroup>
      </div>

      <div className="doc doc-row">
        <ButtonGroup direction="vertical">
          <Button color="blue">blue</Button>
          <Button color="green">green</Button>
          <Button color="orange">orange</Button>
        </ButtonGroup>
      </div>

      <div className="doc doc-row">
        <ButtonGroup block>
          <Button outline color="blue">
            blue
          </Button>
          <Button outline color="green">
            green
          </Button>
          <Button outline color="orange">
            orange
          </Button>
        </ButtonGroup>
      </div>

      <div className="doc doc-row">
        <ButtonGroup>
          <Button color="secondary" hasBox={false} leftIcon={<IconList />} />
          <Button color="blue">This is my list</Button>
        </ButtonGroup>
      </div>
    </>
  );
};

export default SampleBtn11;
