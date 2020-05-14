import React, {useContext, useEffect, useMemo, useState} from 'react';
import clsx from 'clsx';
import {MenuContext} from '../common/Context';
import {includes, isNil} from '../Utils';
import {Action} from './MenuUtils';
import PropTypes from 'prop-types';
import {animated, useSpring} from 'react-spring';

const Item = React.forwardRef((props, ref) => {
  const {
    className = 'menu-item',
    extraClassName,
    children,
    disabled,
    id,
    equitable = false,
    align,
    hasBackground,
    hasBottomBar,
    icon,
    directChild = false,
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
      // console.log(`${id}=> notified`);
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
  }, [isActive, id, disabled, setActive]);

  const clickHandler = (e) => {
    if (disabled) {
      return;
    }
    const itemInfo = {
      id: id,
    };
    ctx.dispatch({type: Action.clickHeader, itemInfo, e});
  };

  const clsName = clsx(extraClassName, className, {
    [ctx.type]: ctx.type,
    equitable: equitable,
    [align]: align,
    disabled: disabled,
    active: isActive,
    'with-bg': hasBackground,
    'with-bottom-bar': hasBottomBar,
  });

  const content = useMemo(() => {
    if (!directChild) {
      return icon ? <>
        <div className="item-icon">{icon}</div>
        <div className="item-info">{children}</div>
      </> : children;
    }
    return !show ? <div className="item-icon">{icon}</div> : <>
      <div className="item-icon">{icon}</div>
      <animated.div className="item-info"
                    style={innerProps}>{children}</animated.div>
    </>;
  }, [directChild, icon, children, innerProps, show]);

  return <div className={clsName} {...otherProps} onClick={clickHandler}>
    {content}
  </div>;
});

Item.propTypes = {
  equitable: PropTypes.bool,
  hasBackground: PropTypes.bool,
  hasBottomBar: PropTypes.bool,
  align: PropTypes.string,
};

export default Item;