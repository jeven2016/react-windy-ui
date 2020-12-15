import React from 'react';
import {Button, Dropdown, Tooltip} from 'react-windy-ui';

const createDropdown = (text, position, activeBy) => {
  let tooltipPosition;

  if (position.startsWith('left')) {
    tooltipPosition = position.replace('left', 'right');
  } else if (position.startsWith('right')) {
    tooltipPosition = position.replace('right', 'left');
  } else if (position.startsWith('bottom')) {
    tooltipPosition = position.replace('bottom', 'top');
  } else if (position.startsWith('top')) {
    tooltipPosition = position.replace('top', 'bottom');
  }

  const title = <Tooltip body={position} position={tooltipPosition}><Button
      color="primary" outline initOutlineColor
      style={{
        margin: '.5rem',
        fontSize: '.8rem',
        width: '2rem',
        height: '2rem',
      }}>{text}</Button></Tooltip>;

  return <Dropdown position={position}
                   title={title}
                   activeBy={activeBy}>
    <Dropdown.Menu type="primary">
      <Dropdown.Item onClick={() => console.log('click item1')}>
        Menu Item1
      </Dropdown.Item>
      <Dropdown.Item onClick={(e) => console.log('click item2')}>
        Menu Item2
      </Dropdown.Item>
      <Dropdown.Item onClick={(e) => console.log('click item3')}>
        Menu Item3
      </Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>;
};

export default function Dp5() {

  return <>
    <div>
      <table>
        <tbody>
        <tr>
          <td/>
          <td>
            {createDropdown('TL', 'topLeft', 'hover')}
            {createDropdown('T', 'top', 'hover')}
            {createDropdown('TR', 'topRight', 'hover')}
          </td>
          <td/>
        </tr>
        <tr>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createDropdown('LT', 'leftTop', 'hover')}
              {createDropdown('L', 'left', 'hover')}
              {createDropdown('LB', 'leftBottom', 'hover')}
            </div>
          </td>
          <td/>
          <td>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              {createDropdown('RT', 'rightTop', 'hover')}
              {createDropdown('R', 'right', 'hover')}
              {createDropdown('RB', 'rightBottom', 'hover')}
            </div>
          </td>
        </tr>
        <tr>
          <td/>
          <td>
            {createDropdown('BL', 'bottomLeft', 'hover')}
            {createDropdown('B', 'bottom', 'hover')}
            {createDropdown('BR', 'bottomRight', 'hover')}
          </td>
          <td/>
        </tr>
        </tbody>
      </table>
    </div>
  </>;

}