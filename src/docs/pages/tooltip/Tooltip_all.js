import React from 'react';
import {Button, Tooltip} from 'react-windy-ui';

const createTooltip = (text, position, activeBy) => {
  const body = <span>
    I wanna show you what the popover component looks like and then you
    can consider where you can rely on it to represent a good page for your customers.
  </span>;
  return <Tooltip body={body}
                  activeBy={'hover'}
                  position={position}
                  hasBorder={true}
                  hasBox={false}>
    <Button hasMinWidth={false} color="primary" outline
            style={{margin: '1rem'}}>
      {text}
    </Button>
  </Tooltip>;
};

export default function Tooltip_all() {

  return <>
    <div>
      <table>
        <tbody>
        <tr>
          <td/>
          <td>
            {createTooltip('TL', 'topLeft', 'hover')}
            {createTooltip('T', 'top', 'hover')}
            {createTooltip('TR', 'topRight', 'hover')}
          </td>
          <td/>
        </tr>
        <tr>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createTooltip('LT', 'leftTop', 'hover')}
              {createTooltip('L', 'left', 'hover')}
              {createTooltip('LB', 'leftBottom', 'hover')}
            </div>
          </td>
          <td/>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createTooltip('RT', 'rightTop', 'hover')}
              {createTooltip('R', 'right', 'hover')}
              {createTooltip('RB', 'rightBottom', 'hover')}
            </div>
          </td>
        </tr>
        <tr>
          <td/>
          <td>
            {createTooltip('BL', 'bottomLeft', 'hover')}
            {createTooltip('B', 'bottom', 'hover')}
            {createTooltip('BR', 'bottomRight', 'hover')}
          </td>
          <td/>
        </tr>
        </tbody>
      </table>
    </div>
  </>;

}