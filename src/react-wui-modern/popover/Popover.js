import React, {useRef} from 'react';
import {isNil} from '../Utils';
import {Position} from '../common/Constants';
import PopupController from '../common/PopupController';
import Card from '../card';
import Divider from '../divider';
import clsx from 'clsx';
import {validateOneChild} from '../common/Validators';

const Popover = React.forwardRef((props, ref) => {
  const popRef = ref;
  const {
    className = 'popover',
    extraClassName,
    header,
    body,
    position,
    children,
    bodyOffset = '0.6rem',
    ...otherProps
  } = props;

  validateOneChild(props);

  let positionClassName = `${Position[position]} popover-arrow`;
  let clsName = clsx(extraClassName, className);

  const updateChildren = (chd) => {
    const popupBody = <div className={clsName}
                           ref={ref}>
      <div className={positionClassName}/>
      <Card>
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

    return {body: popupBody, ctrl: children};
  };

  return <PopupController
      ref={popRef}
      position={position}
      bodyOffset={bodyOffset}
      handleChildren={updateChildren}
      setChildDisabled={false}
      // margin={5}
      {...otherProps}>
    {children}
  </PopupController>;

});

export default Popover;