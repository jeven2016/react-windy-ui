import React, { useContext, useRef } from 'react';
import clsx from 'clsx';
import { TabsContext } from './TabsCommon';
import { isNil, nonNil, preventEvent } from '../Utils';
import PropTypes from 'prop-types';
import Ripple from '../common/Ripple';
import { IconClear } from '../icon';

const TabItem = React.forwardRef((props, ref) => {
  const rippleRef = useRef(null);

  //bind ripple related event listeners
  const updatedProps = Ripple.useRippleEvent({
    rippleRef,
    rootProps: props,
    hasRipple: props.hasRipple
  });

  const {
    className = 'tab-item',
    extraClassName,
    disabled,
    children,
    value,
    removable,
    hasRipple,
    ...otherProps
  } = updatedProps;

  const context = useContext(TabsContext);
  const isActive = !isNil(value) && value === context.active;
  const clsName = clsx(extraClassName, className, { active: isActive, disabled: disabled });

  const deleteIconClsName = clsx('item-icon', { disabled: disabled });

  const showRipple = nonNil(hasRipple) ? hasRipple : context.hasRipple;

  const remove = (e) => {
    preventEvent(e);
    if (disabled) {
      return;
    }
    context.onRemove && context.onRemove(value);
  };

  const isRemovable = isNil(removable) ? context.removable : removable;

  return (
    <div
      className={clsName}
      ref={ref}
      onClick={() => !disabled && context.change(value)}
      {...otherProps}>
      <div className="item-label">{children}</div>
      {isRemovable ? (
        <div className={deleteIconClsName} onClick={remove}>
          <IconClear size="small" />
        </div>
      ) : null}
      {showRipple && <Ripple ref={rippleRef} color={context.rippleColor} />}
    </div>
  );
});

TabItem.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  removable: PropTypes.bool,
  hasRipple: PropTypes.bool
};

export default TabItem;
