import React from 'react';
import clsx from 'clsx';
import {Spring} from 'react-spring/renderprops';
import {isNil} from '../Utils';

const Slider = React.forwardRef((props, ref) => {
  const {
    className = 'layout-slider',
    hasBox = false,
    extraClassName,
    collapse = false,
    width = '15rem',
    minWidth = '5rem',
    style = {},
    ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className, {
    'with-box': hasBox,
    // 'collapsed': collapse,
  });

  const {width: styleWidth} = style;
  const initWidth = isNil(styleWidth) ? width : styleWidth;
  return <Spring
      from={{
        width: collapse ? initWidth : minWidth,
      }}
      to={{
        width: collapse ? minWidth : initWidth,
      }}>
    {
      springProps => {
        const newProps = {...style, ...springProps};
        return <div className={clsName} style={newProps} {...otherProps}/>;
      }
    }
  </Spring>;
});

export default Slider;