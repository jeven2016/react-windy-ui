import React, {useCallback, useRef} from 'react';
import Mask from './Mask';
import clsx from 'clsx';
import useEvent from './common/UseEvent';
import {EventListener} from './common/Constants';
import {animated, useTransition} from 'react-spring';
import useMultipleRefs from './common/UseMultipleRefs';
import {IconList} from './Icons';
import Card from './card';
import Divider from './divider';
import * as PropTypes from 'prop-types';
import {validate} from './Utils';

const Position = {
  left: 'left',
  right: 'right',
  top: 'top',
  bottom: 'bottom',
};

/**
 * Drawer component
 */
const Drawer = React.forwardRef((props, ref) => {
  const {
    active = false,
    className = 'drawer',
    extraClassName,
    onChange,
    hasMask = true,
    hasAnchor = false,
    autoClose = true,
    position = Position.left,
    children,
    header,
    footer,
    style,
    ...otherProps
  } = props;
  validate(Position.hasOwnProperty(position),
      `The position '${position}' is not acceptable.`);

  const dwRef = useRef(null);
  const multiRef = useMultipleRefs(ref, dwRef);

  const close = useCallback((e) => {
    if (!autoClose) {
      return;
    }
    onChange && onChange(false, e);
  }, [autoClose, onChange]);

  // register window click event listener if no mask displays
  useEvent(EventListener.click, (e) => {
    if (!active) {
      return;
    }
    if (!dwRef.current.contains(e.target)) {
      close(e);
    }

  }, !hasMask);

  let clsName = clsx(extraClassName, className, {
    [position]: position,
  });

  const transition = useTransition(active, null, {
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
    from: {display: 'none', [position]: '-100%'},
    enter: item => async next => {
      await next({display: ''});
      await next({[position]: '0%'});
    },
    leave: item => async next => {
      await next({[position]: '-100%'});
      await next({display: 'none'});
    },
  });

  const clickAnchorHandler = useCallback((e) => {
    onChange && onChange(true, e);
  }, [onChange]);

  const showAnchor = hasAnchor && !active;
  const anchorTransition = useTransition(!active, null, {
    config: {clamp: true, mass: 1, tesion: 100, friction: 15},
    from: {opacity: 1, transform: 'scale(0.5)'},
    enter: {opacity: 1, transform: 'scale(1)'},
    leave: {opacity: 1, transform: 'scale(0.5)'},
  });

  return <>
    {
      showAnchor &&
      anchorTransition.map(anchorProps => anchorProps.item &&
          <animated.div key={anchorProps.key} style={anchorProps.props}
                        className={`mask-anchor ${position}`}
                        onClick={clickAnchorHandler}>
            <IconList/>
          </animated.div>)
    }

    {hasMask && <Mask active={active} onClick={close}/>}

    {
      transition.map((tranProps) => {
        return tranProps.item && <animated.div className={clsName}
                                               key={tranProps.key}
                                               style={{...style, ...tranProps.props}}
                                               ref={multiRef} {...otherProps}>
          <Card>
            {header && <><Card.Header>{header}</Card.Header><Divider/></>}
            <Card.Body>
              {children}
            </Card.Body>

            {footer && <><Divider/><Card.Footer>{footer}</Card.Footer></>}
          </Card>

        </animated.div>;
      })
    }

  </>;
});

Drawer.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  onChange: PropTypes.func,
  hasMask: PropTypes.bool,
  hasAnchor: PropTypes.bool,
  autoClose: PropTypes.bool,
  position: PropTypes.string,
  header: PropTypes.node,
  footer: PropTypes.node,
  style: PropTypes.object,
};

export default Drawer;