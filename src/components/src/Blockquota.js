import React from 'react';
import clsx from 'clsx';
import useElement from './common/useElement';
import {JustifyContentType} from './common/Constants';

const Header = React.forwardRef(
    (props, ref) => useElement(props, ref, 'header'));

const Footer = React.forwardRef(
    (props, ref) => {
      const {align, ...otherProps} = props;
      return useElement(otherProps, ref, 'footer',
          {[JustifyContentType[align]]: align});
    });

const Blockquota = React.forwardRef((props, ref) => {
  const {
    className = 'blockquote', extraClassName, type, hasBorder,
    hasBox,
    hasBackground,
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

Blockquota.Header = Header;
Blockquota.Footer = Footer;
export default Blockquota;