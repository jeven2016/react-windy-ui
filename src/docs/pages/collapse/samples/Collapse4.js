import React, {useState} from 'react';
import {Collapse, Toggle} from 'react-windy-ui';

export default function Collapse4() {
  const [accordion, setAccordion] = useState(true);
  const [bg, setBg] = useState(true);
  const [box, setBox] = useState(false);
  const [border, setBorder] = useState(false);
  const [leftIcon, setLeftIcon] = useState('left');

  const comp = <>
    <div className="doc doc-row">
      <Toggle defaultActive onChange={active => setAccordion(active)}
              content={{on: 'Accordion', off: 'Accordion'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle defaultActive onChange={active => setBg(active)}
              content={{on: 'Background', off: 'Background'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle onChange={active => setBox(active)}
              content={{on: 'Box Shadow', off: 'Box Shadow'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle onChange={active => setBorder(active)}
              content={{on: 'Border', off: 'Border'}}/>
    </div>
    <div className="doc doc-row">
      <Toggle onChange={active => setLeftIcon(active ? 'right' : 'left')}
              content={{on: 'Right Icon', off: 'Left Icon'}}/>
    </div>

    <Collapse accordion={accordion} hasBox={box} hasBorder={border}
              iconPosition={leftIcon}>
      <Collapse.Item header="Header1" hasBackground={bg} value={1}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header2" hasBackground={bg} value={2}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
      <Collapse.Item header="Header3" hasBackground={bg} value={3}>
        <div style={{padding: '1rem'}}>
          This is a panel....<br/>
          This is a panel....<br/>
        </div>
      </Collapse.Item>
    </Collapse>
  </>;
  return comp;
}