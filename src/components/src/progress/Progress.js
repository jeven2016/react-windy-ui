import React, {useEffect, useImperativeHandle, useMemo, useState} from 'react';
import clsx from 'clsx';
import {
  convertToArray,
  createContainer,
  execute,
  getContainer,
  isNil,
  random,
} from '../Utils';
import Loader from '../Loader';
import useMounted from '../common/UseUnmounted';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const ProgressType = {
  info: 'info',
  ok: 'ok',
  warning: 'warning',
  error: 'error',
};

const timeOutStart = 300;
const timeOutEnd = 500;

const TOP_DEFAULT_PROPS = {
  showLoading: true,
  type: 'warning',
  waitingAt: 90,
  initPercentValue: 5,
  incrementStart: 2,
  incrementEnd: 5,
  maxValue: 100,
  style: null,
  barStyle: null,
};

const Progress = React.forwardRef((props, ref) => {
  const {
    active = true,
    className = 'progress', extraClassName,
    percentValue,
    type = 'info',
    hasStripe = false,
    hasAnimation = false,
    top = false,
    hasContent = false,
    showLoading = false,
    style,
    barStyle,
    loaderType = 'secondary',
    loaderSize = 'small',
    config,// like: { percentValue: 10, type: 'error', content: (value)=> {}}
    ...otherProps
  } = props;

  const configItem = useMemo(() => {
    if (isNil(config)) {
      return null;
    }

    let items = convertToArray(config);
    if (items.length < 1) {
      return null;
    }
    items = items.sort((pre, next) => pre.percentValue - next.percentValue);
    let properItem = items.find(item => percentValue <= item.percentValue); //end item
    if (isNil(properItem)) {
      //find another item near by
      for (let i = items.length - 1; i >= 0; i--) {
        if (percentValue >= items[i].percentValue) {
          properItem = items[i];
          break;
        }
      }
    }
    return properItem;
  }, [config, percentValue]);

  const realType = useMemo(() => isNil(configItem) ? type : configItem.type,
      [configItem, type]);

  const clsName = clsx(extraClassName, className, {
    [ProgressType[realType]]: ProgressType[realType],
    'with-stripe': hasStripe,
    'animation': hasAnimation,
    'without-info': !hasContent,
    top: top,
  });

  const newStyle = {...style, opacity: active ? '1' : '0'};

  return <div ref={ref} className={clsName} style={newStyle} {...otherProps}>
    <div className="bar">
      <div className="bg" style={{
        ...barStyle,
        opacity: percentValue > 0 ? 1 : 0,
        width: percentValue > 0 ? `${percentValue}%` : 0,
      }}/>
    </div>
    {
      hasContent ? <div className="info">
            {isNil(configItem) ? `${percentValue}%` : configItem.content(
                percentValue)}
          </div>
          : null
    }

    {<Loader active={top && showLoading} type={loaderType} size={loaderSize}/>}

  </div>;
});

const ProgressNotifier = React.forwardRef((props, ref) => {
  const {
    showLoading,
    type,
    waitingAt,
    initPercentValue,
    incrementStart,
    incrementEnd,
    maxValue,
    style,
    barStyle,
    ...otherProps
  } = props;
  const unMountedRef = useMounted();
  const defaultValue = {
    active: true,
    percentValue: initPercentValue,
    timerRunning: true,
  };
  const [progress, setProgress] = useState(defaultValue);

  const stopped = !progress.active ? true : !progress.timerRunning;

  const updateLoadingState = () => {
    let current = progress.percentValue;
    if (unMountedRef.current || stopped || current >= maxValue) {
      return;
    }

    let next = current + random(incrementStart, incrementEnd);
    if (next >= maxValue) {
      next = waitingAt;
    }
    if (next < waitingAt) {
      setProgress({...progress, percentValue: next});
    } else if (progress.timerRunning) {
      setProgress({...progress, timerRunning: false});
    }
  };

  let timer;
  if (!stopped) {
    //show progress bar
    timer = execute(updateLoadingState, random(timeOutStart, timeOutEnd));
  }

  const clearTimer = () => {
    !isNil(timer) && clearTimeout(timer);
  };

  //expose a complete function
  useImperativeHandle(ref, () => ({
    complete: () => {
      clearTimer();
      setProgress({
        active: true,
        percentValue: 100,
        timerRunning: false,
      });
    },
  }));

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  return <Progress top
                   active={progress.active}
                   percentValue={progress.percentValue}
                   showLoading={showLoading}
                   type={type}
                   style={style}
                   barStyle={barStyle}
                   {...otherProps}/>;
});

let currentRef = React.createRef();

Progress.showTop = (props = {}) => {
  const newProps = {...TOP_DEFAULT_PROPS, ...props};
  let containerObj = createContainer('wui-progress');
  const key = 'pn-' + random(1000, 10000);

  //assign a key to always render a new progress component
  ReactDOM.render(<ProgressNotifier ref={currentRef} key={key} {...newProps}/>,
      containerObj.container);
};

Progress.closeTop = () => {
  const current = currentRef.current;
  if (current) {
    current.complete();
  }

  //destroy the container after 200 millseconds
  execute(() => {
    let container = getContainer('wui-progress');
    if (container) {
      ReactDOM.unmountComponentAtNode(container);
    }
  }, 500);
};

Progress.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  percentValue: PropTypes.number,
  type: PropTypes.string,
  hasStripe: PropTypes.bool,
  hasAnimation: PropTypes.bool,
  top: PropTypes.bool,
  hasContent: PropTypes.bool,
  showLoading: PropTypes.bool,
  style: PropTypes.object,
  barStyle: PropTypes.object,
  loaderType: PropTypes.string,
  loaderSize: PropTypes.string,
  config: PropTypes.arrayOf(PropTypes.shape({
    percentValue: PropTypes.number,
    type: PropTypes.string,
    content: PropTypes.func,
  })),
};

export default Progress;