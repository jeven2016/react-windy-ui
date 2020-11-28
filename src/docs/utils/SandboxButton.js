import React from 'react';
import {Button} from 'react-windy-ui';
import LZString from 'lz-string';
import {getHtml, getIndexContent, getPackage} from './SampleTemplate';

function addParam(form, name, value) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.name = name;
  input.value = value;
  form.appendChild(input);
}

const runCode = (code) => {
  const paramObject = {
    files: {
      ...getPackage(),
      'index.js': {
        content: getIndexContent(),
      },
      'index.html': {
        content: getHtml(),
      },
      'Sample.js': {
        content: code,
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
  return <Button inverted circle size="small"
                 onClick={() => code && runCode(code)}>
    <svg className="icon svg" style={{fontSize: '1em'}}
         viewBox="0 0 1024 1024" fill="currentColor">
      <path
          d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"></path>
    </svg>
  </Button>;
}