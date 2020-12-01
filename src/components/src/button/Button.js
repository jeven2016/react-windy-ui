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
    inverted = false, //todo: new field
    hasOutlineBackground = true, //todo : new field
    initOutlineColor = false, //todo : new field
    hasBox = true, //todo : new field
    hasBorder = true, //todo : new field,
    invertedOutline = false, //todo
    hasRipple = true,//todo
    rippleColor = '#fff',//todo
    onClick,
    disabled = false,
    leftIcon,//todo
    rightIcon,//todo
    loading = false,//todo
    leftLoader = true,//todo
    loader = <Loader type="primary" active={true} size="small"/>,//todo
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

  let clsName = useMemo(() => ({
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
  }), [
    type,
    color,
    outline,
    inverted,
    size,
    block,
    active,
    circle,
    shape,
    hasOutlineBackground,
    hasMinWidth,
    initOutlineColor,
    hasBox,
    hasBorder,
    invertedOutline,
    isIconButton]);

  if (shape === 'round') {
    console.log(clsName);
  }

  let nativeTypeDef = useMemo(() => {
    const nativeElemType = nativeType === 'a' ? 'a' : 'button';

    //the button has default behaviour of submit, so the type should be populated
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
            isLoading && leftLoader && React.cloneElement(loader,
                {style: {marginRight: '.5rem'}})
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
          {isLoading && !leftLoader &&
          React.cloneElement(loader,
              {style: {marginLeft: '.5rem'}})
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
  type: PropTypes.string,   //it can only be 'primary', 'secondary', 'info', 'warning', 'error', etc.
  nativeType: PropTypes.oneOf(['button', 'reset', 'submit', 'a']), //the native html type, like 'button', 'reset' or 'submit'
  block: PropTypes.bool, //whether the button's width is '100%' and it occupies the whole row
  color: PropTypes.string, //the color, like "primary", "red"
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
  disabled: PropTypes.bool, //disable this button
  active: PropTypes.bool, // active this button
  onClick: PropTypes.func, //the click callback provided
  size: PropTypes.oneOf(['large', 'medium', 'small', '']), //the size of the button
  outline: PropTypes.bool, //whether to display as outlined button
  circle: PropTypes.bool, //whether to display as a Circular button
  hasMinWidth: PropTypes.bool, // whether to set min width of the button
  inverted: PropTypes.bool,
  hasOutlineBackground: PropTypes.bool,
  initOutlineColor: PropTypes.bool,
  invertedOutline: PropTypes.bool,
  hasRipple: PropTypes.bool,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  rippleColor: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'round']),
  loading: PropTypes.bool,
  leftLoader: PropTypes.bool,
  loader: PropTypes.node,
};

export default Button;
