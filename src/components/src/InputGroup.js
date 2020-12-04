import React, {useMemo} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {InputGroupContext} from './common/Context';

/**
 * Input Group Component
 */
const InputGroup = React.forwardRef((props, ref) => {
  const {
    block = true,
    size = 'medium',
    className = 'input-group',
    extraClassName,
    children,  //todo
    ...otherProps
  } = props;

  let clsName = clsx(extraClassName, className, {block: block});
  const ctx = useMemo(() => ({size, withinGroup: true}),
      [size]);

  const updatedChd = useMemo(() => {
    return React.Children.map(children, (chd) => {
      if (chd.type === Item || chd.type === Label) {
        return chd;
      }

      return <Item autoScale={true} compact={false}>
        {chd}
      </Item>;
    });
  }, [children]);

  return <InputGroupContext.Provider value={ctx}>
    <span ref={ref} className={clsName} {...otherProps}>
      {updatedChd}
    </span>
  </InputGroupContext.Provider>;
});

/**
 * Item Component
 */
const Item = React.forwardRef((props, ref) => {
  const {extraClassName, autoScale = true, ...rest} = props;
  const clsName = clsx(extraClassName, 'item', {
    'auto-scale': autoScale,
    'no-scale': !autoScale,
  });
  return <div className={clsName} {...rest} ref={ref}/>;
});

/**
 * Label Component
 */
const Label = React.forwardRef((props, ref) => {
  const {
    className = 'label',
    extraClassName,
    hasBackground = true,//todo
    compact = false,//todo
    children,
    ...otherProps
  } = props;
  const labelCls = clsx(extraClassName, className);
  let cntClsName = clsx('content',
      {'with-bg': hasBackground, compact: compact});

  return <div ref={ref} className={labelCls} {...otherProps}>
    <div className={cntClsName}>{children}</div>
  </div>;
});

InputGroup.propTypes = {
  block: PropTypes.bool, //whether to occupy the whole row
  size: PropTypes.oneOf(['large', 'medium', 'small']),
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
  disabled: PropTypes.bool,
};

Label.propTypes = {
  className: PropTypes.string, //the class name of button
  extraClassName: PropTypes.string, //the customized class need to add
};

InputGroup.Label = Label;
InputGroup.Item = Item;
export default InputGroup;