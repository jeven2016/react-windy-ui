import React from 'react';
import Header from './Header';
import clsx from 'clsx';
import Slider from './Slider';
import Content from './Content';
import Split from './Split';
import Footer from './Footer';
import { Spring, animated } from 'react-spring';
import { isNil } from '../Utils';
import PropTypes from 'prop-types';

const Layout = React.forwardRef((props, ref) => {
  const {
    className = 'layout',
    extraClassName,

    collapse,
    collapseAttribute = {
      attr: 'marginLeft',
      minValue: '80px',
      maxValue: '240px'
    },

    style,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className);
  if (isNil(collapse)) {
    return <div style={style} ref={ref} className={clsName} {...otherProps} />;
  }

  return (
    <Spring
      from={{
        [collapseAttribute.attr]: collapse ? collapseAttribute.minValue : collapseAttribute.maxValue
      }}
      to={{
        [collapseAttribute.attr]: collapse ? collapseAttribute.maxValue : collapseAttribute.minValue
      }}
      config={{ clamp: true, mass: 1, tesion: 100, friction: 15 }}
    >
      {(springProps) => {
        const newStyle = { ...style, ...springProps };
        return <animated.div ref={ref} className={clsName} style={newStyle} {...otherProps} />;
      }}
    </Spring>
  );
});

Layout.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  collapse: PropTypes.bool,
  collapseAttribute: PropTypes.shape({
    attr: PropTypes.string,
    minValue: PropTypes.string,
    maxValue: PropTypes.string
  })
};

Layout.Header = Header;
Layout.Slider = Slider;
Layout.Content = Content;
Layout.Split = Split;
Layout.Footer = Footer;

export default Layout;
