import React, {useEffect, useState, useImperativeHandle} from 'react';
import clsx from 'clsx';
import {createContainer, isNil, random, execute, getContainer} from '../Utils';
import Loader from '../Loader';
import useMounted from '../common/UseUnmounted';
import ReactDOM from 'react-dom';

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
  progressStyle: null,
  barStyle: null,
};

const Progress = React.forwardRef((props, ref) => {
  const {
    active = true,
    className = 'progress', extraClassName,
    percentValue, type = 'info',
    hasStripe, hasAnimation, top, showDetail, showLoading = false,
    style,
    barStyle,
    ...otherProps
  } = props;
  const clsName = clsx(extraClassName, className, {
    [ProgressType[type]]: ProgressType[type],
    'with-stripe': hasStripe,
    'animation': hasAnimation,
    'without-info': !showDetail,
    top: top,
  });

  const newStyle = {...style, opacity: active ? '1' : '0'};

  const infoContent = `${percentValue}%`;
  return <div ref={ref} className={clsName} style={newStyle} {...otherProps}>
    <div className="bar">
      <div className="bg" style={{...barStyle, width: infoContent}}/>
    </div>
    {
      showDetail ? <div className="info">
            {infoContent}
          </div>
          : null
    }

    {<Loader active={top && showLoading} type="secondary" size="small"/>}

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
    progressStyle,
    barStyle,
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
  }, []);

  return <Progress top
                   active={progress.active}
                   percentValue={progress.percentValue}
                   showLoading={showLoading}
                   type={type}
                   style={progressStyle}
                   barStyle={barStyle}/>;
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

export default Progress;