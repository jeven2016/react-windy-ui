import React, { useState } from 'react';
import { Collapse, Toggle } from 'react-windy-ui';

export default function Collapse4() {
  const [accordion, setAccordion] = useState(true);
  const [bg, setBg] = useState(true);
  const [box, setBox] = useState(false);
  const [border, setBorder] = useState(false);
  const [leftIcon, setLeftIcon] = useState('left');

  const comp = (
    <>
      <div className="doc doc-row">
        <Toggle defaultActive onChange={(active) => setAccordion(active)} label="Accordion" />
      </div>
      <div className="doc doc-row">
        <Toggle defaultActive onChange={(active) => setBg(active)} label="Background" />
      </div>
      <div className="doc doc-row">
        <Toggle onChange={(active) => setBox(active)} label="Box Shadow" />
      </div>
      <div className="doc doc-row">
        <Toggle onChange={(active) => setBorder(active)} label="Border" />
      </div>
      <div className="doc doc-row">
        <Toggle onChange={(active) => setLeftIcon(active ? 'right' : 'left')} label="Right Icon" />
      </div>

      <Collapse accordion={accordion} hasBox={box} hasBorder={border} iconPosition={leftIcon}>
        <Collapse.Item header="Header1" hasBackground={bg} value={1}>
          <div style={{ padding: '1rem' }}>
            content
            <br />
            ......
            <br />
          </div>
        </Collapse.Item>
        <Collapse.Item header="Header2" hasBackground={bg} value={2}>
          <div style={{ padding: '1rem' }}>
            content
            <br />
            ......
            <br />
          </div>
        </Collapse.Item>
        <Collapse.Item header="Header3" hasBackground={bg} value={3}>
          <div style={{ padding: '1rem' }}>
            content
            <br />
            ......
            <br />
          </div>
        </Collapse.Item>
      </Collapse>
    </>
  );
  return comp;
}
