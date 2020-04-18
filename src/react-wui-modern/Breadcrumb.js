import React from 'react';
import clsx from 'clsx';

const Item = (props) => {
  const {active, children, ...otherProps} = props;
  let clsName = clsx('item', {
    active,
  });
  return <span className={clsName} {...otherProps}>{children}</span>;
};

const Breadcrumb = React.forwardRef((props, ref) => {
  const {hasBackground, separator, children, ...otherProps} = props;

  let clsName = clsx('breadcrumb', {
    'with-bg': hasBackground,
  });

  return (
      <div ref={ref} className={clsName} {...otherProps}>
        {
          React.Children.map(children, (chd, i) => {
            if (i === 0) {
              return chd;
            }
            return <>
              <div className="bc-divider">{separator}</div>
              {chd}
            </>;
          })
        }
      </div>
  );
});

Breadcrumb.defaultProps = {
  separator: '/',
};

Breadcrumb.Item = Item;
export default Breadcrumb;