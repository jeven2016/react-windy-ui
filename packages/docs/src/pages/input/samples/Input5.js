import React from 'react';
import {Button, Checkbox, IconSearch, Input, InputGroup, Select} from 'react-windy-ui';

export default function Input5() {
  return <>
    <div className="doc doc-row">
      <InputGroup>
        <InputGroup.Label>$</InputGroup.Label>
        <Input placeholder="money......"/>
        <InputGroup.Label>
          <Checkbox/>
        </InputGroup.Label>
      </InputGroup>
    </div>

    <div className="doc doc-row">
      <InputGroup>
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
      <InputGroup>
        <Input.IconInput leftIcon placeholder="This is a input"
                         icon={<IconSearch/>}/>
        <InputGroup.Item autoScale={false}>
          <Button color="green">Search</Button>
        </InputGroup.Item>
        <InputGroup.Item autoScale={false}>
          <Select defaultValue="nj"
                  inputStyle={{width: '80px'}}
                  onSelect={(value) => console.log(value)}>
            <Select.Option value="bj">
              City
            </Select.Option>
            <Select.Option value="nj">Nanjing</Select.Option>
            <Select.Option value="sh">Shanghai</Select.Option>
            <Select.Option value="sz">Suzhou</Select.Option>
          </Select>
        </InputGroup.Item>
      </InputGroup>
    </div>
  </>;
}