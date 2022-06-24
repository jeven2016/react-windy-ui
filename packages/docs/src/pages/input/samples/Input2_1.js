import React from 'react';
import { IconSearch, Input } from 'react-windy-ui';

//todo  update the document
export default function Input2_1(props) {
  return (
    <>
      <div className="doc doc-row space">
        <Input size="small" placeholder="This is a input" icon={<IconSearch />} />
      </div>
      <div className="doc doc-row space">
        <Input size="medium" placeholder="This is a input" icon={<IconSearch />} />
      </div>
      <div className="doc doc-row space">
        <Input size="large" placeholder="This is a input" icon={<IconSearch />} />
      </div>
      <div className="doc doc-row space">
        <Input size="small" leftIcon placeholder="This is a input" icon={<IconSearch />} />
      </div>
      <div className="doc doc-row space">
        <Input size="medium" leftIcon placeholder="This is a input" icon={<IconSearch />} />
      </div>

      <div className="doc doc-row space">
        <Input size="large" leftIcon placeholder="This is a input" icon={<IconSearch />} />
      </div>
    </>
  );
}
