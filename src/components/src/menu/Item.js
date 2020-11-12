import React, {useContext, useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import {MenuContext} from '../common/Context';
import {includes, isNil} from '../Utils';
import {Action} from './MenuUtils';
import PropTypes from 'prop-types';
import {animated, useSpring} from 'react-spring';
import {preventEvent} from '../event';
import Element from '../common/Element';
import Tooltip from '../Tooltip';
import {MenuType} from '../common/Constants';

const Item = React.forwardRef((props, ref) => {
  const {
    className = 'menu-item',
    extraClassName,
    children,
    customizedChildren = false, //whether to show the customized children and ignore the children parameter
    disabled,
    id,
    equitable = false,
    align,
    hasBackground,
    hasBottomBar,
    icon,
    directChild = false,
    onClick,
    ...otherProps
  } = props;
  const ctx = useContext(MenuContext);
  const {attach, detach, getState} = ctx.store;
  const [active, setActive] = useState(null);
  const isActive = isNil(active) ? includes(getState().activeItemsList, id)
      : active;

  const show = !ctx.compact;
  const springConfig = useMemo(() => ({
    from: {opacity: 0, transform: 'scale(0)'},
    to: {opacity: show ? 1 : 0, transform: show ? 'scale(1)' : 'scale(0)'},
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
  }), [show]);
  const innerProps = useSpring(springConfig);

  useEffect(() => {
    if (isNil(id)) {
      return;
    }
    const listener = ({activeItemsList}) => {
      if (!disabled && !isNil(id)) {
        const nextActive = includes(activeItemsList, id);
        //to active
        if (nextActive && !isActive) {
          setActive(true);
        }

        //to deactive
        if (!nextActive && isActive) {
          setActive(false);
        }
      }
    };
    attach(listener);
    return () => detach(listener);
  }, [isActive, id, disabled, setActive, detach, attach]);

  const clickHandler = (e) => {
    if (disabled) {
      preventEvent(e);
      return;
    }

    if (!isNil(id) && ctx.selectable) {
      ctx.dispatch({type: Action.clickHeader, id, e});
    }

    onClick && onClick(e);
    ctx.onClickItem && ctx.onClickItem(id, e);
  };

  const clsName = clsx(extraClassName, className, {
    [ctx.type]: ctx.type,
    equitable: equitable,
    [align]: align,
    disabled: disabled,
    active: isActive,
    'with-bg': hasBackground,
    'with-bottom-bar': hasBottomBar,
    'left-bar': ctx.type === MenuType.primary && ctx.primaryBarPosition ===
        'left',
    'right-bar': ctx.type === MenuType.primary && ctx.primaryBarPosition ===
        'right',
  });

  const content = useMemo(() => {
    if (customizedChildren) {
      return children;
    }

    const iconCnt = icon ? <div className="item-icon">{icon}</div> : null;
    if (!directChild) {
      return <>
        {iconCnt}
        <div className="item-info">{children}</div>
      </>;
    }
    return !show ? iconCnt : <>
      {iconCnt}
      <animated.div className="item-info"
                    style={innerProps}>{children}</animated.div>
    </>;
  }, [customizedChildren, icon, directChild, show, innerProps, children]);

  const renderCnt = <div ref={ref} className={clsName} {...otherProps}
                         onClick={clickHandler}>
    {content}
  </div>;

  if (!show && directChild) {
    return <Tooltip body={children} position="right">
      {renderCnt}
    </Tooltip>;
  }

  return renderCnt;
});

Item.Left = React.forwardRef((props, ref) =>
    <Element nativeType="span" className="left"
             ref={ref} {...props}/>,
);
Item.Center = React.forwardRef((props, ref) =>
    <Element nativeType="span" className="item-info"
             ref={ref} {...props}/>,
);
Item.Right = React.forwardRef((props, ref) =>
    <Element nativeType="span" className="right"
             ref={ref} {...props}/>,
);

Item.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  equitable: PropTypes.bool,
  hasBackground: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
  selectable: PropTypes.func,
  children: PropTypes.node,
  customizedChildren: PropTypes.bool, //whether to show the customized children and ignore the children parameter
  disabled: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.string,
  icon: PropTypes.node,
  directChild: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Item;