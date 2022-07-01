import React from 'react';
import { IconSearch, Input, IconCalendar, IconWarning, Loader } from 'react-windy-ui';

export default function Input2(props) {
  return (
    <>
      <div className="doc doc-row space">
        <Input placeholder="This is a input" icon={<IconSearch />} />
      </div>

      <div className="doc doc-row space">
        <Input
          placeholder="This is a input"
          icon={<IconSearch />}
          rightIcons={[<IconWarning />, <IconCalendar />]}
        />
      </div>

      <div className="doc doc-row space">
        {/*the icon placed in left side, on the contrary the icons of rightIcons always display in the right side*/}
        <Input
          leftIcon
          icon={<IconSearch />}
          rightIcons={[
            <IconWarning style={{ color: '#fbbe11' }} />,
            <IconCalendar style={{ color: 'rgb(12, 160, 255)' }} />
          ]}
        />
      </div>

      <div className="doc doc-row space">
        <Input.IconInput block placeholder="Loading" icon={<Loader size="small" active={true} />} />
      </div>

      <div className="doc doc-row space">
        <Input
          placeholder="This is a input"
          icon={<span style={{ color: 'rgb(12, 160, 255)' }}>RMB</span>}
        />
      </div>
    </>
  );
}
