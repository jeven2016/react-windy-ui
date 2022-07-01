import React, { useState } from 'react';
import { Select, Button, IconClear } from 'react-windy-ui';

export default function Select9() {
  const [values, setValues] = useState(['bj', 'nj']);

  const render = (info, value, color) => {
    return (
      <Button
        size="small"
        outline={false}
        color={color}
        onClick={(e) => info.removeItem(value, e)}
        key={info.value}
        style={{ margin: '2px 2px 2px 0' }}
      >
        {info.children}
        <IconClear />
      </Button>
    );
  };

  return (
    <>
      <div className="doc doc-row">
        <Select
          block
          multiSelect={true}
          searchable={false}
          value={values}
          onRemove={(v) => setValues(values.filter((val) => val !== v))}
          onSelect={(valueArray) => setValues(valueArray)}
        >
          <Select.Option value="bj" render={(info) => render(info, 'bj', 'green')}>
            Beijing
          </Select.Option>
          <Select.Option value="nj" render={(info) => render(info, 'nj', 'green')}>
            Nanjing
          </Select.Option>
          <Select.Option value="sh" render={(info) => render(info, 'sh', 'green')}>
            Shanghai
          </Select.Option>
          <Select.Option value="xian" render={(info) => render(info, 'xian', 'green')}>
            XiAn
          </Select.Option>
          <Select.Option value="ny" render={(info) => render(info, 'ny', 'green')}>
            纽约
          </Select.Option>
          <Select.Option value="hk" render={(info) => render(info, 'hk', 'green')}>
            香港
          </Select.Option>
        </Select>
      </div>
    </>
  );
}
