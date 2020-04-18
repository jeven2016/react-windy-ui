import React from 'react';
import useElement from '../common/useElement';

/**
 * Card Component
 * @type {React.ComponentType<{} & React.ClassAttributes<unknown>>}
 */
const Card = React.forwardRef(
    (props, ref) => {
      const {
        block = false, autoScale = false,
        hasBorder = true, hasBox = true,
        ...otherProps
      } = props;
      return useElement({...otherProps}, ref, 'card',
          {
            block: block,
            'global-with-border': hasBorder,
            'global-with-box': hasBox,
            scale: autoScale,
          });
    });

const Body = React.forwardRef(
    (props, ref) => useElement(props, ref, 'card-body'));

const CardImage = React.forwardRef(
    (props, ref) => {
      const {position = 'top', ...otherProps} = props;
      return useElement({...otherProps}, ref, 'card-img', {
        [position]: position,
      });
    });

const Footer = React.forwardRef(
    (props, ref) => useElement(props, ref, 'card-footer'));

const Header = React.forwardRef((props, ref) => {
  const {hasBackground, ...otherProps} = props;
  return useElement({...otherProps}, ref, 'card-header',
      {gray: hasBackground});
});

const Image = React.forwardRef((props, ref) => {
  const {width = '100%', ...otherProps} = props;
  return useElement({
    ...otherProps,
    width: width,
    nativeType: 'img',
  }, ref, 'img');
});

const OverlayTitle = React.forwardRef(
    (props, ref) => useElement(props, ref, 'overlay-title'));

const Row = React.forwardRef(
    (props, ref) => useElement(props, ref, 'card-row'));

Card.Body = Body;
Card.CardImage = CardImage;
Card.Footer = Footer;
Card.Header = Header;
Card.Image = Image;
Card.OverlayTitle = OverlayTitle;
Card.Row = Row;

export default Card;