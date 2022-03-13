import React from 'react';
import useElement from '../common/useElement';
import PropTypes from 'prop-types';
import { Direction } from '../common/Constants';

/**
 * Divider Component
 * @type {React.ComponentType<{} & React.ClassAttributes<unknown>>}
 */
const Divider = React.forwardRef((props, ref) => {
  const { translucent = false, style, direction = 'horizontal', ...otherProps } = props;
  const sty = translucent
    ? {
        ...style,
        backgroundColor: 'rgba(0,0,0,0.15)'
      }
    : style;
  return useElement({ ...otherProps, style: sty }, ref, 'divider', { [direction]: direction });
});

Divider.propTypes = {
  translucent: PropTypes.bool,
  direction: PropTypes.oneOf(Object.keys(Direction)),
  style: PropTypes.object
};

export default Divider;
