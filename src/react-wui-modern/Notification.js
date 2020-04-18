import React, {useEffect, useRef, useState} from 'react';
import ReactDOM from 'react-dom';
import {createContainer, getLeftIfCentered, isString, random} from './Utils';
import Alert from './Alert';
import {EventListener} from './common/Constants';
import useEvent from './common/UseEvent';

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
  showCloseIcon: false,
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

  const addMsg = (msg) => {
    setQueue(q => [msg, ...q]);
  };

  if (!msgStore.initialized()) {
    msgStore.attach({add: addMsg});
  }
  useEvent(EventListener.resize, (evt) => {
    move();
  }, position === 'topCenter');

  useEffect(() => {
    if (position === 'topCenter') {
      move();
    } else {
      //remove {top, left} properties from style if position is not topCenter
      cntRef.current.removeAttribute('style');
    }

    return () => {
      let cnt = Notification.container;
      cnt && cnt.remove();
    };
  }, [position]);

  const move = () => {
    let cnt = cntRef.current;
    if (!cnt) {
      return;
    }
    cnt.style.left = getLeftIfCentered(
        cnt, document.documentElement);
    cnt.style.top = DEFAULT_CONFIG.top;
  };
  const removeMsg = (key) => {
    const newQueue = [...queue.filter(msg => msg.key !== key)];
    setQueue(newQueue);
  };

  return <div
      className={`alert-container ${sizeClassName} ${PositionType[position]}`}
      ref={cntRef}>
    {
      queue.map(({key, ...other}) => {
        return <Alert autoUnmout={false} key={key} {...other}
                      showCloseIcon={DEFAULT_CONFIG.showCloseIcon}
                      duration={DEFAULT_CONFIG.duration}
                      onClose={() => removeMsg(key)}
        />;
      }).reverse()
    }
  </div>;

};

/**
 * Generate a key for inner Alert intances
 * @returns {string}
 */
let generateKey = () => {
  return `nf-key-${Date.now()}-${random(1000, 10000)}`;
};

/**
 * Add a alert message to queue
 * @param type
 * @param message
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
  let notification = ReactDOM.render(<Notification msgStore={proxy}/>,
      containerObj.container);
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