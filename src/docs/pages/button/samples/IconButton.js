import React from 'react';
import {Button, IconList, IconQuestion, IconSearch} from 'react-windy-ui';

const IconButton = () => {
  return <>
    <div className="doc doc-row">
      <Button type="primary" size="large" leftIcon={<IconList/>}/>
      <Button type="primary" size="medium"
              leftIcon={<IconQuestion/>}/>
      <Button type="primary" size="small" leftIcon={<IconSearch/>}/>
    </div>
    <div className="doc doc-row">
      <Button type="primary" size="large" leftIcon={<IconList/>} circle/>
      <Button type="primary" size="medium"
              leftIcon={<IconQuestion/>} circle/>
      <Button type="primary" size="small" leftIcon={<IconSearch/>} circle/>
    </div>
  </>;
};

export default IconButton;