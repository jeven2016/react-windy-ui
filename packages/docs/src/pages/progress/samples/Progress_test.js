import React from 'react';

import { Button, ButtonGroup, Progress } from 'react-windy-ui';

export default function Progress_test() {
  return (
    <>
      <div style={{ width: '200px', height: '200px' }}>
        <svg viewBox="0 0 100 100">
          <path
            d="M 50 50 m -40 0 a 40 40 0 1 0 80 0  a 40 40 0 1 0 -80 0"
            fill="none"
            stroke="#e5e9f2"
            strokeLinecap="round"
            strokeWidth="5"
          >
            >
          </path>
          <path
            d="M 50 50 m -40 0 a 40 40 0 1 0 80 0  a 40 40 0 1 0 -80 0"
            fill="none"
            strokeLinecap="round"
            stroke="#20a0ff"
            className="circle-progress"
            transform="rotate(90,50,50)"
            strokeWidth="5"
          ></path>
        </svg>
      </div>
    </>
  );
}
