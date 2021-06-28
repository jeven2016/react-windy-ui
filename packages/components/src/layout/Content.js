import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Content = React.forwardRef((props, ref) => {
  const {
    className = 'layout-content',
    extraClassName,
    ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className);

  return <div ref={ref} className={clsName} {...otherProps}/>;
});

Content.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
};

export default Content;