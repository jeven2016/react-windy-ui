import React, {Component} from 'react';
import useElement from '../common/useElement';

/**
 * Divider Component
 * @type {React.ComponentType<{} & React.ClassAttributes<unknown>>}
 */
const Divider = React.forwardRef(
    (props, ref) => {
      const {translucent = false, ...otherProps} = props;
      const style = translucent ? {
        backgroundColor: 'rgba(0,0,0,0.15)',
      } : {};
      return useElement({...otherProps, style: style}, ref, 'divider');
    });

export default Divider;
