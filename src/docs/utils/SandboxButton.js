import React from 'react';
import {Button} from 'react-windy-ui';
import LZString from 'lz-string';
import {getHtml, getIndexContent} from './SampleTemplate';

function addParam(form, name, value) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

const runCode = () => {
  const paramObject = {
    files: {
      'package.json': {
        content: {
          title: 'react-windy-ui',
          description: 'demo for react-windy-ui ',
          dependencies: {
            'react-windy-ui': 'latest',
          },
          devDependencies: {
            'react-scripts': 'latest',
            'lodash': 'latest',
            'react-swipeable-views': '^0.13.0',
          },
          main: 'index.js',
          scripts: 'react start',
        },
      },
      'index.js': {
        content: getIndexContent(),
      },
      'index.html': {
        content: getHtml(),
      },
      'Sample.js': {
        content: `
import React from 'react';
import {Button} from 'react-windy-ui';

const SampleBtn1 = () => {
  return <>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="secondary">Secondary</Button>
  </>;
};

export default SampleBtn1;
        
        `,
      },
    },
  };

  const params = LZString.compressToBase64(JSON.stringify(paramObject));
  /* ...Object.keys(demoConfig.files).reduce((files, name) => {
     files[name] = {content: demoConfig.files[name]};
     return files;
   }, {}),*/

  const form = document.createElement('form');
  form.target = '_blank';
  form.method = 'POST';
  form.action = 'https://codeSandbox.io/api/v1/sandboxes/define';
  addParam(form, 'parameters', params);
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

export default function SandboxButton(props) {
  const {
    code,
  } = props;
  return <Button onClick={runCode}>
    Code
  </Button>;
}