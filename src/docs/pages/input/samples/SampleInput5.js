import React from 'react';
import {
  Button,
  Checkbox,
  IconSearch,
  Input,
  InputGroup,
  Loader
} from 'react-windy-ui';

//todo
export default function SampleInput5(props) {
  return <>
    <div className="doc doc-row">
      <Input block placeholder="Username"/>
    </div>
    <div className="doc doc-row">
      <Input.IconInput block placeholder="Searching"
                       icon={<Loader size="small" active={true}/>}/>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
        <InputGroup.Label>
          <Checkbox/>
        </InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <InputGroup.Item autoScale={false}>
          <Button color="green">Search</Button>
        </InputGroup.Item>
        <Input placeholder="place......"/>
        <Input placeholder="next......"/>
        <InputGroup.Item autoScale={false}>
          <Button color="blue">Go</Button>
        </InputGroup.Item>
        <InputGroup.Label>
          Other
        </InputGroup.Label>
      </InputGroup>
    </div>
    <div className="doc doc-row">
      <InputGroup block>
        <Input.IconInput leftIcon placeholder="This is a input"
                         icon={<IconSearch/>}/>
        <InputGroup.Item autoScale={false}>
          <Button color="green">Search</Button>
        </InputGroup.Item>
        <Input placeholder="next......"/>
      </InputGroup>
    </div>
  </>;
}