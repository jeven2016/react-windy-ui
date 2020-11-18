import React from "react";
import {Button} from 'react-windy-ui';

function addHiddenInput(form, name, value) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

const handleCodeSandboxClick = () => {
  const parameters = compress({
    files: {
      'package.json': {
        content: {
          title: 'react-windy-ui',
          description: "demo for react-windy-ui ",
          dependencies: {
            'react-windy-ui': 'latest'
          },
          devDependencies: {
            'react-scripts': 'latest',
          },
          main: 'index.js',
          scripts: 'react start',
        },
      },
      ...Object.keys(demoConfig.files).reduce((files, name) => {
        files[name] = {content: demoConfig.files[name]};
        return files;
      }, {}),
    },
  });

  const form = document.createElement('form');
  form.method = 'POST';
  form.target = '_blank';
  form.action = 'https://codeSandbox.io/api/v1/sandboxes/define';
  addHiddenInput(form, 'parameters', parameters);
  document.body.appendChild(form);
  form.submit();
  document.body.removeChild(form);
};

export default function SandboxButton(props) {
  const {
    code
  } = props;
  return <Button>
    Code
  </Button>
}