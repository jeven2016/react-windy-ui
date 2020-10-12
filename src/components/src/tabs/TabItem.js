import React, {useContext} from 'react';
import clsx from 'clsx';
import {TabsContext} from './TabsCommon';
import {isNil} from '../Utils';
import {preventEvent} from '../event';
import PropTypes from 'prop-types';

const TabItem = React.forwardRef((props, ref) => {
  const {
    className = 'tab-item',
    extraClassName,
    disabled,
    children,
    value,
    removable,
    ...otherProps
  } = props;
  const context = useContext(TabsContext);
  const isActive = !isNil(value) && value === context.active;
  const clsName = clsx(extraClassName, className,
      {active: isActive, disabled: disabled});

  const deleteIconClsName = clsx('item-icon', {disabled: disabled});

  const remove = (e) => {
    preventEvent(e);
    if (disabled) {
      return;
    }
    context.onRemove && context.onRemove(value);
  };

  const isRemovable = isNil(removable) ? context.removable : removable;

  return <div className={clsName}
              ref={ref}
              onClick={() => !disabled && context.change(value)}
              {...otherProps}>
    <div className="item-label">{children}</div>
    {
      isRemovable ? <div className={deleteIconClsName}
                         onClick={remove}>
        x
      </div> : null
    }
  </div>;
});

TabItem.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  removable: PropTypes.bool,
};

export default TabItem;