import React from 'react';
import useElement from '../common/useElement';
import clsx from 'clsx';

const DisabledStyle = {
  cursor: 'not-allowed',
  opacity: '.7',
};

const EnabledStyle = {
  cursor: 'pointer',
  color: '#007aff',
};

const Title = React.forwardRef((props, ref) => {
  const {directRef, block, ...otherProps} = props;
  const clsName = clsx('dropdown-title', {
    block: block,
  })
  return useElement({...otherProps}, ref, clsName, null,
      props.disabled ? DisabledStyle : EnabledStyle);
});

export default Title;