import React from 'react';

export default function DemoDesc(props) {
  const {title, children} = props;
  return <>
    <fieldset className="doc desc">
      <legend>{title}</legend>
      <div className="doc desc-area">
        {children}
      </div>
    </fieldset>
  </>;
}