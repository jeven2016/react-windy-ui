import React from 'react';
import {Button, Popover} from 'react-windy-ui';

const createPopover = (text, position, activeBy) => {
  const body = <span>
    I wanna show you what the popover component looks like and then you
    can consider if you can rely on it to represent a good page for your customers.
  </span>;
  return <Popover body={body}
                  activeBy={'hover'}
                  position={position}
                  hasBorder={true}
                  hasBox={false}>
    <Button hasMinWidth={false} color="primary" outline
            style={{
              margin: '.5rem',
              fontSize: '.8rem',
              width: '2rem',
              height: '2rem',
            }}>
      {text}
    </Button>
  </Popover>;
};

export default function Pop3() {

  return <>
    <div>
      <table>
        <tbody>
        <tr>
          <td/>
          <td>
            {createPopover('TL', 'topLeft', 'hover')}
            {createPopover('T', 'top', 'hover')}
            {createPopover('TR', 'topRight', 'hover')}
          </td>
          <td/>
        </tr>
        <tr>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createPopover('LT', 'leftTop', 'hover')}
              {createPopover('L', 'left', 'hover')}
              {createPopover('LB', 'leftBottom', 'hover')}
            </div>
          </td>
          <td/>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createPopover('RT', 'rightTop', 'hover')}
              {createPopover('R', 'right', 'hover')}
              {createPopover('RB', 'rightBottom', 'hover')}
            </div>
          </td>
        </tr>
        <tr>
          <td/>
          <td>
            {createPopover('BL', 'bottomLeft', 'hover')}
            {createPopover('B', 'bottom', 'hover')}
            {createPopover('BR', 'bottomRight', 'hover')}
          </td>
          <td/>
        </tr>
        </tbody>
      </table>
    </div>
  </>;

}