import React from 'react';
import {Button, Tooltip} from 'react-windy-ui';

const createTooltip = (text, position) => {
  const body = <div style={{display: 'flex', width: '250px'}}>
    I wanna show you what the tooltip component looks like and then you
    can consider if you can rely on it to represent a good page for your
    customers.
  </div>;
  return <Tooltip body={body} position={position}>
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
            {createTooltip('TL', 'topLeft')}
            {createTooltip('T', 'top')}
            {createTooltip('TR', 'topRight')}
          </td>
          <td/>
        </tr>
        <tr>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createTooltip('LT', 'leftTop')}
              {createTooltip('L', 'left')}
              {createTooltip('LB', 'leftBottom')}
            </div>
          </td>
          <td/>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createTooltip('RT', 'rightTop')}
              {createTooltip('R', 'right')}
              {createTooltip('RB', 'rightBottom')}
            </div>
          </td>
        </tr>
        <tr>
          <td/>
          <td>
            {createTooltip('BL', 'bottomLeft')}
            {createTooltip('B', 'bottom')}
            {createTooltip('BR', 'bottomRight')}
          </td>
          <td/>
        </tr>
        </tbody>
      </table>
    </div>
  </>;

}