import React from 'react';
import { Input } from 'react-windy-ui';

export default function Input3(props) {
  return (
    <>
      <div>
        <Input type="textarea" rows="3" cols="20" block={false} placeholder="type=textarea" />
      </div>
      <div className="doc doc-row space">
        <Input type="textarea" rows="3" placeholder="type=textarea" />
      </div>
      <div className="doc doc-row space">
        <Input type="number" placeholder="type=number" />
      </div>
    </>
  );
}
