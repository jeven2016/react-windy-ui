import React, {useContext} from 'react';
import {MenuContext, SubMenuContext} from './MenuUtils';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {preventEvent} from '../event';
import {isDisabledMenu} from './BaseMenu';

/**
 * Menu Header
 */
const Header = React.forwardRef((props, ref) => {
  const {disabled, id, className, extraClassName, children, paddingLeft} = props;
  const menuCtx = useContext(MenuContext);
  const parenSubMenuCtx = useContext(SubMenuContext);

  //disable menu from three levels
  const menuDisabled = menuCtx.menuDisabled;
  const parentSubMenuDisabled = parenSubMenuCtx.subMenuDisabled;

  let isDisabled = isDisabledMenu(disabled, parentSubMenuDisabled,
      menuDisabled);

  let clsName = clsx(extraClassName, className, {disabled: isDisabled});

  return <li className={clsName}
             ref={ref}
             onClick={(e) => {
               if (isDisabled) {
                 preventEvent(e);
                 return;
               }
               const handler = menuCtx.clickHeader;
               return handler({id: id}, e);
             }}
             style={{paddingLeft: paddingLeft}}>
    {children}
  </li>;
});

Header.defaultProps = {
  disabled: null,
  className: 'menu-header',
};

Header.propTypes = {
  disabled: PropTypes.bool, //disable this Menu
  className: PropTypes.string, //the class name of Header
};

export default Header;