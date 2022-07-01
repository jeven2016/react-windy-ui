import React from 'react';
import { IconAccount, Input } from 'react-windy-ui';

export default function Input3_1(props) {
  return (
    <>
      <div>
        <div className="doc doc-row space">
          <Input
            type="password"
            placeholder="Password"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
        <div className="doc doc-row space">
          <Input
            type="password"
            icon={<IconAccount style={{ color: 'rgb(12, 160, 255)' }} />}
            leftIcon
            placeholder="Password"
          />
        </div>
      </div>
    </>
  );
}
