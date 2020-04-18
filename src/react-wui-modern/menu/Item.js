import React, {useContext, useMemo} from 'react';
import {isBlank, isNil, isString} from '../Utils';
import {FloatMenuContext, MenuContext, SubMenuContext} from './MenuUtils';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Element from '../common/Element';
import {isDisabledMenu} from './BaseMenu';

const Item = React.forwardRef((props, ref) => {
  const {
    className,
    extraClassName,
    active,
    align,
    hasBottomBar,
    hasBox,
    disabled,
    children,
    paddingLeft,
    id,
    hasBackground,
    value,
    text,
    ...otherProps
  } = props;

  const menuCtx = useContext(MenuContext);
  const floatMenuCtx = useContext(FloatMenuContext);
  const activeItems = !isNil(menuCtx.activeItems) ? menuCtx.activeItems : [];

  const parenSubMenuCtx = useContext(SubMenuContext);

  //disable menu from three levels
  const menuDisabled = menuCtx.menuDisabled;
  const parentSubMenuDisabled = parenSubMenuCtx.subMenuDisabled;

  let isDisabled = isDisabledMenu(disabled, parentSubMenuDisabled,
      menuDisabled);

  const disabledItem = isDisabled;
  const isActive = () => {
    if (disabledItem) {
      return false;
    }

    if (!isNil(props.id) && activeItems.includes(props.id)) {
      return true;
    }
    if (!isNil(props.value) && activeItems.includes(props.value)) {
      return true;
    }
    return false;
  };

  const clsName = clsx(extraClassName, className, {
    [align]: align,
    'with-box': hasBox,
    'with-bg': hasBackground,
    'with-bottom-bar': hasBottomBar,
    active: isActive(),
    disabled: disabledItem,
  });

  const onClick = (evt) => {
    if (disabledItem) {
      return;
    }
    const itemInfo = {
      id: props.id,
      value: props.value,
      text: !isNil(props.text) ? props.text : props.children,
    };
    if (isNil(itemInfo.id)) {
      delete itemInfo.id;
    }

    if (!menuCtx.clickItem) {
      return;
    }
    let closeMenu = menuCtx.clickItem(itemInfo, evt);

    if (floatMenuCtx.clickFloatMenuItem) {
      floatMenuCtx.clickFloatMenuItem(props.id, closeMenu, evt);
    }
  };

  const displayChildren = useMemo(() => {
    if (isNil(children)) {
      return text;
    }
    if (isString(children) && isBlank(children)) {
      return text;
    }
    return children;
  }, [children, text]);
  return <Element className={clsName}
                  disabled={disabledItem}
                  ref={ref}
                  style={{paddingLeft: paddingLeft}}
                  onClick={(evt) => onClick(evt)}
                  {...otherProps}>
    {displayChildren}
  </Element>;
});

Item.defaultProps = {
  className: 'menu-item',
  hasBox: false,
  hasBackground: false,
  hasBottomBar: false,
  disabled: null,
  align: null, //left or right
};
Item.propsType = {
  className: PropTypes.string,
  hasBottomBar: PropTypes.bool,
  hasBox: PropTypes.bool, //make the item show a box
  hasBackground: PropTypes.bool, // show a background for menu items
  disabled: PropTypes.bool, //disable this Menu
  align: PropTypes.oneOf(['left', 'right']), // align this item to left or right position
};

Item.Left = React.forwardRef((props, ref) =>
    <Element nativeType="span" className="left"
             ref={ref} {...props}/>,
);
Item.Center = React.forwardRef((props, ref) =>
    <Element nativeType="span" className="center"
             ref={ref} {...props}/>,
);
Item.Right = React.forwardRef((props, ref) =>
    <Element nativeType="span" className="right"
             ref={ref} {...props}/>,
);

export default Item;