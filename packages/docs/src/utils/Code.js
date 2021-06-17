import React from 'react';
import clsx from 'clsx';

export default function Code(props) {
  const {children, type} = props;
  const clsName = clsx('doc code', {
    'normal': type === 'normal',
  });
  return <span className={clsName}>{children}</span>;
}