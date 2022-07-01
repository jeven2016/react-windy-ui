import React, { useState } from 'react';
import { Button, Space, Toggle } from 'react-windy-ui';

export default function Space5() {
  const [block, setBlock] = useState(false);
  const [blockItem, setBlockItem] = useState(false);
  return (
    <>
      <div className="doc doc-row">
        <Toggle defaultActive={block} onChange={(active) => setBlock(active)} label="block" />
        <Toggle
          defaultActive={blockItem}
          onChange={(active) => setBlockItem(active)}
          label="blockItem"
        />
      </div>
      <Space
        block={block}
        blockItem={blockItem}
        gutter={{ x: 8 }}
        style={{ background: 'black', padding: '8px', height: '10rem' }}
      >
        <Button color="purple" hasOutlineBackground={false} outline invertedOutline hasMinWidth>
          purple
        </Button>
        <Button color="green" hasOutlineBackground={false} outline invertedOutline hasMinWidth>
          green
        </Button>
        <Button color="red" hasOutlineBackground={false} outline invertedOutline hasMinWidth>
          red
        </Button>
      </Space>
    </>
  );
}
