import React from 'react';
import {Button, IconList, IconQuestion, IconSearch} from 'react-windy-ui';

const IconButton = () => {
  return <>
    <Button type="primary" size="large" leftIcon={<IconList/>}/>
    <Button type="primary" size="medium"
            leftIcon={<IconQuestion/>}/>
    <Button type="primary" size="small" leftIcon={<IconSearch/>}/>
    <br/>
  </>;
};

export default IconButton;