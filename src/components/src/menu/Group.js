import React, {useContext, useMemo} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {getPaddingStyle} from './MenuUtils';
import {MenuContext} from '../common/Context';

/**
 * Menu Group
 */
const Group = React.forwardRef((props, ref) => {
  const {
    className = 'menu-group',
    extraClassName,
    header,
    children,
    level,
    style,
    ...otherProps
  } = props;
  const ctx = useContext(MenuContext);
  const paddingStyle = useMemo(() => ctx.autoIndent ?
      getPaddingStyle({
        ignored: ctx.popupSubMenu,
        indentUnit: ctx.indentUnit,
        indentation: ctx.groupIndentation,
        initIndent: ctx.groupInitIndent,
        level: level,
      }) : null,
      [
        ctx.autoIndent,
        ctx.groupIndentation,
        ctx.groupInitIndent,
        ctx.indentUnit,
        ctx.popupSubMenu,
        level]);

  const newStyle = {...paddingStyle, ...style};

  const clsName = clsx(extraClassName, className);
  return <>
    <div className={clsName} style={newStyle} {...otherProps} ref={ref}>
      {header ? header : ' '}
    </div>
    {children}
  </>;
});

Group.propTypes = {
  className: PropTypes.string,
  extraClassName: PropTypes.string,
  header: PropTypes.node,
  level: PropTypes.number,
  style: PropTypes.object,
};

export default Group;
