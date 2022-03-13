import React, { useContext, useMemo, useRef } from 'react';
import CollapsePanel from './CollapsePanel';
import Card from '../card/Card';
import { convertToArray, isNil, nonNil } from '../Utils';
import { CollapseContext } from '../common/Context';
import { IconArrowRight } from '../icon';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Ripple from '../common/Ripple';

const Item = React.forwardRef((props, ref) => {
  const ctx = useContext(CollapseContext);
  const currentActive = ctx.currentActive;
  const rippleRef = useRef(null);

  //bind ripple related event listeners
  const bind = Ripple.useRippleEvent({
    rippleRef,
    hasRipple: ctx.hasRipple
  });

  const {
    children,
    header,
    disabled,
    value,
    hasBackground = false,
    moreItems = [],
    ...otherProps
  } = props;

  const isDisabled = nonNil(disabled) ? disabled : ctx.disabled;

  const items = useMemo(() => {
    return convertToArray(moreItems);
  }, [moreItems]);

  const isCollapsed = useMemo(() => {
    if (!isNil(currentActive) && !isNil(value)) {
      return !currentActive.includes(value);
    }
    return true;
  }, [value, currentActive]);

  const clickHeader = (e) => {
    if (isDisabled || isNil(value)) {
      return;
    }
    ctx.clickItem(value, !isCollapsed, e);
  };

  const innerClsName = clsx('inner', {
    'left-icon-column': ctx.iconPosition === 'left',
    'right-icon-column': ctx.iconPosition === 'right',
    disabled: isDisabled
  });

  let iconContent = null;
  if (ctx.hasCollapseIcon) {
    const icon = isNil(ctx.collapseIcon) ? <IconArrowRight /> : ctx.collapseIcon;

    const contentClsName = clsx('icon-column', {
      disabled: isDisabled,
      expand: !isCollapsed
    });
    iconContent = <div className={contentClsName}>{icon}</div>;
  }

  const disabledClsName = isDisabled ? 'disabled' : '';
  return (
    <>
      <Card block {...otherProps} ref={ref} hasBorder={ctx.hasBorder} hasBox={false}>
        <Card.Header
          extraClassName={`collapse-header ${disabledClsName} ${isCollapsed ? 'collapsed' : ''}`}
          hasBackground={hasBackground}
          onClick={clickHeader}
          style={{ position: 'relative' }}
          {...bind}
        >
          <div className={`header-row`}>
            <div className={innerClsName}>
              {iconContent}
              <div className={`header-info ${disabledClsName}`}>{header}</div>
            </div>
            {items.map((item, index) => (
              <div key={`more-${index}`} className={`header-more`}>
                {item}
              </div>
            ))}
          </div>
          {ctx.hasRipple && !isDisabled && (
            <Ripple ref={rippleRef} center={false} color={ctx.rippleColor} />
          )}
        </Card.Header>
        <CollapsePanel value={value} collapse={isCollapsed}>
          {children}
        </CollapsePanel>
      </Card>
    </>
  );
});

Item.propTypes = {
  children: PropTypes.node,
  header: PropTypes.node,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  hasBackground: PropTypes.bool,
  moreItems: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

export default Item;
