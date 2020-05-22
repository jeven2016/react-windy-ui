import React from 'react';
import {Button, Dropdown} from 'react-windy-ui';

const DocCol = (props) => <div
    style={{marginRight: '1rem'}}>{props.children}</div>;

const DocRow = (props) => <div
    style={{
      display: 'inline-flex',
      marginTop: '.25rem',
    }}>{props.children}</div>;

const createDropdown = (text, position, activeBy) => {
  const title = <Button circle hasMinWidth={false} color="primary" outline
                        style={{margin: '1rem'}}>{text}</Button>;
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
      </table>
    </div>
  </>;

}