import React from 'react';
import useElement from '../common/useElement';
import PropTypes from 'prop-types';
import Curtain from "./Curtain";

/**
 * Card Component
 * @type {React.ComponentType<{} & React.ClassAttributes<unknown>>}
 */
const Card = React.forwardRef(
  (props, ref) => {
    const {
      className = 'card',
      block = false, autoScale = false,
      hasBorder = false, hasBox = true,
      hasWidth = true,
      ...otherProps
    } = props;
    return useElement({...otherProps}, ref, className,
      {
        'with-width': hasWidth && !block,
        block: block,
        'global-with-border': hasBorder,
        'global-with-box': hasBox,
        scale: autoScale,
      });
  });

const Body = React.forwardRef(
  (
    {className = 'card-body', ...otherProps},
    ref) => useElement(otherProps,
    ref, 'card-body'));

const CardImage = React.forwardRef(
  (props, ref) => {
    const {
      className = 'card-img',
      position = 'top',
      autoScale = false,
      ...otherProps
    } = props;
    return useElement(otherProps, ref, className, {
      [position]: position,
      'with-scale': autoScale,
    });
  });

const Footer = React.forwardRef(
  ({className = 'card-footer', ...otherProps}, ref) => useElement(otherProps,
    ref, className));

const Header = React.forwardRef((props, ref) => {
  const {hasBackground, className = 'card-header', ...otherProps} = props;
  return useElement(otherProps, ref, className,
    {gray: hasBackground});
});

const Image = React.forwardRef((props, ref) => {
  const {className = 'img', width = '100%', ...otherProps} = props;
  return useElement({
    ...otherProps,
    width: width,
    nativeType: 'img',
  }, ref, className);
});

const OverlayTitle = React.forwardRef(
  ({className = 'overlay-title', ...otherProps}, ref) => useElement(
    otherProps, ref, className));

const Row = React.forwardRef(
  ({className = 'card-row', ...otherProps}, ref) => useElement(otherProps,
    ref, className));

Card.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  block: PropTypes.bool,
  autoScale: PropTypes.bool,
  hasBorder: PropTypes.bool,
  hasBox: PropTypes.bool,
  hasWidth: PropTypes.bool,
};

Body.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
};

Footer.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
};
Header.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
};

Row.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
};

OverlayTitle.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
};

CardImage.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  autoScale: PropTypes.bool,
};

Image.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the class name of button
  width: PropTypes.string,
};

Card.Body = Body;
Card.CardImage = CardImage;
Card.Footer = Footer;
Card.Header = Header;
Card.Image = Image;
Card.OverlayTitle = OverlayTitle;
Card.Row = Row;
Card.Curtain = Curtain;

export default Card;