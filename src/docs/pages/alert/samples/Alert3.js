import React from 'react';
import {Alert, IconHome} from 'react-windy-ui';

export default function Alert3() {
  return <>
    <Alert title="Customized"
           style={{
             color: 'white',
             background: 'rgba(20,163,24)',
             borderWidth: '0',
             borderRadius: '0.5rem',
           }}
           iconStyle={{color: 'white'}}
           closeStyle={{color: 'white'}}
           type="ok"
           body="This is my body."
           icon={<IconHome/>}/>
    <Alert title="Customized"
           style={{
             color: 'white',
             background: '#0ca0ff',
             borderWidth: '0',
             borderRadius: '0.5rem',
           }}
           iconStyle={{color: 'white'}}
           closeStyle={{color: 'white'}}
           type="info"
           body="This is my body."
           icon={<IconHome/>}/>
    <Alert title="Customized"
           style={{
             color: 'white',
             background: 'rgb(236, 187, 33)',
             borderWidth: '0',
             borderRadius: '0.5rem',
           }}
           iconStyle={{color: 'white'}}
           closeStyle={{color: 'white'}}
           type="warning"
           body="This is my body."
           icon={<IconHome/>}/>
    <Alert title="Customized"
           style={{
             color: 'white',
             background: '#d82b3a',
             borderWidth: '0',
             borderRadius: '0.5rem',
           }}
           iconStyle={{color: 'white'}}
           closeStyle={{color: 'white'}}
           type="error"
           body="This is my body."
           icon={<IconHome/>}/>
  </>;
}