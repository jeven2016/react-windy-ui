import React, {useState} from 'react';
import {Select, Table, Toggle} from 'react-windy-ui';

export default function Table1() {
  const [type, setType] = useState('normal');
  const [hover, setHover] = useState(false);
  const [hasBorder, setBorder] = useState(true);
  const [hasBox, setBox] = useState(false);

  return <>
    <div className="doc doc-row">
      <Toggle active={hasBox} onChange={val => setBox(val)}
              label='Box Shadow'/>
    </div>
    <div className="doc doc-row">
      <Toggle active={hover} onChange={val => setHover(val)}
              label='Hover'/>
    </div>
    <div className="doc doc-row">
      <Toggle active={hasBorder} onChange={val => setBorder(val)}
              label='Border'/>
    </div>

    <div className="doc doc-row space">
      <span style={{fontWeight: '600'}}>Type:</span>
      <Select value={type} onSelect={value => setType(value)}>
        <Select.Option value="normal">normal</Select.Option>
        <Select.Option value="striped">striped</Select.Option>
        <Select.Option value="simple">simple</Select.Option>
      </Select>
    </div>

    <Table type={type} hover={hover} hasBorder={hasBorder} hasBox={hasBox}>
      <thead>
      <tr>
        <th>NO.</th>
        <th>Name</th>
        <th>Age</th>
        <th>Description</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>1</td>
        <td>Joe</td>
        <td>76</td>
        <td>Old Man</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Joe2</td>
        <td>76</td>
        <td>Old Man</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Joe3</td>
        <td>76</td>
        <td>Old Man</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Joe4</td>
        <td>76</td>
        <td>Old Man</td>
      </tr>
      </tbody>
    </Table>

  </>;
}