import React, {useMemo} from 'react';
import PropTypes from 'prop-types';
import Element from '../common/Element';
import {isNil, nonNil} from '../Utils';
import Ripple from '../common/Ripple';
import clsx from 'clsx';
import Loader from '../Loader';

const grayRippleColor = '#333';

/**
 * Button component
 */
const Button = React.forwardRef((props, ref) => {
  const {
    className = 'button',
    nativeType = 'button',
    type,
    block = false,
    color,
    directRef,
    active = false,
    size = 'medium',
    outline = false,
    circle = false,
    hasMinWidth = false,
    shape, //circle or round
    inverted = false,
    hasOutlineBackground = true,
    initOutlineColor = false,
    hasBox = true,
    hasBorder = true,
    invertedOutline = false,
    hasRipple = true,
    rippleColor = '#fff',
    onClick,
    disabled = false,
    leftIcon,
    rightIcon,
    loading = false,
    leftLoader = true,
    loader = <Loader type="primary" active={true} size="small"/>,
    children,
    ...otherProps
  } = props;

  const isIconButton = (nonNil(leftIcon) || nonNil(rightIcon)) &&
      React.Children.count(children) === 0;

  const realRippleColor = useMemo(() => {
    if (color === 'gray' || type === 'gray') {
      return grayRippleColor;
    }
    return rippleColor;
  }, [color, rippleColor, type]);

  let clsName = {
    default: isNil(type) && isNil(color),
    normal: !outline && !inverted,
    inverted: inverted,
    [type]: type,
    [size]: size,
    [color]: color,
    block: block,
    active: active,
    outline: outline,
    circle: circle || shape === 'circle',
    round: shape === 'round',
    'with-outline-bg': outline && hasOutlineBackground,
    'no-outline-bg': outline && !hasOutlineBackground,
    'min-width': hasMinWidth,
    'with-default-color': initOutlineColor,
    'without-box': !hasBox,
    'without-border': !hasBorder,
    'inverted-outline': invertedOutline,
    'only-icon': isIconButton,
  };

  const nativeTypeDef = useMemo(() => {
    const nativeElemType = nativeType === 'a' ? 'a' : 'button';

    //the button has default behaviour of submit, so the type should be populated
    //to prevent the form be automatically submitted
    const nativeBtnType = nativeType !== 'a' ? {
      type: nativeType,
    } : {};
    return {nativeElemType, nativeBtnType};
  }, [nativeType]);

  let contentClsName = useMemo(() => clsx('content', {
    'left-content': nonNil(rightIcon),
    'right-content': nonNil(leftIcon),
  }), [leftIcon, rightIcon]);

  const isLoading = loading && nonNil(loader);

  return (
      <Element
          className={className}
          moreClassSuffix={clsName}
          onClick={onClick}
          disabled={disabled}
          setDisabledAttr={true}
          nativeType={nativeTypeDef.nativeElemType}
          {...nativeTypeDef.nativeBtnType}
          {...otherProps}
          ref={ref}>
        <span className="content-root">
          {
            isLoading && leftLoader
            && React.cloneElement(loader, {style: {marginRight: '.5rem'}})
          }
          {
            isNil(leftIcon) && isNil(rightIcon) ?
                children
                : <>

                  {leftIcon}
                  {children && <span className={contentClsName}>{children}</span>}
                  {rightIcon}
                </>
          }
          {
            isLoading && !leftLoader &&
            React.cloneElement(loader, {style: {marginLeft: '.5rem'}})
          }
        </span>
        {
          hasRipple && !disabled &&
          <Ripple center={circle} color={realRippleColor}/>
        }
      </Element>
  );
});

Button.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
  nativeType: PropTypes.oneOf(['button', 'reset', 'submit', 'a']), //the native html type, like 'button', 'reset' or 'submit'
  type: PropTypes.string,   //it can be 'primary', 'secondary', 'info', 'warning', 'error', etc.
  block: PropTypes.bool, //whether the button's width is '100%' and it occupies the whole row
  color: PropTypes.string, //the color, like "primary", "red"
  directRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.elementType}),
  ]),
  active: PropTypes.bool, // active this button
  size: PropTypes.oneOf(['large', 'medium', 'small']), //the size of the button
  outline: PropTypes.bool, //whether to display as outlined button
  circle: PropTypes.bool, //whether to display as a Circular button
  hasMinWidth: PropTypes.bool, // whether to set a min width of the button
  shape: PropTypes.oneOf(['circle', 'round']),
  inverted: PropTypes.bool,
  hasOutlineBackground: PropTypes.bool,
  initOutlineColor: PropTypes.bool,
  hasBox: PropTypes.bool,
  hasBorder: PropTypes.bool,
  invertedOutline: PropTypes.bool,
  hasRipple: PropTypes.bool,
  rippleColor: PropTypes.string,
  onClick: PropTypes.func, //the click callback
  disabled: PropTypes.bool, //disable this button
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  loading: PropTypes.bool,
  leftLoader: PropTypes.bool,
  loader: PropTypes.node,
};

export default Button;
