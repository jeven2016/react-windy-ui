import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {createContainer, execute, isNil, isString, validate} from './Utils';
import Alert from './Alert';
import {Transition} from 'react-spring/renderprops';

const SizeStyle = {
  small: 'alert-container-width-sm',
};

const PositionType = {
  topCenter: 'top-center',
  topLeft: 'top-left',
  topRight: 'top-right',
  bottomLeft: 'bottom-left',
  bottomRight: 'bottom-right',
};

let DEFAULT_CONFIG = {
  position: 'topRight',
  duration: 5000,
  hasCloseIcon: true,
  onClose: null,
  rect: {
    left: '1.5rem',
    right: '1.5rem',
    bottom: '1.5rem',
    top: '1.5rem',
  },
  alertProps: {style: {}},
};

const Proxy = () => {
  let add, initialized = false;
  const attachFunc = ({add: attachedAdd}) => {
    add = attachedAdd;
    initialized = true;
  };

  return {
    initialized: () => initialized,
    attach: attachFunc,
    add: (msg) => add(msg),
  };
};

const Notification = (props) => {
  const {
    msgStore,
    position = DEFAULT_CONFIG.position,
    onUnmount,
    rect = DEFAULT_CONFIG.rect,
  } = props;
  validate(Object.keys(PositionType).includes(position),
      `The value(${position}) of the position is invalid.`);

  const size = 'small'; //only one size provided
  const sizeClassName = SizeStyle[size];
  const [queue, setQueue] = useState([]);
  const cntRef = useRef(null);
  const timerMap = useRef(new Map());

  const lowerPosition = useMemo(() => position.toLowerCase(), [position]);
  const positionResult = useMemo(() => {
    const isLeft = lowerPosition.includes('left');
    const isRight = lowerPosition.includes('right');
    const isCenter = lowerPosition.includes('center');
    const isTop = lowerPosition.includes('top');
    const isBottom = lowerPosition.includes('bottom');
    return {isLeft, isCenter, isRight, isTop, isBottom};
  }, [lowerPosition]);

  const removeMsg = useCallback((key) => {
    const timer = timerMap.current.get(key);
    if (!isNil(timer)) {
      clearTimeout(timer);
      timerMap.current.delete(key);
    }
    setQueue(pre => [...pre.filter(msg => msg.key !== key)]);
  }, [timerMap, setQueue]);

  const addMsg = useCallback((msg) => {
    if (!isNil(msg.duration) && msg.duration > 0) {
      const timer = execute(() => {
        removeMsg(msg.key);
      }, msg.duration);
      timerMap.current.set(msg.key, timer);
    }
    setQueue(q => [...q, msg]);
  }, [timerMap, setQueue, removeMsg]);

  if (!msgStore.initialized()) {
    msgStore.attach({add: addMsg});
  }

  useEffect(() => {
    if (!isNil(rect)) {
      if (positionResult.isTop) {
        cntRef.current.style.top = rect.top;
      } else {
        cntRef.current.style.bottom = rect.bottom;
      }

      if (positionResult.isLeft) {
        cntRef.current.style.left = rect.left;
      } else {
        cntRef.current.style.right = rect.right;
      }
    }
  });

  useEffect(() => {
    return () => {
      onUnmount && onUnmount(position);
    };
  }, [onUnmount, position]);

  const animationFrom = useMemo(() => {
    let x = '0%';//center

    if (positionResult.isLeft) {
      x = '-100%';
    }
    if (positionResult.isRight) {
      x = '100%';
    }
    return {x: x, opacity: '0', scale: positionResult.isCenter ? 0 : 1};
  }, [positionResult]);

  const animationLeave = useMemo(() => {
    let x = '0%';//center
    if (positionResult.isLeft) {
      x = '-100%';
    }
    if (positionResult.isRight) {
      x = '100%';
    }
    return {x, opacity: 0, scale: positionResult.isCenter ? 0 : 1};
  }, [positionResult]);

  return <div
      className={`alert-container ${sizeClassName} ${PositionType[position]}`}
      ref={cntRef}>
    {
      //using <Transition> instead of useTransition, since useTransition always
      //print react worning log regarding memory leak
    }
    <Transition
        config={{clamp: true, mass: 1, tesion: 150, friction: 15}}
        items={queue}
        keys={item => item.key}
        from={animationFrom}
        enter={{x: '0', opacity: '1', scale: 1}}
        onDestroyed={(item) => {
          item.onClose && item.onClose(item);
        }}
        leave={animationLeave}>
      {
        item => tranProps => {
          delete item.rect;
          const {alertProps: {style: alterSty, ...alterOthers}, ...others} = item;
          const alertStyle = {
            ...alterSty,
            opacity: tranProps.opacity,
            transform: `translate3d(${tranProps.x}, 0, 0) scaleY(${tranProps.scale})`,
          };
          const alertConfig = {...others, ...alterOthers};
          return <Alert {...alertConfig}
                        animated={false}
                        style={alertStyle}
                        active={true}
                        onClose={() => removeMsg(item.key)}/>;
        }}
    </Transition>
  </div>;

};

/**
 * Generate a key for inner Alert intances
 * @returns {string}
 */
const generateKey = () => {
  return `nf-${Date.now()}`;
};

const proxyMap = new Map();

/**
 * Add a alert message to queue
 * @param type
 * @param cfg
 */
const send = (type, cfg) => {
  const key = generateKey();
  let msg = isString(cfg) ? {
        ...DEFAULT_CONFIG,
        key: key,
        type: type,
        body: cfg,
      }
      : {key: key, type: type, ...DEFAULT_CONFIG, ...cfg};

  let proxy = proxyMap.get(msg.position);
  if (!proxy) {
    proxy = new Proxy();
    proxyMap.set(msg.position, proxy);
    let containerObj = createContainer('notify-' + msg.position);

    //pass position into todo
    ReactDOM.render(<Notification position={msg.position}
                                  msgStore={proxy}
                                  onUnmount={(k) => {
                                    containerObj.remove();
                                    proxyMap.delete(k);
                                  }}/>,
        containerObj.container);
    proxy.add(msg);
  } else {
    proxy.add(msg);
  }
};

export default {
  getConfig() {
    return DEFAULT_CONFIG;
  },
  config(cfg) {
    DEFAULT_CONFIG = {...DEFAULT_CONFIG, ...cfg};
  },

  info(cfg) {
    send('info', cfg);
  },
  ok(cfg) {
    send('ok', cfg);
  },
  warning(cfg) {
    send('warning', cfg);
  },
  error(cfg) {
    send('error', cfg);
  },

  simple(cfg) {
    send('simple', cfg);
  },
  mini(cfg) {
    send('mini', cfg);
  },
};