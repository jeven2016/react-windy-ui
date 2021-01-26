import React from 'react';
import clsx from 'clsx';
import {Spring} from 'react-spring/renderprops';
import {isNil, isNumber} from '../Utils';
import PropTypes from 'prop-types';

const Slider = React.forwardRef((props, ref) => {
  const {
    className = 'layout-slider',
    hasBox = false,
    extraClassName,
    collapse = false,
    autoHide = true,
    width = '240px',
    minWidth = '88px',
    style = {},
    children,
    ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className, {
    'with-box': hasBox,
    // 'collapsed': collapse,
  });

  let realWidth = isNumber(width) ? `${width}px` : width;
  let realMinWidth = isNumber(minWidth) ? `${minWidth}px` : minWidth;

  const {width: styleWidth} = style;
  const initWidth = isNil(styleWidth) ? realWidth : styleWidth;
  return <Spring
    config={{clamp: true, mass: 1, tesion: 100, friction: 15}}
    from={{
      width: collapse ? initWidth : realMinWidth,
      opacity: collapse ? 0 : 1,
    }}
    to={{
      width: collapse ? realMinWidth : initWidth,
      opacity: collapse && autoHide ? 0 : 1,
    }}>
    {
      springProps => {
        const newProps = {...style, ...springProps};
        return <div ref={ref} className={clsName}
                    style={newProps} {...otherProps}>
          <div className="slider-inner">
            {children}
          </div>
        </div>;
      }
    }
  </Spring>;
});

Slider.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  hasBox: PropTypes.bool,
  collapse: PropTypes.bool,
  autoHide: PropTypes.bool,
  width: PropTypes.string,
  minWidth: PropTypes.string,
  style: PropTypes.object,
};

export default Slider;