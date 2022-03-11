import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { invoke, isFunction } from '../Utils';

const Item = (props) => {
  const {
    value,
    className = 'item',
    extraClassName,
    active = false,
    children,
    ...otherProps
  } = props;
  let clsName = clsx(extraClassName, className, {
    active
  });
  return (
    <span className={clsName} {...otherProps}>
      {children}
    </span>
  );
};

const Breadcrumb = React.forwardRef((props, ref) => {
  const {
    extraClassName,
    className = 'breadcrumb',
    hasBackground,
    separator = '/',
    children,
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className, {
    'with-bg': hasBackground
  });

  return (
    <div ref={ref} className={clsName} {...otherProps}>
      {React.Children.map(children, (chd, i) => {
        if (i === 0) {
          return chd;
        }
        return (
          <>
            <div className="bc-divider">
              {isFunction(separator) ? invoke(separator, i, chd.props) : separator}
            </div>
            {chd}
          </>
        );
      })}
    </div>
  );
});

Item.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  active: PropTypes.bool,
  value: PropTypes.any
};

Breadcrumb.propTypes = {
  extraClassName: PropTypes.string,
  className: PropTypes.string,
  hasBackground: PropTypes.bool,
  separator: PropTypes.oneOfType([PropTypes.node, PropTypes.func])
};

Breadcrumb.Item = Item;
export default Breadcrumb;
