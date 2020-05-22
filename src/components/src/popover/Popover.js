import React from 'react';
import {isNil} from '../Utils';
import {PopupPosition, PositionClass} from '../common/Constants';
import Card from '../card';
import Divider from '../divider';
import clsx from 'clsx';
import Popup from '../popup/Popup';

const Popover = React.forwardRef((props, ref) => {
  const {
    className = 'popover',
    extraClassName,
    header,
    body,
    position = PopupPosition.bottom,
    children,
    hasBox = true,
    hasBorder = false,
    ...otherProps
  } = props;

  let positionClassName = clsx('popover-arrow', `${PositionClass[position]}`, {
    'with-box': hasBox,
  });
  let clsName = clsx(extraClassName, className);

  const popupBody = <div className={clsName}
                         ref={ref}>
    <div className={positionClassName}/>
    <Card hasBox={hasBox} hasBorder={hasBorder}>
      {
        isNil(header) ? null :
            <>
              <Card.Header>{header}</Card.Header>
              <Divider/>
            </>
      }
      <Card.Body>
        {body}
      </Card.Body>
    </Card>
  </div>;

  return <Popup
      position={position}
      autoClose={false}
      ctrlNode={children}
      body={popupBody}
      {...otherProps}
  />;

});

export default Popover;