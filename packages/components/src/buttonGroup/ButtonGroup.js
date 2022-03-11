import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Element from '../common/Element';

const ButtonGroup = React.forwardRef((props, ref) => {
  const {
    size,
    block,
    direction = 'horizontal',
    className = 'button-group',
    ...otherProps
  } = props;

  let clsName = clsx(className, direction, {
    [size]: size,
    block: block
  });

  return <Element ref={ref} className={clsName} {...otherProps} />;
});

ButtonGroup.propTypes = {
  block: PropTypes.bool, //whether the button is a 'block' button whose width is '100%' and occupy the whole row
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
  size: PropTypes.oneOf(['large', 'medium', 'small']), //the size of the button
  direction: PropTypes.oneOf(['horizontal', 'vertical'])
};

export default ButtonGroup;
