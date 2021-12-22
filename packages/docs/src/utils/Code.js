import React, {useContext} from 'react';
import clsx from 'clsx';
import {DocThemeContext} from "../common/DocConstants";

export default function Code(props) {
  const {children, type} = props;
  const {theme} = useContext(DocThemeContext);

  const clsName = clsx(`doc code ${theme}`, {
    'normal': type === 'normal',
  });
  return <span className={clsName}>{children}</span>;
}