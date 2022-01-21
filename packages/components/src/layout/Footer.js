import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';

const Footer = React.forwardRef((props, ref) => {
  return <Header ref={ref} className="layout-footer" {...props} />;
});

Footer.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string //the class name of button
};

export default Footer;
