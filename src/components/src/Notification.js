import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {
  createContainer,
  execute,
  getLeftIfCentered,
  isNil,
  isString,
  random,
  validate,
} from './Utils';
import Alert from './Alert';
import {EventListener} from './common/Constants';
import useEvent from './common/UseEvent';
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
  duration: 3000,
  hasCloseIcon: true,
  top: '5rem',
};

const Proxy = (() => {
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
})();

const Notification = (props) => {
  const {msgStore, position = DEFAULT_CONFIG.position} = props;
  const size = 'small'; //only one size provided
  const sizeClassName = SizeStyle[size];
  const [queue, setQueue] = useState([]);
  const cntRef = useRef(null);
  const timerMap = useRef(new Map());

  validate(Object.keys(PositionType).includes(position),
      `The value(${position}) of the position is invalid.`);

  const lowerPosition = useMemo(() => position.toLowerCase(), [position]);
  const positionResult = useMemo(() => {
    const isLeft = lowerPosition.includes('left');
    const isRight = lowerPosition.includes('right');
    const isCenter = lowerPosition.includes('center');
    return {isLeft, isCenter, isRight};
  }, [lowerPosition]);

  const move = useCallback(() => {
    let cnt = cntRef.current;
    if (!cnt) {
      return;
    }
    cntRef.current.style.left = getLeftIfCentered(
        cnt, document.documentElement);
  }, [cntRef]);

  const addMsg = (msg) => {
    if (!isNil(DEFAULT_CONFIG.duration) && DEFAULT_CONFIG.duration > 0) {
      const timer = execute(() => {
        removeMsg(msg.key);
      }, DEFAULT_CONFIG.duration);
      timerMap.current.set(msg.key, timer);
    }
    setQueue(q => [...q, msg]);
  };

  if (!msgStore.initialized()) {
    msgStore.attach({add: addMsg});
  }
  useEvent(EventListener.resize, (evt) => {
    move();
  }, positionResult.isCenter);

  useEffect(() => {
    console.log(DEFAULT_CONFIG.top);
    if (!isNil(DEFAULT_CONFIG.top)) {
      cntRef.current.style.top = DEFAULT_CONFIG.top;
    }
  });

  useEffect(() => {
    if (positionResult.isCenter) {
      move();
    } else {
      //remove {top, left} properties from style if position is not topCenter
      cntRef.current.removeAttribute('style');
    }

    return () => {
      let cnt = Notification.container;
      cnt && cnt.remove();
    };
  }, [positionResult, move]);

  const removeMsg = useCallback((key) => {
    const timer = timerMap.current.get(key);
    if (!isNil(timer)) {
      clearTimeout(timer);
      timerMap.current.delete(key);
    }
    setQueue(pre => [...pre.filter(msg => msg.key !== key)]);
  }, [timerMap, setQueue]);

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
        config={{clamp: true, mass: 1, tesion: 100, friction: 15}}
        items={queue}
        keys={item => item.key}
        from={animationFrom}
        enter={{x: '0', opacity: '1', scale: 1}}
        leave={animationLeave}
    >
      {
        item => tranProps =>
            <Alert {...item}
                   animated={false}
                   style={{
                     opacity: tranProps.opacity,
                     transform: `translate3d(${tranProps.x}, 0, 0) scaleY(${tranProps.scale})`,
                   }}
                   active={true}
                   onClose={() => removeMsg(item.key)}
                   hasCloseIcon={DEFAULT_CONFIG.hasCloseIcon}/>
      }
    </Transition>
  </div>;

};

/**
 * Generate a key for inner Alert intances
 * @returns {string}
 */
let generateKey = () => {
  return `nf-${Date.now()}-${random(1000, 10000)}`;
};

/**
 * Add a alert message to queue
 * @param type
 * @param config
 */
let send = (type, config) => {
  const key = generateKey();
  let msg = isString(config) ? {
        key: key,
        duration: DEFAULT_CONFIG.duration,
        type: type,
        body: config,
      }
      : {key: key, duration: DEFAULT_CONFIG.duration, type: type, ...config};

  const proxy = Proxy;
  if (proxy.initialized()) {
    proxy.add(msg);
    return;
  }
  let containerObj = createContainer('wui-alert-cont');
  ReactDOM.render(<Notification msgStore={proxy}/>, containerObj.container);
  proxy.add(msg);
};

export default {
  config(config) {
    DEFAULT_CONFIG = {...DEFAULT_CONFIG, ...config};
  },

  info(config) {
    send('info', config);
  },
  ok(config) {
    send('ok', config);
  },
  warning(config) {
    send('warning', config);
  },
  error(config) {
    send('error', config);
  },

  simple(config) {
    send('simple', config);
  },
  mini(config) {
    send('mini', config);
  },
};