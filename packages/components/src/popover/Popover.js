import React from 'react';
import { isNil } from '../Utils';
import { PopupPosition, PositionClass } from '../common/Constants';
import Card from '../card';
import Divider from '../divider';
import clsx from 'clsx';
import Popup from '../popup/Popup';
import * as PropTypes from 'prop-types';

const Popover = React.forwardRef((props, ref) => {
  const {
    className = 'popover',
    extraClassName,
    header,
    body,
    position = PopupPosition.bottom,
    children,
    hasArrow = true,
    hasBox = true,
    hasBorder = false,
    offset = 15,
    autoWidth = false,
    popupInstanceRef,
    ...otherProps
  } = props;
  let positionClassName = clsx('popover-arrow', `${PositionClass[position]}`, {
    'with-box': hasBox,
    'with-border': hasBorder
  });
  let clsName = clsx(extraClassName, className);

  const popupBody = (
    <div className={clsName} ref={ref}>
      {hasArrow && <div className={positionClassName} />}
      <Card hasBox={hasBox} hasBorder={hasBorder} hasWidth={!autoWidth}>
        {isNil(header) ? null : (
          <>
            <Card.Header>{header}</Card.Header>
            <Divider />
          </>
        )}
        <Card.Body>{body}</Card.Body>
      </Card>
    </div>
  );

  return (
    <Popup
      ref={popupInstanceRef} //todo: need to update doc
      offset={offset}
      position={position}
      autoClose={false}
      ctrlNode={children}
      body={popupBody}
      {...otherProps}
    />
  );
});

Popover.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  header: PropTypes.node,
  body: PropTypes.node,
  position: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasBox: PropTypes.bool,
  hasBorder: PropTypes.bool,
  offset: PropTypes.number
};

export default Popover;
