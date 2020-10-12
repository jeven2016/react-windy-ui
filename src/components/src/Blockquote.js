import React from 'react';
import clsx from 'clsx';
import useElement from './common/useElement';
import {JustifyContentType} from './common/Constants';
import PropTypes from 'prop-types';

const Header = React.forwardRef(
    (props, ref) => useElement(props, ref, 'header'));

const Footer = React.forwardRef(
    (props, ref) => {
      const {justify = JustifyContentType.start, ...otherProps} = props;
      return useElement(otherProps, ref, 'footer',
          {[JustifyContentType[justify]]: justify});
    });

const Blockquote = React.forwardRef((props, ref) => {
  const {
    className = 'blockquote',
    extraClassName,
    type = 'normal',
    hasBorder = false,
    hasBox = false,
    hasBackground = false,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className, {
    [type]: type,
    border: hasBorder,
    'with-bg': hasBackground,
    'with-box': hasBox,
  });
  return <div className={clsName} {...otherProps} ref={ref}/>;
});

Blockquote.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  type: PropTypes.string,
  hasBorder: PropTypes.bool,
  hasBox: PropTypes.bool,
  hasBackground: PropTypes.bool,
};

Header.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
};

Footer.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  justify: PropTypes.string,
};

Blockquote.Header = Header;
Blockquote.Footer = Footer;
export default Blockquote;