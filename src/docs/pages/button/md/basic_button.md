---   
  order: 2
  type: sample
  title: 基本按钮   
  zh_CN: 基本按钮
  en_US: Basic Buttons
---      

+++ zh_CN   
 常规使用的话，除了默认按钮以外，还提供了"primary"、"secondary"两种类型的按钮。


+++ en_US   
  Default, primary, secondary buttons are provided for common use.   


+++ SampleCode
 
```jsx
import React from 'react';
import {Button} from 'react-windy-ui';

const Basic_button = () => {
  return <>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
  </>;
};

export default Basic_button;
```  
