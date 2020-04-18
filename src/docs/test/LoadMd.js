import React, {useState, useRef, useEffect, useCallback} from 'react';
import {Input, Button, Card} from 'react-windy-ui';
import {useAsyncImport} from '../../components/src';

const yourMd = () => import('./your.md');
const myMd = () => import('../my.md');




export default function LoadMd() {
  const [value, setValue] = useState('');
  const moduleImporter = value === '0' ? yourMd : myMd;
  const [data, load] = useAsyncImport(moduleImporter);
  console.log('getddd=' + data);
  return <>
    <Input value={value} onChange={(e) => setValue(e.target.value)}/>
    <Button onClick={() => {
      load();
    }}>Load</Button>

    <Card>
      <Card.Header>
        Data
      </Card.Header>
      <Card.Body>
        {data}
      </Card.Body>
    </Card>
  </>;
}