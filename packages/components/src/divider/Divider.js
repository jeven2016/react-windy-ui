import React from 'react';
import useElement from '../common/useElement';

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

export default Divider;
