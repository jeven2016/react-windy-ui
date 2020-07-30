import React from 'react';
import Header from './Header';
import clsx from 'clsx';
import Slider from './Slider';
import Content from './Content';
import Split from './Split';
import Footer from './Footer';
import {Spring} from 'react-spring/renderprops';
import {isNil} from '../Utils';

const Layout = React.forwardRef((props, ref) => {
  const {
    className = 'layout',
    extraClassName,

    collapse,
    collapseAttribute = {
      attr: 'marginLeft',
      minValue: '5rem',
      maxValue: '15rem',
    },

    style,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className);
  if (isNil(collapse)) {
    return <div style={style} ref={ref} className={clsName} {...otherProps}/>;
  }

  const from = {
    [collapseAttribute.attr]: collapse
        ? collapseAttribute.minValue
        : collapseAttribute.maxValue,
  };

  return <Spring
      from={{
        [collapseAttribute.attr]: collapse
            ? collapseAttribute.minValue
            : collapseAttribute.maxValue,
      }}
      to={{
        [collapseAttribute.attr]: collapse
            ? collapseAttribute.maxValue
            : collapseAttribute.minValue,
      }}
      config={{clamp: true, mass: 1, tesion: 100, friction: 15}}>
    {
      springProps => {
        const newStyle = {...style, ...springProps};
        return <div ref={ref} className={clsName}
                    style={newStyle} {...otherProps}/>;
      }
    }
  </Spring>;
});

Layout.Header = Header;
Layout.Slider = Slider;
Layout.Content = Content;
Layout.Split = Split;
Layout.Footer = Footer;

export default Layout;