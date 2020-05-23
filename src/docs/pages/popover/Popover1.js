import React from 'react';
import {Button, Popover} from 'react-windy-ui';

export default function Popover1() {
  const header = 'Windy Nights';
  const body = <>

    <div>Robert Louis Stevenson - 1850-1894</div>

    <div> Whenever the moon and stars are set,</div>
    <div>Whenever the wind is high,</div>
    <div>All night long in the dark and wet,</div>
    <div>A man goes riding by.</div>
    <div>Late in the night when the fires are out,</div>
    <div> Why does he gallop and gallop about?</div>

    <div> Whenever the trees are crying aloud,</div>
    <div> And ships are tossed at sea,</div>
    <div>By, on the highway, low and loud,</div>
    <div>By at the gallop goes he.</div>
    <div>By at the gallop he goes, and then</div>
    <div>By he comes back at the gallop again.</div>
  </>;
  return <>
    <Popover
        header={header}
        body={body}
        hasBorder={true}
        hasBox={false}>
      <Button outline={true} color="blue"
              onClick={() => console.log('click button')}>Top Left</Button>
    </Popover>

    <Popover activeBy="hover" position="top" header="Header"
             body={<span>This is a sample</span>}>
      <Button outline={true} color="blue"
              style={{marginLeft: '1rem'}}>Top</Button>
    </Popover>
  </>;

}