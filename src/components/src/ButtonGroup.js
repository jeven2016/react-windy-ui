import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Element from './common/Element';

const ButtonGroup = React.forwardRef((props, ref) => {
  const {
    size,
    outline,
    block,
    disabled = false,
    className = 'button-group',
    ...otherProps
  } = props;

  let clsName = clsx(className, {
    [size]: size,
    block: block,
    outline: outline,
  });

  return <Element ref={ref} className={clsName}
                  disabled={disabled} {...otherProps}/>;
});

ButtonGroup.defaultProps = {};

ButtonGroup.propTypes = {
  block: PropTypes.bool, //whether the button is a 'block' button whose width is '100%' and occupy the whole row
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
  size: PropTypes.string, //the size of the button
  outline: PropTypes.bool,
};

export default ButtonGroup;