import React, { useCallback, useState } from 'react';
import { Dropdown, IconArrowDown } from 'react-windy-ui';

export default function Dp6() {
  const [active, setActive] = useState(false);

  const handleActiveChange = useCallback((nextActive, e) => {
    setActive(nextActive);
  }, []);

  const handleSelect = useCallback((id, e) => {
    if (id === 'item3') {
      //revert the active state to true while the item3 is clicked
      setActive(true);
      return;
    }
    console.log(`You just selected ${id}`);
  }, []);

  const title = (
    <span
      style={{
        color: '#0ca0ff',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center'
      }}
    >
      Actions <IconArrowDown style={{ marginLeft: '.5rem' }} />
    </span>
  );

  return (
    <>
      <Dropdown
        title={title}
        activeBy="hover"
        active={active}
        onChange={(nextActive, e) => handleActiveChange(nextActive, e)}
        onSelect={handleSelect}
      >
        <Dropdown.Menu>
          <Dropdown.Item id="item1">Menu Item1</Dropdown.Item>
          <Dropdown.Item id="item2">Menu Item2</Dropdown.Item>
          <Dropdown.Item id="item3">Menu won't close</Dropdown.Item>
          <Dropdown.Item id="item4">Menu Item4</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}
